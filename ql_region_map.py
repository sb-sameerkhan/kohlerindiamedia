import openpyxl, re, json

def normalize(s):
    return re.sub(r'[\s\-_]+', '', s.lower())

wb_cw = openpyxl.load_workbook('/sessions/magical-fervent-darwin/mnt/uploads/Digital Campaign Report- 18-June26-05c3a545.xlsx', data_only=True)
ws_cw = wb_cw['Campaign Wise']
form_ql = {}
for row in ws_cw.iter_rows(min_row=5, values_only=True):
    fn, ql = row[1], row[5]
    if fn and isinstance(fn, str) and 'dealership' not in fn.lower():
        if ql and isinstance(ql, (int, float)):
            form_ql[fn.strip()] = int(ql)
print(f"CW total QL: {sum(form_ql.values())}")

wb_map = openpyxl.load_workbook('/sessions/magical-fervent-darwin/mnt/Kohler/Kohler_LeadGen_QL_Mapping_June2026.xlsx', data_only=True)
ws_map = wb_map['QL Mapping']
adset_data = {}
for row in ws_map.iter_rows(min_row=2, values_only=True):
    if row[0]:
        adset_data[row[0].strip()] = {'region': row[2], 'audience': row[3], 'spend': row[6] or 0, 'leads': row[7] or 0}
norm_to_adset = {normalize(k): k for k in adset_data}

region_data = {}
aud_data = {}
matched_ql = 0
unmatched = {}

for fn, ql in form_ql.items():
    adset = norm_to_adset.get(normalize(fn))
    if adset:
        d = adset_data[adset]
        region = d['region'] or 'Unknown'
        aud = d['audience'] or 'Unknown'
        alloc = (ql / d['leads'] * d['spend']) if d['leads'] > 0 else 0
        if region not in region_data: region_data[region] = {'ql': 0, 'spend': 0}
        region_data[region]['ql'] += ql
        region_data[region]['spend'] += alloc
        if aud not in aud_data: aud_data[aud] = {'ql': 0, 'spend': 0}
        aud_data[aud]['ql'] += ql
        aud_data[aud]['spend'] += alloc
        matched_ql += ql
    else:
        unmatched[fn] = ql

print(f"Matched: {matched_ql}, Unmatched forms: {len(unmatched)}, Unmatched QL: {sum(unmatched.values())}")
print("\nREGION (by CPQL asc):")
for r, v in sorted(region_data.items(), key=lambda x: x[1]['spend']/x[1]['ql'] if x[1]['ql']>0 else 9999):
    cpql = v['spend']/v['ql'] if v['ql']>0 else 0
    print(f"  {r:20s}  QL={v['ql']:4d}  Spend={v['spend']:8,.0f}  CPQL={cpql:6,.0f}")
print("\nAUDIENCE:")
for a, v in sorted(aud_data.items(), key=lambda x: -x[1]['ql']):
    cpql = v['spend']/v['ql'] if v['ql']>0 else 0
    print(f"  {a:20s}  QL={v['ql']:4d}  CPQL={cpql:6,.0f}")
if unmatched:
    print("\nUNMATCHED:")
    for fn, ql in sorted(unmatched.items(), key=lambda x: -x[1]):
        print(f"  {ql:3d}  {fn}")
with open('/sessions/magical-fervent-darwin/mnt/Kohler/ql_region_result.json', 'w') as f:
    json.dump({'region_data': region_data, 'aud_data': aud_data, 'matched_ql': matched_ql, 'unmatched': unmatched}, f, indent=2)
