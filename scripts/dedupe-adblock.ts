const fs = require('fs');

const combinedPath = './lists/easylist-active-combined.txt';

const adblockFile = fs.readFileSync(combinedPath);
const lines = adblockFile.toString().trim().split('\n');

const set = new Set(lines);
const list = Array.from(set);
list.sort();

// sorted adblock
fs.writeFileSync(combinedPath, list.join('\n'));
