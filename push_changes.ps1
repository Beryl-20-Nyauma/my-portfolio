# PowerShell script to push portfolio changes to GitHub
Write-Host "Checking git status..." -ForegroundColor Green
git status

Write-Host "`nAdding all changes..." -ForegroundColor Green
git add .

Write-Host "`nCommitting changes..." -ForegroundColor Green
git commit -m "Update portfolio with React black/gold theme - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

Write-Host "`nPushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "`nDone! Your changes should now be on GitHub." -ForegroundColor Green
Write-Host "Go to Vercel and trigger a new deployment." -ForegroundColor Yellow
