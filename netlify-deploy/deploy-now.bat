@echo off
echo.
echo  Kohler D2C Tracker ^— Deploying to Netlify...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "Add-Type -Assembly System.IO.Compression.FileSystem; " ^
  "$dir = '%~dp0'; $dir = $dir.TrimEnd('\'); " ^
  "$token = (Get-Content \"$dir\netlify-token.txt\" -Raw).Trim(); " ^
  "$ms = New-Object System.IO.MemoryStream; " ^
  "$zip = New-Object System.IO.Compression.ZipArchive($ms, [System.IO.Compression.ZipArchiveMode]::Create, $true); " ^
  "foreach ($f in @('index.html','kohler-main.html','netlify.toml')) { " ^
    "$p = Join-Path $dir $f; if (Test-Path $p) { " ^
    "$e = $zip.CreateEntry($f); $s = $e.Open(); " ^
    "$b = [System.IO.File]::ReadAllBytes($p); $s.Write($b,0,$b.Length); $s.Dispose() } }; " ^
  "$fp = Join-Path $dir 'netlify\functions\sheet-proxy.js'; if (Test-Path $fp) { " ^
    "$e = $zip.CreateEntry('netlify/functions/sheet-proxy.js'); $s = $e.Open(); " ^
    "$b = [System.IO.File]::ReadAllBytes($fp); $s.Write($b,0,$b.Length); $s.Dispose() }; " ^
  "$fp2 = Join-Path $dir 'netlify\\functions\\gads-proxy.js'; if (Test-Path $fp2) { " ^
    "$e = $zip.CreateEntry('netlify/functions/gads-proxy.js'); $s = $e.Open(); " ^
    "$b = [System.IO.File]::ReadAllBytes($fp2); $s.Write($b,0,$b.Length); $s.Dispose() }; " ^
  "$fp3 = Join-Path $dir 'netlify\\functions\\meta-proxy.js'; if (Test-Path $fp3) { " ^
  "$e = $zip.CreateEntry('netlify/functions/meta-proxy.js'); $s = $e.Open(); " ^
  "$b = [System.IO.File]::ReadAllBytes($fp3); $s.Write($b,0,$b.Length); $s.Dispose() }; " ^
  "$zip.Dispose(); $bytes = $ms.ToArray(); $ms.Dispose(); " ^
  "Write-Host \"Zip ready: $($bytes.Length / 1024 -as [int]) KB\"; " ^
  "try { $r = Invoke-WebRequest -Uri 'https://api.netlify.com/api/v1/sites/c520fb13-0b70-4dd2-9663-38fa2f842eb4/deploys' -Method POST -Headers @{ Authorization='Bearer '+$token; 'Content-Type'='application/zip' } -Body $bytes -UseBasicParsing; " ^
  "$d = $r.Content | ConvertFrom-Json; Write-Host \"DEPLOYED! State: $($d.state) | $($d.deploy_ssl_url)\" } " ^
  "catch { Write-Host \"Error: $_\" }"

echo.
pause
