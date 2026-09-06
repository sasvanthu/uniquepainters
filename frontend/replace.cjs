const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicDir = __dirname;

function replaceInFiles(dir) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    if (dirPath.includes('node_modules') || dirPath.includes('.git') || f === 'convert.cjs' || f === 'replace.cjs') return;
    if (fs.statSync(dirPath).isDirectory()) {
      replaceInFiles(dirPath);
    } else {
      const ext = path.extname(f);
      if (['.tsx', '.ts', '.js', '.jsx', '.css', '.html'].includes(ext)) {
        let content = fs.readFileSync(dirPath, 'utf8');
        // Replace .png, .jpg, .jpeg with .webp in paths
        const newContent = content.replace(/\.png|\.jpg|\.jpeg/g, '.webp');
        if (content !== newContent) {
          fs.writeFileSync(dirPath, newContent, 'utf8');
          console.log(`Updated ${dirPath}`);
        }
      }
    }
  });
}

replaceInFiles(srcDir);
replaceInFiles(path.join(publicDir, 'index.html'));
