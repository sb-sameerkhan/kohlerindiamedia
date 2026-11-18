/**
 * Kohler D2C Tracker — Auto Deploy Watcher
 * Watches index.html and deploys to Netlify automatically on every save.
 * Uses Netlify REST API directly — no CLI or npm packages needed.
 *
 * SETUP (one time):
 *   1. Get your Netlify personal access token:
 *      https://app.netlify.com/user/applications#personal-access-tokens
 *   2. Create a file called netlify-token.txt in this folder and paste the token in it.
 *   3. Double-click start-watcher.bat to start watching.
 */

const https    = require('https');
const fs       = require('fs');
const path     = require('path');
const os       = require('os');
const { execSync } = require('child_process');

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const SITE_ID    = 'c520fb13-0b70-4dd2-9663-38fa2f842eb4';
const WATCH_FILE = path.join(__dirname, 'index.html');
const DEBOUNCE   = 2500; // ms to wait after a save before triggering deploy

// Token loaded from netlify-token.txt (safer than pasting in code)
const TOKEN_FILE  = path.join(__dirname, 'netlify-token.txt');
let NETLIFY_TOKEN = '';

if (fs.existsSync(TOKEN_FILE)) {
  NETLIFY_TOKEN = fs.readFileSync(TOKEN_FILE, 'utf8').trim();
}
// ──────────────────────────────────────────────────────────────────────────────

let timer     = null;
let deploying = false;

// Create a zip of the deploy folder (Windows-safe using PowerShell)
function createZip() {
  const zipPath = path.join(os.tmpdir(), `kohler-${Date.now()}.zip`);

  if (process.platform === 'win32') {
    const ps = [
      `$files = Get-ChildItem -Path '${__dirname}' -File | Where-Object { $_.Extension -ne '.zip' -and $_.Name -ne 'netlify-token.txt' -and $_.Name -ne 'watch-and-deploy.js' -and $_.Name -ne 'start-watcher.bat' }`,
      `Compress-Archive -Path ($files.FullName) -DestinationPath '${zipPath}' -Force`,
    ].join('; ');
    execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: 'pipe' });
  } else {
    execSync(
      `cd "${__dirname}" && zip "${zipPath}" index.html netlify.toml`,
      { stdio: 'pipe' }
    );
  }
  return zipPath;
}

// POST zip to Netlify REST API
function uploadZip(zipPath) {
  return new Promise((resolve, reject) => {
    const body = fs.readFileSync(zipPath);
    const req  = https.request({
      hostname : 'api.netlify.com',
      path     : `/api/v1/sites/${SITE_ID}/deploys`,
      method   : 'POST',
      headers  : {
        'Authorization' : `Bearer ${NETLIFY_TOKEN}`,
        'Content-Type'  : 'application/zip',
        'Content-Length': body.length,
      },
    }, (res) => {
      let raw = '';
      res.on('data', c => raw += c);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          try { resolve(JSON.parse(raw)); } catch { resolve({}); }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${raw.slice(0, 300)}`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// Run deploy
async function deploy() {
  if (deploying) return;
  deploying = true;
  const ts = new Date().toLocaleTimeString('en-IN');
  process.stdout.write(`\n[${ts}] Change detected — deploying...`);
  let zipPath;
  try {
    zipPath = createZip();
    const result = await uploadZip(zipPath);
    const url = result.deploy_ssl_url || result.url || 'https://kohler-d2c-tracker.netlify.app';
    console.log(` ✓\n  → ${url}`);
  } catch (err) {
    console.log(` ✗\n  Error: ${err.message}`);
  } finally {
    if (zipPath) { try { fs.unlinkSync(zipPath); } catch {} }
    deploying = false;
  }
}

// ── Startup checks ────────────────────────────────────────────────────────────
if (!NETLIFY_TOKEN) {
  console.error('\n  ✗  Netlify token not found.\n');
  console.error('  Steps:');
  console.error('  1. Open: https://app.netlify.com/user/applications#personal-access-tokens');
  console.error('  2. Click "New access token", name it "Kohler Tracker", copy it.');
  console.error('  3. Create a file named netlify-token.txt in this folder.');
  console.error('  4. Paste the token into that file and save.');
  console.error('  5. Run start-watcher.bat again.\n');
  process.exit(1);
}

console.log('\n┌─────────────────────────────────────────────┐');
console.log('│   Kohler D2C Tracker — Auto-Deploy Watcher  │');
console.log('└─────────────────────────────────────────────┘');
console.log(`  Watching : index.html`);
console.log(`  Site     : https://kohler-d2c-tracker.netlify.app`);
console.log(`  Ready    : Save index.html to trigger a deploy.\n`);
console.log('  Press Ctrl+C to stop.\n');

fs.watch(WATCH_FILE, (event) => {
  if (event !== 'change') return;
  clearTimeout(timer);
  timer = setTimeout(deploy, DEBOUNCE);
});
