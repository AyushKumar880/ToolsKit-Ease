# Get all untracked files from git
$files = git ls-files --others --exclude-standard

# Function to get days in a given month (2026 is not a leap year)
function Get-DaysInMonth {
    param([int]$month)
    $daysInMonth = @(31,28,31,30,31,30,31,31,30,31,30,31)
    return $daysInMonth[$month - 1]
}

# Start from May 31st instead of June
$currentDate = 31
$currentMonth = 5
$currentYear = 2026

foreach ($file in $files) {
  if (Test-Path $file) {
    $dateStr = "{0}{1:00}{2:00}T100000" -f $currentYear, $currentMonth, $currentDate
    Write-Host "Committing $file with date $dateStr"
    git add $file
    git commit -m "Add $file" --date="$dateStr"
    git push -u origin main
    $currentDate--
    if ($currentDate -lt 1) {
      $currentMonth--
      if ($currentMonth -lt 1) {
        $currentMonth = 12
        $currentYear--
      }
      $currentDate = Get-DaysInMonth -month $currentMonth
    }
    Start-Sleep -Seconds 1
  }
}
