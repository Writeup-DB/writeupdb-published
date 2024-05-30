const fs = require('fs');
const path = require('path');

const categories = ['bug-bounty', 'cve', 'certification-journeys', 'cheatsheets'];

categories.forEach(category => {
  const dir = path.join(__dirname, '../../writeups', category);
  const files = fs.readdirSync(dir);
  
  let count = files.length;
  
  files.forEach(file => {
    if (file !== 'README.md') {
      const newFileName = `${category}-${count}.md`;
      fs.renameSync(path.join(dir, file), path.join(dir, newFileName));
      count++;
    }
  });
});
