#!/bin/bash
# Kohler D2C Tracker — Netlify Deploy Script
# Run this whenever the tracker is updated.
# First time: run `netlify login` to authenticate, and set WINDSOR_API_KEY
# in Netlify → Site settings → Environment variables.

SITE_ID="c520fb13-0b70-4dd2-9663-38fa2f842eb4"
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "▶ Deploying Kohler D2C Tracker to Netlify..."
netlify deploy \
  --dir="$ROOT_DIR/site" \
  --functions="$ROOT_DIR/netlify/functions" \
  --site="$SITE_ID" \
  --prod \
  --message="Tracker update $(date '+%Y-%m-%d %H:%M')"

echo "✓ Done — https://kohler-d2c-tracker.netlify.app"
