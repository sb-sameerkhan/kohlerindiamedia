/**
 * Kohler D2C Tracker — Auto Deploy Watcher
 * Watches site/index.html and deploys to Netlify automatically on every save.
 * Uses the Netlify CLI (via npx) so the windsor-proxy function is deployed too —
 * a plain zip upload to the REST API drops functions and breaks the dashboard.
 *
 * SETUP (one time):
 *   1. Install Node.js (https://nodejs.org) — npx comes with it.
 *   2. Get your Netlify personal access token:
 *      https://app.netlify.com/user/applications#personal-access-tokens
 *   3. Create a file called netlify-token.txt in this folder and paste the token in it.
 *      (This folder is never published — only site/ goes live.)
 *   4. Double-click start-watcher.bat to start watching.
 */

const fs       = require('fs');
const path     = require('path');
const { execFile } = require('child_process');

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const SITE_ID       = 'c520fb13-0b70-4dd2-9663-38fa2f842eb4';
const SITE_DIR      = path.join(__dirname, 'site');
const FUNCTIONS_DIR = path.join(__dirname, 'netlify', 'functions');
const WATCH_FILE    = path.join(SITE_DIR, 'index.html');
const DEBOUNCE      = 2500; // ms to wait after a save before triggering deploy

// Token loaded from netlify-token.txt (safer than pasting in code)
const TOKEN_FILE  = path.join(__dirname, 'netlify-token.txt');
let NETLIFY_TOKEN = '';

if (fs.existsSync(TOKEN_FILE)) {
  NETLIFY_TOKEN = fs.readFileSync(TOKEN_FILE, 'utf8').trim();
}
// ──────────────────────────────────────────────────────────────────────────────

let timer     = null;
let deploying = false;

// Run netlify deploy — publishes site/ and bundles netlify/functions
function netlifyDeploy() {
  return new Promise((resolve, reject) => {
    const args = [
      '--yes', 'netlify-cli', 'deploy',
      `--dir=${SITE_DIR}`,
      `--functions=${FUNCTIONS_DIR}`,
      `--site=${SITE_ID}`,
      '--prod',
      `--message=Tracker update ${new Date().toISOString().slice(0, 16).replace('T', ' ')}`,
    ];
    execFile(process.platform === 'win32' ? 'npx.cmd' : 'npx', args, {
      cwd   : __dirname,
      env   : { ...process.env, NETLIFY_AUTH_TOKEN: NETLIFY_TOKEN },
      shell : process.platform === 'win32',
    }, (err, stdout, stderr) => {
      if (err) return reject(new Error((stderr || err.message).slice(0, 300)));
      resolve(stdout);
    });
  });
}

// Run deploy
async function deploy() {
  if (deploying) return;
  deploying = true;
  const ts = new Date().toLocaleTimeString('en-IN');
  process.stdout.write(`\n[${ts}] Change detected — deploying...`);
  try {
    await netlifyDeploy();
    console.log(` ✓\n  → https://kohler-d2c-tracker.netlify.app`);
  } catch (err) {
    console.log(` ✗\n  Error: ${err.message}`);
  } finally {
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
console.log(`  Watching : site/index.html`);
console.log(`  Site     : https://kohler-d2c-tracker.netlify.app`);
console.log(`  Ready    : Save site/index.html to trigger a deploy.\n`);
console.log('  Press Ctrl+C to stop.\n');

fs.watch(WATCH_FILE, (event) => {
  if (event !== 'change') return;
  clearTimeout(timer);
  timer = setTimeout(deploy, DEBOUNCE);
});
