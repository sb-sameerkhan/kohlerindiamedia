import openpyxl
wb = openpyxl.load_workbook(
    '/sessions/magical-fervent-darwin/mnt/uploads/Digital Campaign Report- 23-June26.xlsx',
    data_only=True, read_only=True
)
ws = wb['Day Wise Campaign']

# Print rows 1-8 (headers)
print("=== HEADER ROWS ===")
for i, row in enumerate(ws.iter_rows(min_row=1, max_row=8, values_only=True)):
    print(f"row {i+1}:", [v for v in row[:12] if v is not None or True][:12])

# Print last 10 rows (check for grand total)
print("\n=== CHECKING ROW STRUCTURE (sample) ===")
all_rows = list(ws.iter_rows(min_row=6, values_only=True))
print(f"Total data rows: {len(all_rows)}")
# Print last 5
for i, row in enumerate(all_rows[-5:]):
    print(f"row {len(all_rows)-4+i}:", str(row[1])[:60] if row[1] else None, "| col3:", row[2], "col4:", row[3])

# Check for "Grand Total" rows
print("\n=== GRAND TOTAL ROWS ===")
for i, row in enumerate(all_rows):
    fn = str(row[1]) if row[1] else ''
    if 'grand' in fn.lower() or 'total' in fn.lower():
        print(f"row {i+6}: {fn[:60]} | col3: {row[2]} col4: {row[3]}")

# Check if any rows sum to the daily totals
# Sum ONLY col index 3 (Lead Generate for 01-Jun) across all rows
col3_sum = sum(int(row[3]) for row in all_rows if row[3] and str(row[1] or '').strip() and 'grand' not in str(row[1] or '').lower())
print(f"\nCol3 (01-Jun QL) sum (excl Grand Total): {col3_sum}")

wb.close()
