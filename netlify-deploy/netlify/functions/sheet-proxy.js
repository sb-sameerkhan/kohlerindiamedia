/**
 * Netlify Function: sheet-proxy
 * Proxies Windsor.ai Google Sheets requests server-side to avoid browser CORS/timeout issues.
 *
 * Usage: GET /.netlify/functions/sheet-proxy?account_id=SHEET_ID&fields=f1,f2,...
 *
 * All params are forwarded to Windsor. The API key is embedded here (server-side only).
 */

const https = require('https');

const WINDSOR_API_KEY = 'REPLACE_WITH_WINDSOR_API_KEY';

exports.handler = async function(event) {
  const params = event.queryStringParameters || {};
  const accountId = params.account_id;
  const fields    = params.fields || 'month,_1,_2,_8,_9,_24,_25,_40,_41,affiliate';

  if (!accountId) {
    return { statusCode: 400, body: JSON.stringify({ error: 'account_id required' }) };
  }

  const url = `https://connectors.windsor.ai/googlesheets`
    + `?api_key=${WINDSOR_API_KEY}`
    + `&fields=${encodeURIComponent(fields)}`
    + `&account_id=${encodeURIComponent(accountId)}`;

  try {
    const data = await new Promise((resolve, reject) => {
      const req = https.get(url, { timeout: 30000 }, res => {
        let raw = '';
        res.on('data', c => raw += c);
        res.on('end', () => {
          try { resolve(JSON.parse(raw)); }
          catch (e) { reject(new Error('Bad JSON from Windsor: ' + raw.slice(0, 200))); }
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
        'Access-Control-Allow-Origin': '*',
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
