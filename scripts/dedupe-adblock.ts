const fs = require('fs');

const adblockFile = fs.readFileSync('./adblock.txt');
const lines = adblockFile.toString().trim().split('\n');

const set = new Set(lines);
const list = Array.from(set);
list.sort();

// sorted adblock
const adblockOutput = list.join('\n');
fs.writeFileSync('./adblock.txt', adblockOutput);
