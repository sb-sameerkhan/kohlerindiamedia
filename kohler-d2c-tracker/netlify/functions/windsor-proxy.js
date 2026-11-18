/**
 * Netlify Function: windsor-proxy
 * Proxies Windsor.ai requests server-side so the API key never reaches the browser.
 *
 * Usage: GET /.netlify/functions/windsor-proxy?connector=facebook&account_id=X&fields=f1,f2&date_from=YYYY-MM-DD&date_to=YYYY-MM-DD
 *
 * The key comes from the WINDSOR_API_KEY environment variable (Netlify → Site settings → Environment variables).
 * Only Kohler's own connectors and accounts are allowed, so the proxy can't be used to read other Windsor data.
 */

const https = require('https');

const WINDSOR_API_KEY = process.env.WINDSOR_API_KEY;

// Allowed account IDs per connector
const ALLOWED = {
  facebook:     id => id === '1542147597124356',
  google_ads:   id => id === '924-290-7329',
  bing:         id => id === '187198169',
  googlesheets: id => id.startsWith('1T3LsL6HoG3Mp1zCvFH_qCe3Nk1QlP28Z0ANTOOOsT1I-'),
};

const FIELDS_RE = /^[A-Za-z0-9_(),.\-]+$/;
const DATE_RE   = /^\d{4}-\d{2}-\d{2}$/;

function bad(msg) {
  return { statusCode: 400, body: JSON.stringify({ error: msg }) };
}

exports.handler = async function(event) {
  if (!WINDSOR_API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'WINDSOR_API_KEY not set on Netlify' }) };
  }

  const q = event.queryStringParameters || {};
  const multi = event.multiValueQueryStringParameters || {};
  const connector = q.connector;
  const accounts  = multi.account_id || (q.account_id ? [q.account_id] : []);
  const fields    = q.fields || '';

  if (!ALLOWED[connector])                         return bad('connector not allowed');
  if (!accounts.length)                            return bad('account_id required');
  if (!accounts.every(a => ALLOWED[connector](a))) return bad('account_id not allowed');
  if (!FIELDS_RE.test(fields))                     return bad('invalid fields');
  if (q.date_from && !DATE_RE.test(q.date_from))   return bad('invalid date_from');
  if (q.date_to   && !DATE_RE.test(q.date_to))     return bad('invalid date_to');

  // Built manually — URLSearchParams encodes commas which breaks Windsor
  let url = `https://connectors.windsor.ai/${connector}`
    + `?api_key=${WINDSOR_API_KEY}`
    + `&fields=${fields}`;
  if (q.date_from) url += `&date_from=${q.date_from}`;
  if (q.date_to)   url += `&date_to=${q.date_to}`;
  accounts.forEach(a => { url += `&account_id=${encodeURIComponent(a)}`; });

  try {
    const data = await new Promise((resolve, reject) => {
      const req = https.get(url, { timeout: 25000 }, res => {
        let raw = '';
        res.on('data', c => raw += c);
        res.on('end', () => {
          try { resolve(JSON.parse(raw)); }
          catch (e) { reject(new Error('Bad JSON from Windsor')); }
        });
      });
      req.on('error', reject);
      req.on('timeout', () => { req.destroy(); reject(new Error('Windsor timeout')); });
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
