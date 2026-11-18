#!/bin/bash
# Kohler D2C Tracker — Netlify Deploy Script
# Run this whenever the tracker is updated.
# First time: run `netlify login` to authenticate.

SITE_ID="c520fb13-0b70-4dd2-9663-38fa2f842eb4"
DEPLOY_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "▶ Deploying Kohler D2C Tracker to Netlify..."
netlify deploy \
  --dir="$DEPLOY_DIR" \
  --site="$SITE_ID" \
  --prod \
  --message="Tracker update $(date '+%Y-%m-%d %H:%M')"

echo "✓ Done — https://kohler-d2c-tracker.netlify.app"
