@echo off
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo Administrator privileges are required. Elevating...
    powershell -Command "Start-Process '%~0' -Verb RunAs"
    exit /b
)

set "HOSTS_FILE=C:\Windows\System32\drivers\etc\hosts"

if not exist "%HOSTS_FILE%" (
    echo ERROR: The hosts file was not found.
    pause
    exit /b
)

findstr "192.168.137.1 putxerapp.eus" "%HOSTS_FILE%" >nul
if %errorLevel% equ 0 (
    echo The entry already exists in the hosts file.
) else (
    echo Adding entry to the hosts file...
    echo 192.168.137.1 putxerapp.eus >> "%HOSTS_FILE%"
    echo Entry added successfully.
)

