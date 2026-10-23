@echo off
setlocal
cd /d "%~dp0"
echo ========================================================
echo  Starting Anda Yudho Baskoro Portfolio Website
echo  Port: 5176
echo  URL: http://localhost:5176
echo ========================================================
npm.cmd run dev -- --host 0.0.0.0 --port 5176
pause
