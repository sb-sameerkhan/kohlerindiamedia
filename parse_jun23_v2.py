import openpyxl, json, datetime
from collections import defaultdict

wb = openpyxl.load_workbook(
    '/sessions/magical-fervent-darwin/mnt/uploads/Digital Campaign Report- 23-June26.xlsx',
    data_only=True, read_only=True
)

# ── Campaign Wise ──────────────────────────────────────────────────────────
ws_cw = wb['Campaign Wise']
rows_data = []
for row in ws_cw.iter_rows(min_row=5, values_only=True):
    fn = row[1]; ql = row[5]
    if fn and str(fn).strip() and str(fn).strip() != 'Grand Total':
        rows_data.append((str(fn).strip(), int(ql) if ql else 0))
EXCL = ['dealership','email','website']
rows_data = [r for r in rows_data if not any(ex in r[0].lower() for ex in EXCL)]

REGION_TOKENS = ['AP&TS','Gujarat','JOB','Karnataka','Kerala','MPCG','mumbai','Mumbai',
                 'NCR','NorthEast','PanIndia','Rajasthan','ROM1','ROM2','TN','UPEast',
                 'UPNorth1','UPNorth2','UPWest&UK','UPWest','WB','Chandigarh','TopCities']

def get_region(fn):
    for tok in sorted(REGION_TOKENS, key=len, reverse=True):
        if ('_'+tok+'_') in fn:
            if tok in ('Mumbai','mumbai'): return 'mumbai'
            if tok == 'TopCities': return 'PanIndia'
            if tok == 'UPWest': return 'UPWest&UK'
            return tok
    return 'Unknown'

def get_category(fn):
    return 'Toilet' if 'toilet' in fn.lower() else 'FullBathroom'

by_region = defaultdict(int)
by_region_cat = defaultdict(lambda: defaultdict(int))
for fn, ql in rows_data:
    r = get_region(fn)
    c = get_category(fn)
    by_region[r] += ql
    by_region_cat[r][c] += ql

# ── Day Wise ─────────────────────────────────────────────────────────────
ws_dw = wb['Day Wise Campaign']

# Find date columns from row 4 (0-based col indices)
date_cols = {}
for row in ws_dw.iter_rows(min_row=4, max_row=4, values_only=True):
    for ci, val in enumerate(row):
        if val and '-Jun' in str(val):
            day = int(str(val).split('-')[0])
            date_str = f'2026-06-{day:02d}'
            date_cols[ci+1] = date_str  # +1 = "Lead Generate" column

# Sum QL per date — exclude Dealership AND Grand Total
daily_ql = defaultdict(int)
SKIP = ['dealership','grand total']
for row in ws_dw.iter_rows(min_row=6, values_only=True):
    fn = str(row[1] or '').strip()
    if not fn or any(s in fn.lower() for s in SKIP): continue
    for ci, date_str in date_cols.items():
        val = row[ci] if ci < len(row) else None
        daily_ql[date_str] += int(val) if val else 0

# Convert to calling dates (+1 day)
ql_by_calling = {}
for enq_date, ql in sorted(daily_ql.items()):
    d = datetime.date.fromisoformat(enq_date)
    calling = (d + datetime.timedelta(days=1)).isoformat()
    ql_by_calling[calling] = ql

# Validation
cw_total = sum(r[1] for r in rows_data)
dw_total = sum(ql_by_calling.values())
print(f'Campaign Wise total: {cw_total}')
print(f'Day Wise total: {dw_total}')
print(f'Match: {cw_total == dw_total}')

print('\n=== STATIC_QL_BY_DATE (calling dates) ===')
for d, v in sorted(ql_by_calling.items()):
    print(f'  {d}: {v}')

print('\n=== REGION TOTALS ===')
for r, v in sorted(by_region.items(), key=lambda x:-x[1]):
    print(f'  {r}: {v}  cats={dict(by_region_cat[r])}')

print('\n--- JSON ---')
print('QL_BY_DATE:', json.dumps(ql_by_calling))
print('QL_BY_REGION:', json.dumps(dict(sorted(by_region.items(), key=lambda x:-x[1]))))
print('QL_BY_REGION_CAT:', json.dumps({r: dict(cats) for r,cats in sorted(by_region_cat.items(), key=lambda x:-by_region[x[0]])}))

wb.close()
