const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir(publicDir, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    const webpPath = filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath)
      .then(() => {
        console.log(`Converted ${filePath} to webp`);
        fs.unlinkSync(filePath); // delete original
      })
      .catch(err => {
        console.error(`Failed to convert ${filePath}:`, err);
      });
  }
});
