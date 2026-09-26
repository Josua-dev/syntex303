# Trim transparent padding from partner logo PNGs so the visible mark
# fills the image, keeping marquee logos visually uniform.
Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\joshu\Usersjoshusyntex303\public\partners"
$outDir = "C:\Users\joshu\Usersjoshusyntex303\public\partners\trimmed"
New-Item -ItemType Directory -Force $outDir | Out-Null

Get-ChildItem $dir -Filter *.png | ForEach-Object {
  $bmp = New-Object System.Drawing.Bitmap($_.FullName)
  $w = $bmp.Width; $h = $bmp.Height
  $minX = $w; $minY = $h; $maxX = -1; $maxY = -1
  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      $p = $bmp.GetPixel($x, $y)
      # non-transparent and not near-white background
      if ($p.A -gt 16 -and -not ($p.R -gt 245 -and $p.G -gt 245 -and $p.B -gt 245 -and $p.A -gt 245)) {
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }
  if ($maxX -ge $minX -and $maxY -ge $minY) {
    $pad = [int]([Math]::Min($maxX - $minX, $maxY - $minY) * 0.03) + 2
    $cx = [Math]::Max(0, $minX - $pad); $cy = [Math]::Max(0, $minY - $pad)
    $cw = [Math]::Min($w - $cx, ($maxX - $minX) + 2 * $pad)
    $ch = [Math]::Min($h - $cy, ($maxY - $minY) + 2 * $pad)
    $crop = New-Object System.Drawing.Bitmap($cw, $ch)
    $g = [System.Drawing.Graphics]::FromImage($crop)
    $g.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0, 0, $cw, $ch)), (New-Object System.Drawing.Rectangle($cx, $cy, $cw, $ch)), [System.Drawing.GraphicsUnit]::Pixel)
    $crop.Save((Join-Path $outDir $_.Name), [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $crop.Dispose()
    Write-Output ("{0}: {1}x{2} -> {3}x{4}" -f $_.Name, $w, $h, $cw, $ch)
  } else {
    Write-Output ("{0}: no content found, skipped" -f $_.Name)
  }
  $bmp.Dispose()
}
