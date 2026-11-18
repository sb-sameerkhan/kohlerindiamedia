import re

src = '/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy/index.html'
# Write to a temp first, then overwrite
tmp = '/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy/index.html.stripped'

with open(src, 'r', encoding='utf-8') as f:
    full = f.read()

original_len = len(full)
print(f"Original: {original_len:,} chars, {full.count(chr(10))} lines")

# ── 1. Remove channel selector option for lead-gen ──
full = full.replace('      <option value="lead-gen">Lead Generation</option>\n', '')

# ── 2. Remove all .lg-tab button lines in the tabs-bar ──
full = re.sub(r'  <button class="tbbtn lg-tab"[^\n]+\n', '', full)

# ── 3. Remove all <div class="tab hidden" id="tab-lg-*">...</div> blocks ──
# These span multiple lines. Use regex with DOTALL.
# Pattern: <!-- LEADGEN OVERVIEW TAB --> ... end of </div>\n\n<script>
lg_html_start = full.index('<!-- LEADGEN OVERVIEW TAB -->')
lg_html_end   = full.index('</div>\n\n<script>') + len('</div>\n')
full = full[:lg_html_start] + full[lg_html_end:]

# ── 4. Remove LeadGen CSS lines (.lg-tab, .lg-kpi-strip etc.) ──
# Section starts at /* ═══ LEAD GEN DASHBOARD ═══ */  ends at end of </style>
lg_css_start = full.index('/* ═══ LEAD GEN DASHBOARD ═══ */')
lg_css_end   = full.index('\n</style>\n</head>', lg_css_start)
full = full[:lg_css_start] + full[lg_css_end:]

# ── 5. Remove STATIC_QL constants and helpers ──
# These live right at the top of the <script> block
# Start: // ── Static QL data...  End: just before windsorFetch
script_open_marker = '<script>\n// ═══════════════════════════════════════════════════════════\n// DATA FETCHING'
script_open_idx = full.index(script_open_marker)

# Find the static block within the script
static_marker_start = '// ── Static QL data from disposition mapping'
static_marker_end   = '\nasync function windsorFetch('
sq_start = full.index(static_marker_start, script_open_idx)
sq_end   = full.index(static_marker_end, sq_start)
full = full[:sq_start] + full[sq_end:]

# ── 6. Remove LeadGen branch in load() ──
# Starts at: "    // ── LeadGen channel ──"  Ends at: "    // ── D2C channel (existing) ──"
lg_branch_start = '    // ── LeadGen channel ──\n'
lg_branch_end   = '    // ── D2C channel (existing) ──\n'
lb_s = full.index(lg_branch_start)
lb_e = full.index(lg_branch_end)
full = full[:lb_s] + full[lb_e:]

# ── 7. Remove S.leadgen/S.leadgenDetail from state object ──
full = full.replace("const S = { meta:[], google:[], bing:[], sheet:{}, leadgen:[], leadgenDetail:[], from:'', to:'' };",
                    "const S = { meta:[], google:[], bing:[], sheet:{}, from:'', to:'' };")

# ── 8. Remove all LeadGen JS functions block ──
# From: // ═══════════════════════════════════════════════════════════\n// LEADGEN DASHBOARD
# To: end of switchLgTab + blank line before switchRgTier
lg_js_section_start = '// ═══════════════════════════════════════════════════════════\n// LEADGEN DASHBOARD'
lg_js_section_end   = '\nfunction switchRgTier('
lj_s = full.index(lg_js_section_start)
lj_e = full.index(lg_js_section_end)
full = full[:lj_s] + full[lj_e:]

# ── 9. Remove handleChannelChange function ──
hcc_start = '\nfunction handleChannelChange()'
hcc_end   = '\nfunction switchLgOverview()'
# Both should now be gone — but handleChannelChange may still exist:
if hcc_start in full:
    hc_s = full.index(hcc_start)
    # find the end of this function — next function at same indent level
    # it ends just before '}\n\nfunction switchLgOverview' or similar
    # Actually after our strip, switchLgOverview is gone too
    # Find the closing brace of handleChannelChange
    # The function ends with: "}\n}\n\n" pattern after isLg block
    # Let's find next top-level function after it
    next_fn = full.find('\nfunction ', hc_s + 1)
    if next_fn > 0:
        full = full[:hc_s] + full[next_fn:]
        print("  Removed handleChannelChange")
    else:
        print("  WARNING: could not find end of handleChannelChange")

# Also clean up loaderMsg that says D2C
# (already says 'Fetching Kohler D2C data…' in the initial load, which is fine for D2C)

with open(tmp, 'w', encoding='utf-8') as f:
    f.write(full)

print(f"Stripped: {len(full):,} chars, {full.count(chr(10))} lines")
print(f"Reduction: {original_len - len(full):,} chars removed")

# Sanity checks
checks = [
    ('lead-gen option GONE', '<option value="lead-gen">' not in full),
    ('lg-tab buttons GONE', 'onclick="switchLgTab' not in full),
    ('tab-lg-overview GONE', 'id="tab-lg-overview"' not in full),
    ('STATIC_QL_BY_DATE GONE', 'STATIC_QL_BY_DATE' not in full),
    ('LeadGen branch in load GONE', '// ── LeadGen channel ──' not in full),
    ('parseLgAudience GONE', 'parseLgAudience' not in full),
    ('renderLeadGenAll GONE', 'renderLeadGenAll' not in full),
    ('handleChannelChange GONE', 'handleChannelChange' not in full),
    ('D2C render funcs PRESENT', 'renderSummary' in full),
    ('windsorFetch PRESENT', 'windsorFetch' in full),
    ('switchTab PRESENT', 'function switchTab' in full),
]
all_ok = True
for name, result in checks:
    status = 'OK' if result else 'FAIL'
    if not result: all_ok = False
    print(f"  [{status}] {name}")

if all_ok:
    import shutil
    shutil.move(tmp, src)
    print("\nFile updated successfully.")
else:
    print("\nSanity checks failed — file NOT overwritten. Check manually.")

