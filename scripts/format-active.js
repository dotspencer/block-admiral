const fs = require('fs');

const listFile = fs.readFileSync('./lists/list-active.txt');
const lines = listFile.toString().trim().split('\n');

const set = new Set(lines);
const list = Array.from(set);
list.sort();

// create hosts
const hostsOutput = list.map((domain) => `0.0.0.0     ${domain}`).join('\n');
fs.writeFileSync('./lists/hosts-active', hostsOutput);

// create adblock
const adblockOutput = list.map((domain) => `||${domain}^`).join('\n');
fs.writeFileSync('./lists/adblock-active.txt', adblockOutput);
