import re

src = '/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy/index.html'
dst = '/sessions/magical-fervent-darwin/mnt/Kohler/netlify-deploy-leadgen/index.html'

with open(src, 'r', encoding='utf-8') as f:
    full = f.read()

# ── 1. Extract HEAD (everything up to and including </style>\n</head>) ──
head_end_marker = '</style>\n</head>'
head_end_idx = full.index(head_end_marker) + len(head_end_marker)
head_section = full[:head_end_idx]

# Modify title
head_section = head_section.replace('<title>Kohler D2C Tracker</title>', '<title>Kohler LeadGen Tracker</title>')

# Remove D2C-only CSS: #channelSelect,#rangeSelect flex lines
# (These are fine to keep — no harm in LG standalone)

# ── 2. CONFIG block ──
config_start = full.index('<script>\nconst CONFIG = {')
config_end = full.index('</script>\n\n<div class="loading') + len('</script>')
config_block = full[config_start:config_end]

# ── 3. STATIC QL + helpers (from script block) ──
# script block starts after the config </script> + loading div + hdr + tabs-bar + all tab divs
script_open = full.index('\n<script>\n// ═══════════════════════════════════════════════════════════\n// DATA FETCHING') + 1
script_raw = full[script_open:]

static_block = script_raw[script_raw.index('// ═══════════════════════════════════════════════════════════\n// DATA FETCHING'):
                           script_raw.index('\nasync function windsorFetch(')]

wf_block = script_raw[script_raw.index('\nasync function windsorFetch('):
                       script_raw.index('\n// Returns only the sheet account IDs')]

# Formatters block
fmt_start_marker = '// ═══════════════════════════════════════════════════════════\n// FORMATTERS'
fmt_block = script_raw[script_raw.index(fmt_start_marker):
                        script_raw.index('\nfunction calcMetrics(')]

# Date helpers + UI controls (applyRange, setRange, setRangeFromSelect)
dateui_start = script_raw.index('// ═══════════════════════════════════════════════════════════\n// DATE HELPERS')
dateui_end   = script_raw.index('\nfunction switchTab(')
dateui_block = script_raw[dateui_start:dateui_end]

# switchTab — not needed in LG standalone (tabs are lg-only)

# LeadGen JS functions
lg_js_start = script_raw.index('\nfunction parseLgAudience(')
lg_js_end   = script_raw.index('\nfunction handleChannelChange()')
lg_functions_block = script_raw[lg_js_start:lg_js_end]

# switchLgOverview + switchLgTab
sw_start = script_raw.index('\nfunction switchLgOverview()')
sw_end   = script_raw.index('\nfunction switchRgTier(')
sw_block = script_raw[sw_start:sw_end]

print("All blocks extracted OK")
for name, blk in [('static', static_block), ('wf', wf_block), ('fmt', fmt_block),
                  ('dateui', dateui_block), ('lg_functions', lg_functions_block), ('sw', sw_block)]:
    print(f"  {name}: {len(blk)} chars")

