// ============================================================
// KOHLER AFFILIATE RO AUTOMATION
// Version: 1.0  |  Social Beat
// ============================================================
// HOW TO DEPLOY:
//   1. Open the Master Config Google Sheet
//   2. Extensions > Apps Script > paste this entire file
//   3. Run Setup > discoverFormFields() to fill in FORM_ENTRY_IDS
//   4. Set RO_DRIVE_FOLDER_ID below
//   5. TEST_MODE = true → emails go to TEST_EMAIL only
//   6. Run "▶ Run RO Automation" from the custom menu
// ============================================================


// ============================================================
// SECTION 1 — CONFIGURATION  (edit these before running)
// ============================================================

const CONFIG = {

  // Sheet names inside the Master Config spreadsheet
  MASTER_SHEET_NAME:    'Sheet1',
  LOG_SHEET_NAME:       'Processing Log',
  EXCEPTION_SHEET_NAME: 'Exception Log',

  // ── Email ────────────────────────────────────────────────
  EMAIL_SENDER_NAME: 'Social Beat – Kohler Team',
  EMAIL_CC:          ['sameer.khan@socialbeat.in'],

  // TEST_MODE = true  → all emails go to TEST_EMAIL (POC never contacted)
  // TEST_MODE = false → emails go to the actual POC in Master Config
  TEST_MODE:   true,
  TEST_EMAIL:  'sameer.khan@socialbeat.in',

  // ── Drive ────────────────────────────────────────────────
  // Folder ID from the Drive URL:  drive.google.com/drive/folders/<ID>
  RO_DRIVE_FOLDER_ID: 'YOUR_DRIVE_FOLDER_ID_HERE',

  // ── Month ────────────────────────────────────────────────
  // Set to e.g. 'May 26' to process a specific month.
  // null = auto-detect: uses the most recent month with data in each tracker.
  PROCESSING_MONTH: null,

  // ── Gmail search: how long to wait for RO PDF after form submit (minutes) ──
  PDF_WAIT_MINUTES: 5,

  // ── Form field → entry ID mapping ───────────────────────
  // Run discoverFormFields() once and paste the IDs here.
  // Format: 'entry.1234567890'
  FORM_ENTRY_IDS: {
    'Title Of Document':                              'entry.PLACEHOLDER',
    'Vendor Name':                                    'entry.PLACEHOLDER',
    'Vendor Address 1':                               'entry.PLACEHOLDER',
    'Vendor Address 2':                               'entry.PLACEHOLDER',
    'Vendor City':                                    'entry.PLACEHOLDER',
    'Vendor Pincode':                                 'entry.PLACEHOLDER',
    'Vendor State Name':                              'entry.PLACEHOLDER',
    'Vendor GST Registration Number':                 'entry.PLACEHOLDER',
    'MSME Registration Number':                       'entry.PLACEHOLDER',
    'Campaign Duration':                              'entry.PLACEHOLDER',
    'Client Name':                                    'entry.PLACEHOLDER',
    'Campaign Details / Order details':               'entry.PLACEHOLDER',
    'Campaign Amount':                                'entry.PLACEHOLDER',
    'Tax':                                            'entry.PLACEHOLDER',
    'Payment Terms':                                  'entry.PLACEHOLDER',
    'Customer PO':                                    'entry.PLACEHOLDER',
  },
};


// ============================================================
// SECTION 2 — MASTER CONFIGURATION READER
// ============================================================

/**
 * Reads the Master Config sheet.
 * Layout: row 0 = affiliate names (columns B+); column A = field labels.
 * Returns an array of objects keyed by field label.
 */
function readMasterConfig() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(CONFIG.MASTER_SHEET_NAME);
  if (!sheet) throw new Error(`Sheet "${CONFIG.MASTER_SHEET_NAME}" not found`);

  const data = sheet.getDataRange().getValues();

  // Map: fieldLabel → row index
  const rowIdx = {};
  for (let r = 0; r < data.length; r++) {
    const label = String(data[r][0]).trim();
    if (label) rowIdx[label] = r;
  }

  // Affiliate names from row 0, columns B+
  const affiliates = [];
  for (let c = 1; c < data[0].length; c++) {
    const name = String(data[0][c]).trim();
    if (!name) continue;

    const aff = {};
    for (const [label, r] of Object.entries(rowIdx)) {
      const raw = data[r][c];
      aff[label] = (raw === null || raw === undefined) ? '' : String(raw).trim();
    }
    // Store canonical name separately (row 0 label)
    aff['_name'] = name;
    affiliates.push(aff);
  }

  return affiliates;
}


// ============================================================
// SECTION 3 — VALIDATOR
// ============================================================

const MANDATORY_FIELDS = [
  'Sheet ID',
  'Email ID',
  'Subject line',
  'RO Form Link',
  'Vendor Name (as appearing in the GST Certificate)',
  'Vendor GST Registration Number',
  'POC Name',
];

const GST_REGEX    = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}Z[A-Z\d]{1}$/;
const EMAIL_REGEX  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateAffiliate(aff) {
  const errors = [];

  for (const field of MANDATORY_FIELDS) {
    const val = aff[field] || '';
    if (!val || val.toLowerCase().startsWith('pull from')) {
      errors.push(`Missing: "${field}"`);
    }
  }

  const email = aff['Email ID'] || '';
  if (email && !EMAIL_REGEX.test(email)) {
    errors.push(`Invalid email: "${email}"`);
  }

  const gst = aff['Vendor GST Registration Number'] || '';
  if (gst && !GST_REGEX.test(gst)) {
    errors.push(`GST format warning (verify): "${gst}"`);
  }

  return errors;
}


// ============================================================
// SECTION 4 — TRACKER READER
// ============================================================

/**
 * Opens the affiliate tracker by Sheet ID, finds the Summary tab
 * (assumed to be the first sheet), and fetches the monthly payable amount.
 *
 * Summary tab expected layout:
 *   Row 0: Months | Spends | Orders | Revenue | ROAS | AOV
 *   Row 1+: Jan 26 | ₹47,180 | ...
 *
 * "Spends" column = the monthly payable amount.
 *
 * @param {string} sheetId  - Google Sheets file ID
 * @param {string|null} targetMonth - e.g. 'May 26', or null for latest
 * @returns {{ month, amount } | { error }}
 */
function fetchMonthlyPayable(sheetId, targetMonth) {
  if (!sheetId || sheetId.trim() === '') {
    return { error: 'Tracker Sheet ID is empty' };
  }

  let trackerSS;
  try {
    trackerSS = SpreadsheetApp.openById(sheetId.trim());
  } catch (e) {
    return { error: `Cannot open tracker (check Sheet ID / permissions): ${e.message}` };
  }

  // Summary is the first sheet
  const sheet = trackerSS.getSheets()[0];
  const data  = sheet.getDataRange().getValues();

  // Locate header row
  let headerRow = -1, monthsCol = -1, spendsCol = -1;

  outer:
  for (let r = 0; r < Math.min(data.length, 10); r++) {
    for (let c = 0; c < data[r].length; c++) {
      if (String(data[r][c]).trim().toLowerCase() === 'months') {
        headerRow  = r;
        monthsCol  = c;
        // Find Spends in the same row
        for (let cc = c + 1; cc < data[r].length; cc++) {
          if (String(data[r][cc]).trim().toLowerCase() === 'spends') {
            spendsCol = cc;
            break;
          }
        }
        break outer;
      }
    }
  }

  if (headerRow === -1 || spendsCol === -1) {
    return { error: 'Could not find Months/Spends columns in tracker Summary tab' };
  }

  // Parse rows
  const rows = [];
  for (let r = headerRow + 1; r < data.length; r++) {
    const rawMonth  = String(data[r][monthsCol]).trim();
    const rawAmount = String(data[r][spendsCol]).replace(/[₹,\s]/g, '');
    const amount    = parseFloat(rawAmount);

    if (rawMonth && !isNaN(amount) && amount > 0) {
      rows.push({ month: rawMonth, amount });
    }
  }

  if (rows.length === 0) {
    return { error: 'No monthly data found in tracker Summary tab' };
  }

  if (!targetMonth) {
    // Return most recent month
    return rows[rows.length - 1];
  }

  const match = rows.find(
    r => r.month.toLowerCase() === targetMonth.toLowerCase()
  );

  if (!match) {
    const available = rows.map(r => r.month).join(', ');
    return { error: `Month "${targetMonth}" not found. Available: ${available}` };
  }

  return match;
}


// ============================================================
// SECTION 5 — FORM SUBMISSION
// ============================================================

/**
 * Extracts form info from any Google Forms URL variant.
 * Returns { type: 'published'|'edit', id } or null.
 */
function parseFormUrl(formUrl) {
  const pub  = formUrl.match(/\/forms\/d\/e\/([a-zA-Z0-9_-]+)/);
  const edit = formUrl.match(/\/forms\/d\/([a-zA-Z0-9_-]+)/);
  if (pub)  return { type: 'published', id: pub[1] };
  if (edit) return { type: 'edit',      id: edit[1] };
  return null;
}

/**
 * Converts a month label ('May 26') to a campaign duration string.
 * e.g. '1st May 2026 – 31st May 2026'
 */
function monthToCampaignDuration(monthLabel) {
  const parts = monthLabel.split(' ');
  if (parts.length < 2) return monthLabel;

  const monthNames = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  const monthIdx   = monthNames.indexOf(parts[0].toLowerCase());
  const year       = 2000 + parseInt(parts[1], 10);

  if (monthIdx === -1 || isNaN(year)) return monthLabel;

  const lastDay = new Date(year, monthIdx + 1, 0).getDate();
  const monthFull = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
  const abbr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const monthFullName = abbr[monthIdx];

  return `1st ${monthFullName} ${year} – ${lastDay}th ${monthFullName} ${year}`;
}

/**
 * Submits the RO Google Form for one affiliate.
 * Uses UrlFetchApp to POST to the form action endpoint.
 */
function submitRoForm(aff, month, amount) {
  const formUrl  = aff['RO Form Link'];
  const formInfo = parseFormUrl(formUrl);

  if (!formInfo) {
    return { success: false, error: `Cannot parse form URL: "${formUrl}"` };
  }

  const campaignDuration  = monthToCampaignDuration(month);
  const campaignDetails   = `Kohler CPS Campaign - ${month}`;

  // Check if form entry IDs have been configured
  const hasRealIds = Object.values(CONFIG.FORM_ENTRY_IDS)
    .some(v => v && !v.includes('PLACEHOLDER'));

  if (!hasRealIds) {
    return {
      success: false,
      error: 'Form entry IDs not configured. Run discoverFormFields() first.',
    };
  }

  const E = CONFIG.FORM_ENTRY_IDS;

  const payload = {
    [E['Title Of Document']]:                   aff['Title Of Document']       || 'RO',
    [E['Vendor Name']]:                         aff['Vendor Name (as appearing in the GST Certificate)'],
    [E['Vendor Address 1']]:                    aff['Vendor Address 1']         || '',
    [E['Vendor Address 2']]:                    aff['Vendor Address 2']         || '',
    [E['Vendor City']]:                         aff['Vendor City']              || '',
    [E['Vendor Pincode']]:                      aff['Vendor Pincode']           || '',
    [E['Vendor State Name']]:                   aff['Vendor State Name']        || '',
    [E['Vendor GST Registration Number']]:      aff['Vendor GST Registration Number'],
    [E['MSME Registration Number']]:            aff['MSME Registration Number'] || '',
    [E['Campaign Duration']]:                   campaignDuration,
    [E['Client Name']]:                         aff['Client Name']              || 'Kohler India',
    [E['Campaign Details / Order details']]:    campaignDetails,
    [E['Campaign Amount']]:                     String(Math.round(amount)),
    [E['Tax']]:                                 aff['Tax']                      || 'Exclusive of Tax',
    [E['Payment Terms']]:                       aff['Payment Terms']            || '100% at Invoice Date + 60 Days',
    [E['Customer PO']]:                         aff['Customer PO']              || '',
  };

  // Strip any keys that are still placeholders or empty
  const cleanPayload = {};
  for (const [k, v] of Object.entries(payload)) {
    if (k && !k.includes('PLACEHOLDER') && v !== undefined && v !== null) {
      cleanPayload[k] = v;
    }
  }

  const actionUrl = `https://docs.google.com/forms/d/e/${formInfo.id}/formResponse`;

  try {
    const response = UrlFetchApp.fetch(actionUrl, {
      method:            'post',
      payload:           cleanPayload,
      muteHttpExceptions: true,
      followRedirects:   false,
    });

    const code = response.getResponseCode();

    // Google Forms returns 302 on success (redirect to confirmation page)
    if (code === 200 || code === 302) {
      return { success: true, formAction: actionUrl };
    } else {
      return { success: false, error: `HTTP ${code} from form endpoint` };
    }

  } catch (e) {
    return { success: false, error: `UrlFetch failed: ${e.message}` };
  }
}


// ============================================================
// SECTION 6 — PDF RETRIEVAL FROM GMAIL
// ============================================================

/**
 * Polls Gmail for a PDF attachment generated after form submission.
 * Searches by affiliate name and recent timestamp.
 * Returns { found, blob, originalName } or { found: false, error }.
 */
function waitForRoPdf(affiliateName, month) {
  const maxWait   = CONFIG.PDF_WAIT_MINUTES * 60 * 1000;
  const startTime = Date.now();
  const pollEvery = 15 * 1000; // 15 seconds

  const queries = [
    `has:attachment filename:pdf "${affiliateName}"`,
    `has:attachment filename:pdf subject:RO`,
    `has:attachment filename:pdf subject:"Release Order"`,
    `has:attachment filename:pdf subject:"${month}"`,
  ];

  Logger.log(`[${affiliateName}] Waiting up to ${CONFIG.PDF_WAIT_MINUTES} min for RO PDF…`);

  while (Date.now() - startTime < maxWait) {
    for (const q of queries) {
      try {
        const threads = GmailApp.search(q, 0, 10);
        for (const thread of threads) {
          for (const msg of thread.getMessages()) {
            // Only messages received after we started waiting
            if (msg.getDate().getTime() < startTime - 60000) continue;

            for (const att of msg.getAttachments()) {
              if (att.getName().toLowerCase().endsWith('.pdf')) {
                Logger.log(`[${affiliateName}] PDF found: ${att.getName()}`);
                return { found: true, blob: att.copyBlob(), originalName: att.getName() };
              }
            }
          }
        }
      } catch (e) {
        Logger.log(`Gmail search error: ${e.message}`);
      }
    }

    Utilities.sleep(pollEvery);
  }

  return {
    found: false,
    error: `RO PDF not found in Gmail after ${CONFIG.PDF_WAIT_MINUTES} minutes`,
  };
}


// ============================================================
// SECTION 7 — DRIVE STORAGE
// ============================================================

function saveRoPdfToDrive(pdfBlob, affiliateName, month, year) {
  // Filename convention: RO_AffiliateName_Month_Year.pdf
  const safeName = affiliateName.replace(/[^a-zA-Z0-9]/g, '');
  const safeMonth = month.replace(/\s+/g, '_');
  const fileName  = `RO_${safeName}_${safeMonth}_${year}.pdf`;

  pdfBlob.setName(fileName);

  let folder;
  try {
    folder = DriveApp.getFolderById(CONFIG.RO_DRIVE_FOLDER_ID);
  } catch (e) {
    Logger.log(`Drive folder not found (${CONFIG.RO_DRIVE_FOLDER_ID}), saving to My Drive root`);
    folder = DriveApp.getRootFolder();
  }

  const file = folder.createFile(pdfBlob);

  return {
    fileId:   file.getId(),
    fileName,
    fileUrl:  file.getUrl(),
  };
}


// ============================================================
// SECTION 8 — EMAIL
// ============================================================

function sendRoEmail(aff, month, amount, pdfBlob, fileName) {
  const recipient = CONFIG.TEST_MODE ? CONFIG.TEST_EMAIL : aff['Email ID'];
  // Subject line used exactly as stored in Master Config — month reflects campaign start, not processing month
  const subject   = aff['Subject line'];
  const body      = buildEmailBody(aff, month, amount);

  try {
    GmailApp.sendEmail(recipient, subject, body.plain, {
      name:       CONFIG.EMAIL_SENDER_NAME,
      cc:         CONFIG.EMAIL_CC.join(','),
      htmlBody:   body.html,
      attachments: [pdfBlob],
    });

    return {
      success:    true,
      recipient,
      subject,
      testMode:   CONFIG.TEST_MODE,
    };

  } catch (e) {
    return { success: false, error: `GmailApp.sendEmail failed: ${e.message}` };
  }
}

function buildEmailBody(aff, month, amount) {
  const name      = aff['POC Name']    || 'Team';
  const affName   = aff['_name']       || aff['AFFILIATE NAME'] || '';
  const terms     = aff['Payment Terms'] || '100% at Invoice Date + 60 Days';
  const formatted = '₹' + Number(amount).toLocaleString('en-IN');

  const plain = [
    `Dear ${name},`,
    '',
    `Please find attached the Release Order for the Kohler CPS Campaign – ${month}.`,
    '',
    `Affiliate       : ${affName}`,
    `Campaign Month  : ${month}`,
    `Campaign Amount : ${formatted} (Exclusive of Tax)`,
    `Payment Terms   : ${terms}`,
    '',
    'Kindly sign and share the counter-signed copy at your earliest convenience.',
    'Reach out if you have any queries.',
    '',
    'Regards,',
    'Social Beat – Kohler Team',
  ].join('\n');

  const html = `
<p>Dear ${name},</p>
<p>Please find attached the Release Order for the <strong>Kohler CPS Campaign – ${month}</strong>.</p>
<table border="1" cellpadding="8" cellspacing="0"
       style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:13px;">
  <tr style="background:#1A1A2E;color:#fff;">
    <td><strong>Field</strong></td><td><strong>Details</strong></td>
  </tr>
  <tr><td>Affiliate</td><td>${affName}</td></tr>
  <tr style="background:#f4f4f4;"><td>Campaign Month</td><td>${month}</td></tr>
  <tr><td>Campaign Amount</td><td>${formatted} <em>(Exclusive of Tax)</em></td></tr>
  <tr style="background:#f4f4f4;"><td>Payment Terms</td><td>${terms}</td></tr>
</table>
<p>Kindly sign and share the counter-signed copy at your earliest convenience.<br>
Reach out if you have any queries.</p>
<p>Regards,<br><strong>Social Beat – Kohler Team</strong></p>`;

  return { plain, html };
}


// ============================================================
// SECTION 9 — LOGGING
// ============================================================

function initSheet_(name, headers) {
  const ss  = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);

  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#1A1A2E')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function getLogSheet_() {
  return initSheet_(CONFIG.LOG_SHEET_NAME, [
    'Timestamp', 'Affiliate Name', 'Processing Month',
    'Rev Share', 'Amount (₹)', 'Form Submission',
    'Validation', 'RO Generated', 'RO File Name',
    'Email Sent', 'Recipient', 'Subject Line',
    'Errors', 'Final Status',
  ]);
}

function getExceptionSheet_() {
  return initSheet_(CONFIG.EXCEPTION_SHEET_NAME, [
    'Timestamp', 'Affiliate Name', 'Missing / Invalid Fields', 'Action Required',
  ]);
}

function writeLog_(sheet, d) {
  sheet.appendRow([
    new Date().toISOString(),
    d.affiliateName || '',
    d.month         || '',
    d.revShare      || '',
    d.amount        || '',
    d.formStatus    || '',
    d.validStatus   || '',
    d.roGenerated   || '',
    d.roFileName    || '',
    d.emailSent     || '',
    d.recipient     || '',
    d.subjectLine   || '',
    d.errors        || '',
    d.finalStatus   || '',
  ]);
}

function writeException_(sheet, affiliateName, errors) {
  sheet.appendRow([
    new Date().toISOString(),
    affiliateName,
    errors.join(' | '),
    'Update Master Config Sheet then re-run',
  ]);
}


// ============================================================
// SECTION 10 — PREVIEW DIALOG
// ============================================================

function showPreviewDialog_(items) {
  let rows = '';

  for (const it of items) {
    const bg     = it.status === 'READY' ? '#e8f5e9' : '#fce4ec';
    const status = it.status === 'READY'
      ? `<span style="color:#2e7d32">✓ READY</span>`
      : `<span style="color:#c62828">✗ ${it.status}</span>`;

    const errs = it.errors ? `<br><small style="color:#999">${it.errors.join('<br>')}</small>` : '';

    rows += `<tr style="background:${bg}">
      <td>${it.affiliateName}</td>
      <td>${it.month || '—'}</td>
      <td>${it.amount ? '₹' + Number(it.amount).toLocaleString('en-IN') : '—'}</td>
      <td>${it.revShare}</td>
      <td>${it.vendorName}</td>
      <td>${it.pocName}</td>
      <td>${it.pocEmail}</td>
      <td>${status}${errs}</td>
    </tr>`;
  }

  const testBadge = CONFIG.TEST_MODE
    ? `<div style="background:#ff9800;color:#fff;padding:6px 12px;border-radius:4px;display:inline-block;margin-bottom:12px;">
         🧪 TEST MODE — emails go to ${CONFIG.TEST_EMAIL}
       </div>`
    : `<div style="background:#c62828;color:#fff;padding:6px 12px;border-radius:4px;display:inline-block;margin-bottom:12px;">
         🚀 PRODUCTION — emails go to actual POC addresses
       </div>`;

  const html = HtmlService.createHtmlOutput(`
    <style>
      body  { font-family:Arial,sans-serif; font-size:12px; padding:12px; }
      table { border-collapse:collapse; width:100%; }
      th    { background:#1A1A2E; color:#fff; padding:8px; text-align:left; }
      td    { border:1px solid #ddd; padding:6px 8px; vertical-align:top; }
    </style>
    ${testBadge}
    <table>
      <tr>
        <th>Affiliate</th><th>Month</th><th>Amount</th>
        <th>Rev Share</th><th>Vendor</th>
        <th>POC</th><th>Email</th><th>Status</th>
      </tr>
      ${rows}
    </table>
    <p style="margin-top:12px;color:#555;">
      Close this window, then approve or cancel the confirmation prompt.
    </p>
  `).setWidth(1000).setHeight(380).setTitle('RO Preview');

  SpreadsheetApp.getUi().showModalDialog(html, 'Kohler Affiliate RO — Preview');
}


// ============================================================
// SECTION 11 — MAIN ORCHESTRATOR
// ============================================================

function runAffiliateRoAutomation() {
  const ui       = SpreadsheetApp.getUi();
  const logSheet = getLogSheet_();
  const exSheet  = getExceptionSheet_();

  // ── Step 1: Read Master Config ──────────────────────────
  let affiliates;
  try {
    affiliates = readMasterConfig();
  } catch (e) {
    ui.alert('Config Error', e.message, ui.ButtonSet.OK);
    return;
  }
  Logger.log(`Loaded ${affiliates.length} affiliates from Master Config`);

  // ── Steps 2–3: Validate + Fetch Tracker Amounts ─────────
  const previewItems  = [];
  const readyToProcess = [];
  const exceptions     = [];

  for (const aff of affiliates) {
    const errors = validateAffiliate(aff);

    const item = {
      affiliateName: aff['_name'],
      revShare:      aff['REV Share'] || '30%',
      vendorName:    aff['Vendor Name (as appearing in the GST Certificate)'] || '—',
      pocName:       aff['POC Name']  || '—',
      pocEmail:      aff['Email ID']  || '—',
    };

    if (errors.length > 0) {
      item.status = 'EXCEPTION';
      item.errors = errors;
      exceptions.push({ aff, errors });
      writeException_(exSheet, aff['_name'], errors);
      previewItems.push(item);
      continue;
    }

    const trackerResult = fetchMonthlyPayable(aff['Sheet ID'], CONFIG.PROCESSING_MONTH);

    if (trackerResult.error) {
      item.status = 'FETCH_ERROR';
      item.errors = [trackerResult.error];
      exceptions.push({ aff, errors: [trackerResult.error] });
      writeException_(exSheet, aff['_name'], [trackerResult.error]);
    } else {
      item.status = 'READY';
      item.month  = trackerResult.month;
      item.amount = trackerResult.amount;
      readyToProcess.push({ ...aff, _month: trackerResult.month, _amount: trackerResult.amount });
    }

    previewItems.push(item);
  }

  // ── Step 4: Preview + Approval ──────────────────────────
  showPreviewDialog_(previewItems);

  const confirm = ui.alert(
    'Proceed?',
    `Ready: ${readyToProcess.length}  |  Exceptions: ${exceptions.length}\n\n` +
    (CONFIG.TEST_MODE
      ? `TEST MODE — emails go to ${CONFIG.TEST_EMAIL}`
      : 'PRODUCTION — emails go to actual POC addresses') +
    '\n\nProceed with form submissions?',
    ui.ButtonSet.YES_NO
  );

  if (confirm !== ui.Button.YES) {
    ui.alert('Cancelled', 'No forms were submitted.', ui.ButtonSet.OK);
    return;
  }

  // ── Steps 5–9: Process each valid affiliate ─────────────
  const results = [];

  for (const aff of readyToProcess) {
    const month = aff['_month'];
    const amount = aff['_amount'];
    const year   = '20' + month.split(' ')[1];

    const logData = {
      affiliateName: aff['_name'],
      month,
      revShare:   aff['REV Share'],
      amount,
      subjectLine: aff['Subject line'],
      recipient:  CONFIG.TEST_MODE ? CONFIG.TEST_EMAIL : aff['Email ID'],
      validStatus: 'PASS',
    };

    // Step 5 — Submit form
    const formResult = submitRoForm(aff, month, amount);
    logData.formStatus = formResult.success
      ? 'SUBMITTED'
      : `FAILED: ${formResult.error}`;

    if (!formResult.success) {
      logData.finalStatus = 'FORM_SUBMISSION_FAILED';
      logData.errors      = formResult.error;
      writeLog_(logSheet, logData);
      results.push({ name: aff['_name'], status: 'FORM_FAILED', reason: formResult.error });
      continue;
    }

    // Step 6 — Validate form submission (logged; PDF is the ground truth)
    Logger.log(`[${aff['_name']}] Form submitted. Waiting for PDF…`);

    // Step 8 — Retrieve PDF from Gmail
    const pdfResult = waitForRoPdf(aff['_name'], month);
    let pdfBlob     = null;
    let savedFile   = null;

    if (pdfResult.found) {
      logData.roGenerated = 'YES';

      // Step 8b — Save to Drive
      savedFile = saveRoPdfToDrive(pdfResult.blob.copyBlob(), aff['_name'], month, year);
      logData.roFileName = savedFile.fileName;
      pdfBlob = pdfResult.blob;

      Logger.log(`[${aff['_name']}] PDF saved: ${savedFile.fileName}`);
    } else {
      logData.roGenerated = 'NOT_FOUND';
      logData.errors      = pdfResult.error;
      Logger.log(`[${aff['_name']}] ${pdfResult.error}`);
    }

    // Step 9 — Send email
    if (pdfBlob) {
      const emailResult = sendRoEmail(aff, month, amount, pdfBlob, savedFile.fileName);
      logData.emailSent   = emailResult.success ? 'YES' : `FAILED: ${emailResult.error}`;
      logData.finalStatus = emailResult.success ? 'COMPLETED' : 'EMAIL_FAILED';
    } else {
      logData.emailSent   = 'SKIPPED (no PDF)';
      logData.finalStatus = 'FORM_SUBMITTED_PDF_PENDING';
    }

    writeLog_(logSheet, logData);
    results.push({ name: aff['_name'], status: logData.finalStatus });
  }

  // ── Final Summary ───────────────────────────────────────
  const summaryLines = results.map(r => `  • ${r.name}: ${r.status}`);
  if (exceptions.length) {
    summaryLines.push('');
    summaryLines.push('Exceptions (see Exception Log):');
    exceptions.forEach(e => summaryLines.push(`  • ${e.aff['_name']}`));
  }

  ui.alert(
    'Done',
    `Processed: ${results.length}  |  Exceptions: ${exceptions.length}\n\n` +
    summaryLines.join('\n'),
    ui.ButtonSet.OK
  );
}


// ============================================================
// SECTION 12 — FORM FIELD DISCOVERY
// ============================================================

/**
 * Run this ONCE after setup.
 * It fetches the form HTML and extracts entry IDs automatically,
 * then writes them into a "Form Entry IDs" sheet for you to copy into CONFIG.
 */
function discoverFormFields() {
  const affiliates = readMasterConfig();
  if (!affiliates.length) {
    Logger.log('No affiliates in Master Config');
    return;
  }

  const formUrl  = affiliates[0]['RO Form Link'];
  const formInfo = parseFormUrl(formUrl);

  if (!formInfo) {
    Logger.log('Cannot parse form URL: ' + formUrl);
    return;
  }

  // Method A: FormApp (requires edit access)
  if (formInfo.type === 'edit') {
    try {
      const form  = FormApp.openById(formInfo.id);
      const items = form.getItems();
      _writeFormFields_(form.getTitle(), items.map(i => ({
        title: i.getTitle(),
        entryId: 'entry.' + i.getId(),
        type:    i.getType().toString(),
      })));
      return;
    } catch (e) {
      Logger.log('FormApp edit access failed, falling back to HTML method: ' + e.message);
    }
  }

  // Method B: Parse published form HTML (no edit access needed)
  try {
    const html     = UrlFetchApp.fetch(formUrl).getContentText();

    // Google embeds FB_PUBLIC_LOAD_DATA_ in the form HTML
    const match = html.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(\[[\s\S]+?\]);\s*<\/script>/);
    if (!match) {
      Logger.log('Could not extract FB_PUBLIC_LOAD_DATA_ from form HTML.');
      Logger.log('Tip: open the form in Chrome → right-click → View Page Source → search "entry."');
      return;
    }

    const formData  = JSON.parse(match[1]);
    const itemsData = formData[1][1]; // Array of form items
    const fields    = [];

    for (const item of itemsData) {
      const title = item[1];
      const inputs = item[4];
      if (!inputs) continue;
      for (const inp of inputs) {
        fields.push({ title, entryId: 'entry.' + inp[0], type: String(inp[3] || '') });
      }
    }

    _writeFormFields_('RO Form', fields);

  } catch (e) {
    Logger.log('HTML parse failed: ' + e.message);
  }
}

function _writeFormFields_(formTitle, fields) {
  const ss         = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName  = 'Form Entry IDs';
  let sheet        = ss.getSheetByName(sheetName);

  if (sheet) sheet.clearContents();
  else sheet = ss.insertSheet(sheetName);

  sheet.appendRow(['Form Title', formTitle]);
  sheet.appendRow([]);
  sheet.appendRow(['Field Title', 'Entry ID', 'Type']);

  for (const f of fields) {
    sheet.appendRow([f.title, f.entryId, f.type]);
  }

  sheet.autoResizeColumns(1, 3);
  SpreadsheetApp.getUi().alert(
    'Form Fields Discovered',
    `Found ${fields.length} fields.\n\nOpen the "${sheetName}" sheet, ` +
    'then copy the entry IDs into CONFIG.FORM_ENTRY_IDS in the script.',
    SpreadsheetApp.getUi().ButtonSet.OK
  );

  Logger.log('=== FORM FIELDS ===');
  for (const f of fields) {
    Logger.log(`"${f.title}" → ${f.entryId}`);
  }
}


// ============================================================
// SECTION 13 — QUICK TESTS
// ============================================================

function testReadConfig() {
  const affiliates = readMasterConfig();
  Logger.log(`Found ${affiliates.length} affiliates:`);
  affiliates.forEach(a => Logger.log(`  ${a['_name']} | Sheet: ${a['Sheet ID']} | Email: ${a['Email ID']}`));
  SpreadsheetApp.getUi().alert(
    'Config OK',
    `${affiliates.length} affiliates loaded. Check View → Logs for details.`,
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

function testFetchTrackers() {
  const affiliates = readMasterConfig();
  const results    = [];

  for (const aff of affiliates) {
    const r = fetchMonthlyPayable(aff['Sheet ID'], CONFIG.PROCESSING_MONTH);
    const line = r.error
      ? `[FAIL] ${aff['_name']}: ${r.error}`
      : `[OK]   ${aff['_name']}: ${r.month} → ₹${Number(r.amount).toLocaleString('en-IN')}`;
    Logger.log(line);
    results.push(line);
  }

  SpreadsheetApp.getUi().alert(
    'Tracker Test Results',
    results.join('\n') + '\n\nCheck View → Logs for details.',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

function testValidation() {
  const affiliates = readMasterConfig();
  const results    = [];

  for (const aff of affiliates) {
    const errors = validateAffiliate(aff);
    if (errors.length) {
      results.push(`[EXCEPTION] ${aff['_name']}:\n  ${errors.join('\n  ')}`);
    } else {
      results.push(`[PASS] ${aff['_name']}`);
    }
  }

  SpreadsheetApp.getUi().alert(
    'Validation Results',
    results.join('\n\n'),
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}


// ============================================================
// SECTION 14 — MENU
// ============================================================

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🔁 Kohler RO Automation')
    .addItem('▶  Run RO Automation', 'runAffiliateRoAutomation')
    .addSeparator()
    .addItem('🔍  Discover Form Fields',          'discoverFormFields')
    .addSeparator()
    .addItem('✅  Test: Read Master Config',       'testReadConfig')
    .addItem('✅  Test: Fetch Tracker Amounts',    'testFetchTrackers')
    .addItem('✅  Test: Validate Affiliates',      'testValidation')
    .addSeparator()
    .addItem('📋  View Processing Log',            'openLogSheet_')
    .addItem('⚠️   View Exception Log',            'openExceptionSheet_')
    .addToUi();
}

function openLogSheet_() {
  const s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.LOG_SHEET_NAME);
  if (s) SpreadsheetApp.getActiveSpreadsheet().setActiveSheet(s);
}

function openExceptionSheet_() {
  const s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.EXCEPTION_SHEET_NAME);
  if (s) SpreadsheetApp.getActiveSpreadsheet().setActiveSheet(s);
}
