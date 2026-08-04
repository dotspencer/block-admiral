const fs = require('fs');

const listFile = fs.readFileSync('./list.txt');
const lines = listFile.toString().trim().split('\n');

const set = new Set(lines);
const list = Array.from(set);
list.sort();

const hostsOutput = list.map((domain) => `0.0.0.0     ${domain}`).join('\n');
fs.writeFileSync('./hosts', hostsOutput);

const listOutput = list.join('\n');
fs.writeFileSync('./list.txt', listOutput);
