# Kohler India - Media: dashboards and reporting code

Source for the Kohler India media dashboards (Social Beat).

## Live dashboards
| Dashboard | URL | Source in this repo |
|---|---|---|
| D2C Tracker | https://kohler-d2c-tracker.sbprism.com/ | `kohler-d2c-tracker/site/index.html` (latest working copy); `live-snapshots/d2c.html` is the deployed page |
| LeadGen Tracker | https://kohler-leadgen-tracker.sbprism.com/ | `live-snapshots/leadgen.html` (the deployed page; the older `netlify-deploy-leadgen/index.html` is a June version) |
| Branding Tracker | https://kohler-branding-tracker.sbprism.com/ | `live-snapshots/branding.html` (deployed); `Kohler_Branding_Tracker.html` is an older Aug copy |

`live-snapshots/` was downloaded from the live sites on 18 Nov 2026. Treat it as the baseline to edit from.

## Folders
- `kohler-d2c-tracker/`, `netlify-deploy/`, `kohler-deploy-v2/`, `kohler-tracker-deploy/`: D2C tracker site, Netlify functions (`windsor-proxy.js`, `gads-proxy.js`, `meta-proxy.js`, `sheet-proxy.js`) and deploy scripts.
- `netlify-deploy-leadgen/`: older LeadGen build.
- `kohler-affiliates-ro-gen/`, `KohlerAffiliateRO.gs`: affiliate RO generator.
- Root `*.py`: QL mapping, region panel and sbprism deploy scripts.
- `brain/`, `daily-reports/`, `Paid Media Audits/`, `Account Health Audits/`: notes and audits.

## Before you deploy
The Windsor API key was hardcoded in several files. It is replaced here with `REPLACE_WITH_WINDSOR_API_KEY`. Put the real key back locally (or better, call Windsor only through the Netlify proxy function and keep the key in a Netlify environment variable).

## Not in this repo
Netlify tokens, deploy zips, and Excel files with lead contact details (names, emails, phones). They stay local.
