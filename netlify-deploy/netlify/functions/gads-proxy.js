// netlify/functions/gads-proxy.js
// Bridges browser → Google Ads REST API; credentials in Netlify env vars.
// Required env vars: GADS_DEVELOPER_TOKEN, GADS_REFRESH_TOKEN,
//                    GADS_CLIENT_ID, GADS_CLIENT_SECRET
// Customer ID: 9242907329 (Kohler India Ecomm)

const https = require('https');
const CUSTOMER_ID = '9242907329';

// ── GAQL query definitions ────────────────────────────────────────────────

const QUERIES = {

  daily: {
    gaql: (from, to) => `
      SELECT
        segments.date, campaign.name,
        metrics.cost_micros, metrics.impressions, metrics.clicks,
        metrics.ctr, metrics.average_cpc, metrics.average_cpm,
        metrics.conversions, metrics.conversions_value,
        metrics.conversions_from_interactions_rate,
        metrics.value_per_conversion, metrics.cost_per_conversion
      FROM campaign
      WHERE segments.date BETWEEN '${from}' AND '${to}'
        AND campaign.status != 'REMOVED'
      ORDER BY segments.date`,
    map: r => ({
      date:                r.segments?.date,
      campaign_name:       r.campaign?.name,
      campaign:            String(r.campaign?.id || ''),
      spend:               (r.metrics?.costMicros      || 0) / 1e6,
      impressions:          r.metrics?.impressions      || 0,
      clicks:               r.metrics?.clicks           || 0,
      ctr:                  r.metrics?.ctr              || 0,
      cpc:                 (r.metrics?.averageCpc       || 0) / 1e6,
      average_cpm:         (r.metrics?.averageCpm       || 0) / 1e6,
      conversions:          r.metrics?.conversions      || 0,
      conversions_value:    r.metrics?.conversionsValue || 0,
      conversion_rate:      r.metrics?.conversionsFromInteractionsRate || 0,
      value_per_conversion: r.metrics?.valuePerConversion              || 0,
      cost_per_conversion: (r.metrics?.costPerConversion || 0) / 1e6,
    }),
  },

  adgroups: {
    gaql: (from, to) => `
      SELECT
        segments.date, campaign.name, ad_group.name,
        metrics.cost_micros, metrics.impressions, metrics.clicks,
        metrics.conversions, metrics.conversions_value
      FROM ad_group
      WHERE segments.date BETWEEN '${from}' AND '${to}'
        AND ad_group.status != 'REMOVED'
      ORDER BY segments.date, campaign.name`,
    map: r => ({
      date:             r.segments?.date,
      campaign_name:    r.campaign?.name,
      ad_group_name:    r.adGroup?.name,
      spend:           (r.metrics?.costMicros      || 0) / 1e6,
      impressions:      r.metrics?.impressions      || 0,
      clicks:           r.metrics?.clicks           || 0,
      conversions:      r.metrics?.conversions      || 0,
      conversions_value:r.metrics?.conversionsValue || 0,
    }),
  },

  pmax: {
    gaql: (from, to) => `
      SELECT
        segments.date, campaign.name, asset_group.name,
        metrics.cost_micros, metrics.impressions, metrics.clicks,
        metrics.conversions, metrics.conversions_value
      FROM asset_group
      WHERE segments.date BETWEEN '${from}' AND '${to}'
      ORDER BY segments.date, campaign.name`,
    map: r => ({
      date:              r.segments?.date,
      campaign_name:     r.campaign?.name,
      asset_group_name:  r.assetGroup?.name,
      spend:            (r.metrics?.costMicros       || 0) / 1e6,
      impressions:       r.metrics?.impressions       || 0,
      clicks:            r.metrics?.clicks            || 0,
      conversions:       r.metrics?.conversions       || 0,
      conversions_value: r.metrics?.conversionsValue  || 0,
    }),
  },

  search_terms: {
    gaql: (from, to) => `
      SELECT
        segments.date, search_term_view.search_term, campaign.name,
        segments.keyword.match_type,
        metrics.cost_micros, metrics.impressions, metrics.clicks,
        metrics.conversions, metrics.conversions_value
      FROM search_term_view
      WHERE segments.date BETWEEN '${from}' AND '${to}'
      ORDER BY metrics.cost_micros DESC`,
    map: r => ({
      date:              r.segments?.date,
      search_term:       r.searchTermView?.searchTerm,
      campaign_name:     r.campaign?.name,
      match_type:        r.segments?.keyword?.matchType,
      spend:            (r.metrics?.costMicros       || 0) / 1e6,
      impressions:       r.metrics?.impressions       || 0,
      clicks:            r.metrics?.clicks            || 0,
      conversions:       r.metrics?.conversions       || 0,
      conversions_value: r.metrics?.conversionsValue  || 0,
    }),
  },

  network: {
    gaql: (from, to) => `
      SELECT
        segments.date, campaign.name, segments.ad_network_type,
        metrics.cost_micros, metrics.impressions, metrics.clicks,
        metrics.conversions, metrics.conversions_value
      FROM campaign
      WHERE segments.date BETWEEN '${from}' AND '${to}'
        AND campaign.status != 'REMOVED'
      ORDER BY segments.date, campaign.name`,
    map: r => ({
      date:              r.segments?.date,
      campaign_name:     r.campaign?.name,
      network_type:      r.segments?.adNetworkType,
      spend:            (r.metrics?.costMicros       || 0) / 1e6,
      impressions:       r.metrics?.impressions       || 0,
      clicks:            r.metrics?.clicks            || 0,
      conversions:       r.metrics?.conversions       || 0,
      conversions_value: r.metrics?.conversionsValue  || 0,
    }),
  },

  shopping: {
    gaql: (from, to) => `
      SELECT
        segments.date, segments.product_title, campaign.name,
        metrics.cost_micros, metrics.impressions, metrics.clicks,
        metrics.conversions, metrics.conversions_value
      FROM shopping_performance_view
      WHERE segments.date BETWEEN '${from}' AND '${to}'
      ORDER BY metrics.cost_micros DESC`,
    map: r => ({
      date:              r.segments?.date,
      product_title:     r.segments?.productTitle,
      campaign_name:     r.campaign?.name,
      spend:            (r.metrics?.costMicros       || 0) / 1e6,
      impressions:       r.metrics?.impressions       || 0,
      clicks:            r.metrics?.clicks            || 0,
      conversions:       r.metrics?.conversions       || 0,
      conversions_value: r.metrics?.conversionsValue  || 0,
    }),
  },

  auction: {
    gaql: (from, to) => `
      SELECT
        segments.date, auction_insight_view.domain,
        metrics.auction_insight_search_impression_share,
        metrics.auction_insight_search_overlap_rate,
        metrics.auction_insight_search_position_above_rate,
        metrics.auction_insight_search_top_impression_percentage,
        metrics.auction_insight_search_absolute_top_impression_percentage
      FROM auction_insight_view
      WHERE segments.date BETWEEN '${from}' AND '${to}'
      ORDER BY segments.date`,
    map: r => ({
      date:                      r.segments?.date,
      auction_insight_domain:    r.auctionInsightView?.domain,
      search_impression_share:   r.metrics?.auctionInsightSearchImpressionShare,
      search_overlap_rate:       r.metrics?.auctionInsightSearchOverlapRate,
      search_position_above_rate:r.metrics?.auctionInsightSearchPositionAboveRate,
      search_top_impression_share:          r.metrics?.auctionInsightSearchTopImpressionPercentage,
      search_abs_top_impression_share:      r.metrics?.auctionInsightSearchAbsoluteTopImpressionPercentage,
    }),
  },
};

// ── helpers ───────────────────────────────────────────────────────────────

function httpsPost(hostname, path, headers, body) {
  const buf = Buffer.from(body);
  return new Promise((resolve, reject) => {
    const req = https.request({ hostname, path, method: 'POST',
      headers: { ...headers, 'Content-Length': buf.length } }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString() }));
    });
    req.on('error', reject);
    req.write(buf);
    req.end();
  });
}

async function getAccessToken() {
  const body = `grant_type=refresh_token`
    + `&refresh_token=${encodeURIComponent(process.env.GADS_REFRESH_TOKEN)}`
    + `&client_id=${encodeURIComponent(process.env.GADS_CLIENT_ID)}`
    + `&client_secret=${encodeURIComponent(process.env.GADS_CLIENT_SECRET)}`;
  const res = await httpsPost('oauth2.googleapis.com', '/token',
    { 'Content-Type': 'application/x-www-form-urlencoded' }, body);
  const json = JSON.parse(res.body);
  if (!json.access_token) throw new Error(`OAuth failed: ${res.body.slice(0, 200)}`);
  return json.access_token;
}

async function runGaql(token, gaql) {
  const rows = [];
  let pageToken = null;
  do {
    const bodyObj = { query: gaql.trim().replace(/\s+/g, ' ') };
    if (pageToken) bodyObj.pageToken = pageToken;
    const res = await httpsPost(
      'googleads.googleapis.com',
      `/v18/customers/${CUSTOMER_ID}/googleAds:search`,
      {
        'Authorization': `Bearer ${token}`,
        'developer-token': process.env.GADS_DEVELOPER_TOKEN,
        'Content-Type': 'application/json',
      },
      JSON.stringify(bodyObj)
    );
    if (res.status !== 200) throw new Error(`GadsAPI ${res.status}: ${res.body.slice(0, 300)}`);
    const data = JSON.parse(res.body);
    rows.push(...(data.results || []));
    pageToken = data.nextPageToken || null;
  } while (pageToken);
  return rows;
}

// ── handler ───────────────────────────────────────────────────────────────

exports.handler = async (event) => {
  const CORS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: CORS };

  const p = event.queryStringParameters || {};
  const { type, date_from, date_to } = p;

  if (!QUERIES[type])
    return { statusCode: 400, headers: CORS,
      body: JSON.stringify({ error: `Unknown type '${type}'. Valid: ${Object.keys(QUERIES).join(', ')}` }) };
  if (!date_from || !date_to)
    return { statusCode: 400, headers: CORS,
      body: JSON.stringify({ error: 'date_from and date_to required (YYYY-MM-DD)' }) };
  if (!process.env.GADS_DEVELOPER_TOKEN || !process.env.GADS_REFRESH_TOKEN)
    return { statusCode: 503, headers: CORS,
      body: JSON.stringify({ error: 'Google Ads not configured. Set GADS_DEVELOPER_TOKEN, GADS_REFRESH_TOKEN, GADS_CLIENT_ID, GADS_CLIENT_SECRET in Netlify env vars.' }) };

  try {
    const token = await getAccessToken();
    const { gaql, map } = QUERIES[type];
    const rows = await runGaql(token, gaql(date_from, date_to));
    return { statusCode: 200, headers: CORS, body: JSON.stringify(rows.map(map)) };
  } catch (err) {
    console.error('[gads-proxy]', err.message);
    return { statusCode: 502, headers: CORS, body: JSON.stringify({ error: err.message }) };
  }
};
