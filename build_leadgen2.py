import re

src = '/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy/index.html'
dst = '/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy-leadgen/index.html'

with open(src, 'r', encoding='utf-8') as f:
    full = f.read()

# ── 1. HEAD with modified title ──
head_end_marker = '</style>\n</head>'
head_end_idx = full.index(head_end_marker) + len(head_end_marker)
head_section = full[:head_end_idx]
head_section = head_section.replace('<title>Kohler D2C Tracker</title>', '<title>Kohler LeadGen Tracker</title>')
# Remove .lg-tab{display:none;} since in LeadGen standalone all tabs ARE visible
head_section = head_section.replace('.lg-tab{display:none;}\n.lg-tab.lg-visible{display:inline-flex;}\n',
                                     '.lg-tab{display:inline-flex;}\n')

# ── 2. CONFIG block ──
config_start = full.index('<script>\nconst CONFIG = {')
config_end = full.index('</script>\n\n<div class="loading') + len('</script>')
config_block = full[config_start:config_end]

# ── 3. LeadGen HTML tabs (overview + 5 analysis tabs) ──
lg_html_start = full.index('<!-- LEADGEN OVERVIEW TAB -->')
lg_html_end   = full.index('</div>\n\n<script>') + len('</div>')
lg_html_block = full[lg_html_start:lg_html_end]

# ── 4. Script blocks ──
script_open = full.index('\n<script>\n// ═══════════════════════════════════════════════════════════\n// DATA FETCHING') + 1
script_raw = full[script_open:]

static_block = script_raw[script_raw.index('// ═══════════════════════════════════════════════════════════\n// DATA FETCHING'):
                           script_raw.index('\nasync function windsorFetch(')]

wf_block = script_raw[script_raw.index('\nasync function windsorFetch('):
                       script_raw.index('\n// Returns only the sheet account IDs')]

fmt_start_marker = '// ═══════════════════════════════════════════════════════════\n// FORMATTERS'
fmt_block = script_raw[script_raw.index(fmt_start_marker):
                        script_raw.index('\nfunction calcMetrics(')]

dateui_start = script_raw.index('// ═══════════════════════════════════════════════════════════\n// DATE HELPERS')
dateui_end   = script_raw.index('\nfunction switchTab(')
dateui_block = script_raw[dateui_start:dateui_end]

lg_js_start = script_raw.index('\nfunction parseLgAudience(')
lg_js_end   = script_raw.index('\nfunction handleChannelChange()')
lg_functions_block = script_raw[lg_js_start:lg_js_end]

sw_start = script_raw.index('\nfunction switchLgOverview()')
sw_end   = script_raw.index('\nfunction switchRgTier(')
sw_block = script_raw[sw_start:sw_end]

# ── 5. Standalone load() for LeadGen ──
lg_load = '''
// ═══════════════════════════════════════════════════════════
// STANDALONE LeadGen load() — Meta only, no D2C
// ═══════════════════════════════════════════════════════════
const S = { leadgen: [], leadgenDetail: [], from: '', to: '' };

function lgDedup(rows) {
  const seen = new Set();
  return rows.filter(r => {
    const k = (r.date||'') + '|' + (r.campaign_name||r.campaign||'');
    if (seen.has(k)) return false;
    seen.add(k); return true;
  });
}

async function load() {
  const from = document.getElementById('d1').value;
  const to   = document.getElementById('d2').value;
  if (!from || !to) { alert('Please select a date range.'); return; }
  S.from = from; S.to = to;

  if (CONFIG.WINDSOR_API_KEY === 'YOUR_WINDSOR_API_KEY_HERE') {
    alert('Windsor API key not configured. Open this file and set CONFIG.WINDSOR_API_KEY.'); return;
  }

  const btn    = document.getElementById('refreshBtn'); btn.disabled = true;
  const loader = document.getElementById('loader');     loader.classList.remove('hidden');
  document.getElementById('loaderMsg').textContent = 'Fetching LeadGen data from Meta…';

  try {
    const lgFilter = r => {
      const c = r.campaign_name || r.campaign || '';
      return /LeadGen/i.test(c) && /Kohler/i.test(c) && !/Dealer/i.test(c);
    };
    const [lgCamp, lgAdset] = await Promise.all([
      windsorFetch({
        connector: 'facebook', accounts: [CONFIG.META_ACCOUNT], date_from: from, date_to: to,
        fields: ['date','campaign_name','campaign','spend','impressions','actions_link_click','actions_lead']
      }),
      windsorFetch({
        connector: 'facebook', accounts: [CONFIG.META_ACCOUNT], date_from: from, date_to: to,
        fields: ['date','campaign_name','adset_name','ad_name','spend','impressions','actions_link_click','actions_lead']
      })
    ]);
    S.leadgen       = lgDedup(lgCamp.filter(lgFilter));
    S.leadgenDetail = lgAdset.filter(lgFilter);
    renderLeadGenAll(S.leadgen, S.leadgenDetail, from, to);
  } catch (e) {
    console.error('Load error:', e);
    document.getElementById('loaderMsg').textContent = 'Error: ' + e.message;
    alert('Error loading data: ' + e.message);
  } finally {
    btn.disabled = false;
    loader.classList.add('hidden');
  }
}

// ── INIT ──
(function() {
  applyRange('yesterday');
  const sel = document.getElementById('rangeSelect');
  if (sel) sel.value = 'yesterday';
  load();
})();
'''

# ── 6. Assemble the full LeadGen HTML ──
header_bar = '''
<div class="loading hidden" id="loader">
  <div class="spinner"></div>
  <p id="loaderMsg">Fetching LeadGen data…</p>
</div>

<div class="hdr">
  <div class="hdr-l">
    <svg width="90" height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
      <rect width="90" height="28" rx="2" fill="#000"/>
      <text x="45" y="20" text-anchor="middle" font-family="\'Arial Black\',\'Arial\',sans-serif" font-weight="900" font-size="15" letter-spacing="3" fill="#fff">KOHLER</text>
    </svg>
  </div>
  <div style="position:absolute;left:50%;transform:translateX(-50%);">
    <span style="font-size:21px;font-weight:700;color:#fff;white-space:nowrap;letter-spacing:.5px;">LEADGEN TRACKER</span>
  </div>
  <div class="hdr-r">
    <select id="rangeSelect" class="range-select" onchange="setRangeFromSelect(this.value)">
      <option value="today">Today</option>
      <option value="yesterday" selected>Yesterday</option>
      <option value="7d">Last 7 Days</option>
      <option value="14d">Last 14 Days</option>
      <option value="30d">Last 30 Days</option>
      <option value="this-month">This Month</option>
      <option value="last-month">Last Month</option>
      <option value="custom">Custom Range</option>
    </select>
    <div class="custom-dates" id="customDates" style="display:none;">
      <input type="date" id="d1"> <span style="color:#aaa;font-size:10px;">–</span> <input type="date" id="d2">
    </div>
    <button class="btn" id="refreshBtn" onclick="load()">↻ Refresh</button>
  </div>
</div>

<div class="tabs-bar">
  <button class="tbbtn lg-tab active" onclick="switchLgOverview()">Overview</button>
  <button class="tbbtn lg-tab" onclick="switchLgTab(\'tab-lg-day\')">Day-on-Day</button>
  <button class="tbbtn lg-tab" onclick="switchLgTab(\'tab-lg-region\')">Region</button>
  <button class="tbbtn lg-tab" onclick="switchLgTab(\'tab-lg-audience\')">Audience</button>
  <button class="tbbtn lg-tab" onclick="switchLgTab(\'tab-lg-creative\')">Creative</button>
  <button class="tbbtn lg-tab" onclick="switchLgTab(\'tab-lg-rxaud\')">Region × Audience</button>
</div>
'''

# Patch lg_html_block: make tab-lg-overview active (not hidden)
lg_html_patched = lg_html_block.replace(
    '<div class="tab hidden" id="tab-lg-overview">',
    '<div class="tab active" id="tab-lg-overview">'
)

out = f'''{head_section}
<body>

{config_block}
{header_bar}
{lg_html_patched}

<script>
{static_block}
{wf_block}

{fmt_block}

{dateui_block}

{lg_functions_block}
{sw_block}
{lg_load}
</script>
</body>
</html>
'''

with open(dst, 'w', encoding='utf-8') as f:
    f.write(out)

print(f"Written: {dst}")
print(f"File size: {len(out):,} bytes  /  {out.count(chr(10))} lines")

