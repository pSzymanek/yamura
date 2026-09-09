const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const exportDir = path.join(rootDir, 'export');
const webdPackageDir = path.join(exportDir, 'webd-package');
const zipFile = path.join(exportDir, 'yamura-webd.zip');

console.log('🚀 Rozpoczynam przygotowanie eksportu dla Webd.pl...');

// 1. Uruchomienie budowania produkcyjnego
console.log('📦 Budowanie produkcyjne (npm run build)...');
execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });

// 2. Czyszczenie starego folderu webd-package
if (fs.existsSync(webdPackageDir)) {
  console.log('🧹 Czyszczenie starego folderu webd-package...');
  fs.rmSync(webdPackageDir, { recursive: true, force: true });
}
fs.mkdirSync(webdPackageDir, { recursive: true });

// 3. Kopiowanie całej zawartości dist/ do export/webd-package/
console.log('📂 Kopiowanie plików z dist/ do export/webd-package/...');
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
copyRecursive(distDir, webdPackageDir);

// 4. Usunięcie starego archiwum ZIP jeśli istnieje
if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

// 5. Tworzenie świeżego archiwum ZIP z zawartością webd-package
console.log('🗜️  Tworzenie paczki ZIP (yamura-webd.zip)...');
execSync(`powershell.exe -NoProfile -Command "Compress-Archive -Path '${webdPackageDir}\\*' -DestinationPath '${zipFile}' -Force"`, { cwd: rootDir, stdio: 'inherit' });

// 6. Podsumowanie
const stats = fs.statSync(zipFile);
const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
console.log(`\n✅ Eksport zakończony sukcesem!`);
console.log(`📁 Rozpakowana paczka (do FTP): ${webdPackageDir}`);
console.log(`📦 Gotowy plik ZIP (do cPanel): ${zipFile} (${sizeMb} MB)`);
