text = open('/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy/index.html').read()

# Static region data: [name, ql, spend, cpql]
# Spend from QL Mapping file (full adset spend by region)
# QL from June 18 Campaign Wise matching
# Pan India spend = 1,388,809 + 199,052 (PAN India 0-QL adsets)
REGIONS = [
  # Top 6 — lowest CPQL
  ("UP West",    18,  20900,   1161),
  ("UP North 2", 16,  20050,   1253),
  ("JOB",        31,  47796,   1542),
  ("UP North 1", 10,  15835,   1584),
  ("Rajasthan",  39,  76427,   1960),
  ("MPCG",       15,  31981,   2132),
  # Mid 6
  ("Chandigarh", 18,  44779,   2488),
  ("Pan India",  627, 1587861, 2532),
  ("WB",         23,  69713,   3031),
  ("UP East",    18,  71442,   3969),
  ("NCR",        24,  99644,   4152),
  ("ROM1",       8,   38671,   4834),
  # Low 6 — highest CPQL
  ("ROM2",       9,   45898,   5100),
  ("AP&TS",      8,   41308,   5164),
  ("NE",         28,  158884,  5674),
  ("Gujarat",    13,  81095,   6238),
  ("KTK",        7,   49896,   7128),
  ("Kerala",     13,  128189,  9861),
]

def region_row(name, ql, cpql, color):
    return f'<div style="display:flex;justify-content:space-between;align-items:center;padding:3px 0;border-bottom:1px solid #f5f5f5;"><span style="font-size:12px;color:#444;">{name} <span style="font-size:10px;color:#888;">({ql})</span></span><span style="font-size:12px;font-weight:700;color:{color};">&#8377;{cpql:,}</span></div>'

def tier_block(title, color, rows_html):
    return f'''<div style="background:#fafafa;border-radius:6px;padding:10px;">
  <div style="font-size:10px;font-weight:700;color:{color};text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">{title}</div>
  {rows_html}
</div>'''

top_rows = ''.join(region_row(n,q,c,'#16a34a') for n,q,s,c in REGIONS[:6])
mid_rows = ''.join(region_row(n,q,c,'#d97706') for n,q,s,c in REGIONS[6:12])
low_rows = ''.join(region_row(n,q,c,'#dc2626') for n,q,s,c in REGIONS[12:])

panel = f'''
  <!-- Region CPQL Panel — static June 2026 -->
  <div class="chart-card" style="margin-top:12px;">
    <div class="chart-hdr" style="margin-bottom:10px;">
      <h3 style="margin:0;">Region CPQL — June 2026</h3>
      <span style="font-size:10px;color:#999;">Static · Jun 18 report &nbsp;·&nbsp; QL in parentheses</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
      {tier_block('↓ Top 6 — Most Efficient', '#16a34a', top_rows)}
      {tier_block('Mid 6', '#d97706', mid_rows)}
      {tier_block('↑ Low 6 — Least Efficient', '#dc2626', low_rows)}
    </div>
  </div>
'''

# Inject before </div><!-- /tab-lg-overview -->
target = '</div><!-- /tab-lg-overview -->'
if target in text:
    text = text.replace(target, panel + target)
    print("✓ Region panel injected")
else:
    print("✗ Target not found")

open('/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy/index.html', 'w').write(text)
print(f"Written: {len(text)} chars")
print("Ends correctly:", text.strip().endswith('</html>'))
