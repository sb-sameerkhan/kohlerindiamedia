/**
 * Netlify Function: meta-proxy
 * Calls Meta Ads Graph API directly for Kohler India ad account.
 * Requires env var: META_ACCESS_TOKEN (System User token with ads_read permission)
 *
 * Usage:
 *   GET /.netlify/functions/meta-proxy?from=YYYY-MM-DD&to=YYYY-MM-DD&level=campaign&breakdown=
 *   GET /.netlify/functions/meta-proxy?from=...&to=...&level=adset
 *   GET /.netlify/functions/meta-proxy?from=...&to=...&breakdown=age
 *   GET /.netlify/functions/meta-proxy?from=...&to=...&breakdown=publisher_platform
 *   GET /.netlify/functions/meta-proxy?from=...&to=...&breakdown=platform_position
 *
 * Returns: JSON array of rows compatible with Windsor field names.
 */

const https = require('https');

const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || '';
const AD_ACCOUNT   = 'act_1542147597124356';

function getActionVal(arr, type) {
  if (!Array.isArray(arr)) return 0;
  const item = arr.find(a => a.action_type === type);
  return item ? (parseFloat(item.value) || 0) : 0;
}

function graphGet(path, qs) {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams({ ...qs, access_token: ACCESS_TOKEN });
    const options = {
      hostname: 'graph.facebook.com',
      path: `/v19.0${path}?${params.toString()}`,
      method: 'GET',
    };
    const req = https.request(options, res => {
      let raw = '';
      res.on('data', chunk => { raw += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(raw)); }
        catch (e) { reject(new Error('JSON parse error: ' + raw.slice(0, 200))); }
      });
    });
    req.setTimeout(55000, () => { req.destroy(); reject(new Error('Meta API timeout')); });
    req.on('error', reject);
    req.end();
  });
}

exports.handler = async function(event) {
  const p = event.queryStringParameters || {};
  const from      = p.from;
  const to        = p.to;
  const level     = p.level || 'campaign';   // campaign | adset
  const breakdown = p.breakdown || '';        // age | publisher_platform | platform_position | ''

  const CORS = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  };

  if (!from || !to) {
    return { statusCode: 400, headers: CORS, body: JSON.stringify({ error: 'from and to required' }) };
  }

  if (!ACCESS_TOKEN) {
    console.warn('meta-proxy: META_ACCESS_TOKEN not set — returning empty array');
    return { statusCode: 200, headers: CORS, body: '[]' };
  }

  try {
    // Build fields list for Graph API
    const fields = [
      'date_start',
      'campaign_name',
      'campaign_id',
      'spend',
      'impressions',
      'clicks',
      'ctr',
      'cpc',
      'cpm',
      'reach',
      'frequency',
      'actions',
      'action_values',
      ...(level === 'adset' ? ['adset_name', 'adset_id'] : []),
    ].join(',');

    const baseQs = {
      fields,
      level,
      time_increment: '1',
      time_range: JSON.stringify({ since: from, until: to }),
      limit: '500',
      ...(breakdown ? { breakdowns: breakdown } : {}),
    };

    // Paginate through all results
    let allData = [];
    let qs = { ...baseQs };

    while (true) {
      const resp = await graphGet(`/${AD_ACCOUNT}/insights`, qs);

      if (resp.error) {
        console.error('Meta API error:', JSON.stringify(resp.error));
        throw new Error(resp.error.message || JSON.stringify(resp.error));
      }

      const batch = resp.data || [];
      allData = allData.concat(batch);

      // Check pagination
      const after = resp.paging && resp.paging.cursors && resp.paging.cursors.after;
      const hasNext = resp.paging && resp.paging.next;
      if (!hasNext || !after || batch.length === 0) break;

      qs = { ...baseQs, after };
    }

    console.log(`meta-proxy: ${from}→${to} level=${level} breakdown=${breakdown||'none'} rows=${allData.length}`);

    // Transform to Windsor-compatible flat rows
    const rows = allData.map(r => {
      const addToCart = getActionVal(r.actions, 'omni_add_to_cart') || getActionVal(r.actions, 'add_to_cart');
      const checkout  = getActionVal(r.actions, 'omni_initiated_checkout') || getActionVal(r.actions, 'initiate_checkout');
      const purchase  = getActionVal(r.actions, 'omni_purchase');
      const revenue   = getActionVal(r.action_values, 'omni_purchase');

      return {
        date:          r.date_start,
        campaign_name: r.campaign_name || '',
        campaign:      r.campaign_name || '',  // Windsor also exposes 'campaign' as an alias
        campaign_id:   r.campaign_id   || '',
        spend:         parseFloat(r.spend)       || 0,
        impressions:   parseInt(r.impressions)   || 0,
        clicks:        parseInt(r.clicks)        || 0,
        ctr:           parseFloat(r.ctr)         || 0,
        cpc:           parseFloat(r.cpc)         || 0,
        cpm:           parseFloat(r.cpm)         || 0,
        reach:         parseInt(r.reach)         || 0,
        frequency:     parseFloat(r.frequency)   || 0,
        actions_omni_add_to_cart:       addToCart,
        actions_omni_initiated_checkout:checkout,
        actions_omni_purchase:          purchase,
        action_values_omni_purchase:    revenue,
        // Breakdown dimensions (only present when breakdown requested)
        ...(r.age              !== undefined ? { age:              r.age }              : {}),
        ...(r.publisher_platform !== undefined ? { publisher_platform: r.publisher_platform } : {}),
        ...(r.platform_position !== undefined ? { platform_position:  r.platform_position }  : {}),
        // Adset (only present when level=adset)
        ...(r.adset_name !== undefined ? { adset_name: r.adset_name || '' } : {}),
        ...(r.adset_id   !== undefined ? { adset_id:   r.adset_id   || '' } : {}),
      };
    });

    return { statusCode: 200, headers: CORS, body: JSON.stringify(rows) };

  } catch (err) {
    console.error('meta-proxy error:', err.message);
    return {
      statusCode: 502,
      headers: CORS,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
