@rem C:\Users\sash.SHITKATAPULT\scoop\apps\neofetch\current\neofetch.ps1
@echo off
setlocal enabledelayedexpansion
set args=%*
:: replace problem characters in arguments
set args=%args:"='%
set args=%args:(=`(%
set args=%args:)=`)%
set invalid="='
if !args! == !invalid! ( set args= )
where /q pwsh.exe
if %errorlevel% equ 0 (
    pwsh -noprofile -ex unrestricted -command "& 'neofetch.ps1'  %args%;exit $lastexitcode"
) else (
    powershell -noprofile -ex unrestricted -command "& 'neofetch.ps1'  %args%;exit $lastexitcode"
)
