src = '/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy/index.html.stripped'

with open(src, 'r', encoding='utf-8') as f:
    full = f.read()

# Remove the channelSelect dropdown entirely (it's D2C-only now and handleChannelChange is gone)
channel_select_block = '''    <select id="channelSelect" class="range-select" style="min-width:160px;" onchange="handleChannelChange()">
      <option value="d2c" selected>D2C</option>
      <option value="branding">Branding</option>
      <option value="demand-gen">Demand Gen</option>
    </select>
    '''
full = full.replace(channel_select_block, '    ')

# Remove the CSS line that references #channelSelect
full = full.replace('  #channelSelect,#rangeSelect{flex:1 1 calc(50% - 4px);min-width:0;}\n', 
                    '  #rangeSelect{flex:1 1 calc(50% - 4px);min-width:0;}\n')

# Now remove the remaining reference to handleChannelChange (onchange on the select was already removed above)
# Double-check nothing else references it
remaining = [line for line in full.split('\n') if 'handleChannelChange' in line or 'channelSelect' in line]
if remaining:
    print("Still has references:")
    for l in remaining:
        print(" ", l[:120])
else:
    print("All channelSelect/handleChannelChange references gone")

# Final sanity checks
checks = [
    ('lead-gen option GONE',       '<option value="lead-gen">'       not in full),
    ('channelSelect GONE',         'channelSelect'                   not in full),
    ('handleChannelChange GONE',   'handleChannelChange'             not in full),
    ('lg-tab buttons GONE',        'onclick="switchLgTab'            not in full),
    ('tab-lg-overview GONE',       'id="tab-lg-overview"'            not in full),
    ('STATIC_QL_BY_DATE GONE',     'STATIC_QL_BY_DATE'               not in full),
    ('parseLgAudience GONE',       'parseLgAudience'                 not in full),
    ('renderLeadGenAll GONE',      'renderLeadGenAll'                not in full),
    ('D2C render funcs PRESENT',   'renderSummary'                   in full),
    ('windsorFetch PRESENT',       'windsorFetch'                    in full),
    ('switchTab PRESENT',          'function switchTab'              in full),
]
all_ok = True
for name, result in checks:
    status = 'OK' if result else 'FAIL'
    if not result: all_ok = False
    print(f"  [{status}] {name}")

if all_ok:
    import shutil
    shutil.move(src, '/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy/index.html')
    print(f"\nD2C tracker updated. Size: {len(full):,} chars, {full.count(chr(10))} lines")
else:
    # Write anyway for inspection but flag it
    with open(src, 'w', encoding='utf-8') as f:
        f.write(full)
    print("\nFAILED — written to .stripped for inspection")

