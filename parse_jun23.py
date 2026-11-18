import openpyxl, json
from collections import defaultdict

wb = openpyxl.load_workbook(
    '/sessions/magical-fervent-darwin/mnt/uploads/Digital Campaign Report- 23-June26.xlsx',
    data_only=True, read_only=True
)

# ── 1. Campaign Wise → region + category QL ──────────────────────────────
ws_cw = wb['Campaign Wise']
rows_data = []
for row in ws_cw.iter_rows(min_row=5, values_only=True):
    fn = row[1]; ql = row[5]
    if fn and str(fn).strip() and str(fn).strip() != 'Grand Total':
        rows_data.append((str(fn).strip(), int(ql) if ql else 0))
rows_data = [r for r in rows_data if not any(ex in r[0].lower() for ex in ['dealership','email','website'])]

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

print('=== REGION QL (Jun 23) ===')
for r, v in sorted(by_region.items(), key=lambda x: -x[1]):
    print(f'  {r}: {v}  {dict(by_region_cat[r])}')
print(f'\nTotal mapped: {sum(by_region.values())} | Source total: {sum(r[1] for r in rows_data)}')

# ── 2. Day Wise → STATIC_QL_BY_DATE (calling dates) ──────────────────────
ws_dw = wb['Day Wise Campaign']
# Row 4 has date headers like '01-Jun', row 5 has col headers, data from row 6
# Cols alternate: col C=01-Jun Received, D=01-Jun QL, E=02-Jun Received, F=02-Jun QL ...
# QL = "Lead Generate" (every even col starting from col index 3, i.e. col D)

# Find date header row (row 4)
date_cols = {}  # col_index → date string
header_row = None
for i, row in enumerate(ws_dw.iter_rows(min_row=4, max_row=4, values_only=True)):
    header_row = row
    break

if header_row:
    for ci, val in enumerate(header_row):
        if val and '-Jun' in str(val):
            day = int(str(val).split('-')[0])
            date_str = f'2026-06-{day:02d}'
            # QL col is ci+1 (next col is Lead Generate)
            date_cols[ci+1] = date_str  # QL column index (0-based)

print('\nDate columns found:', len(date_cols))

# Sum QL per date across all form rows (skip Dealership)
daily_ql = defaultdict(int)
for row in ws_dw.iter_rows(min_row=6, values_only=True):
    fn = row[1]
    if not fn or 'dealership' in str(fn).lower(): continue
    for ci, date_str in date_cols.items():
        val = row[ci] if ci < len(row) else None
        daily_ql[date_str] += int(val) if val else 0

# Convert to calling dates (enquiry_date + 1 day)
import datetime
ql_by_calling = {}
for enq_date, ql in sorted(daily_ql.items()):
    d = datetime.date.fromisoformat(enq_date)
    calling = (d + datetime.timedelta(days=1)).isoformat()
    ql_by_calling[calling] = ql

print('\n=== STATIC_QL_BY_DATE (calling dates) ===')
for d, v in sorted(ql_by_calling.items()):
    print(f'  {d}: {v}')
print(f'Total: {sum(ql_by_calling.values())}')

wb.close()

# Output JSON for injection
print('\n--- JSON OUTPUT ---')
print('QL_BY_REGION:', json.dumps(dict(sorted(by_region.items(), key=lambda x:-x[1]))))
print('QL_BY_REGION_CAT:', json.dumps({r: dict(cats) for r, cats in sorted(by_region_cat.items(), key=lambda x:-by_region[x[0]])}))
print('QL_BY_DATE:', json.dumps(ql_by_calling))
