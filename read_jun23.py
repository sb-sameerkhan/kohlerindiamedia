import openpyxl, json
from collections import defaultdict

# read_only=True is much faster — no formula evaluation
wb = openpyxl.load_workbook(
    '/sessions/magical-fervent-darwin/mnt/uploads/Digital Campaign Report- 23-June26.xlsx',
    data_only=True, read_only=True
)
print('Sheets:', wb.sheetnames)

# ── Campaign Wise ──────────────────────────────────────────────────────────
ws = wb['Campaign Wise']
rows_data = []
for i, row in enumerate(ws.iter_rows(min_row=5, values_only=True)):
    fn = row[1]; ql = row[5]
    if fn and str(fn).strip() and str(fn).strip() != 'Grand Total':
        rows_data.append((str(fn).strip(), int(ql) if ql else 0))

EXCLUDE = ['dealership', 'email', 'website']
rows_data = [r for r in rows_data if not any(ex in r[0].lower() for ex in EXCLUDE)]
print(f'Campaign Wise rows (excl Dealership/Email/Website): {len(rows_data)}')
print(f'Total QL: {sum(r[1] for r in rows_data)}')

# ── Day Wise Campaign ─────────────────────────────────────────────────────
ws2 = wb['Day Wise Campaign']
print('\nDay Wise first 5 rows:')
for i, row in enumerate(ws2.iter_rows(min_row=1, values_only=True)):
    if i < 6: print(f'  row {i+1}:', row[:8])
    else: break

wb.close()
