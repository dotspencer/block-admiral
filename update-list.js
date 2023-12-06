const fs = require('fs');

const hosts = fs.readFileSync('./hosts');
const list = fs.readFileSync('./list.txt');

const hostsLines = hosts
  .toString()
  .trim()
  .split('\n')
  .filter(l => l)
  .map(line => {
    const parts = line.trim().split('     ');
    return parts[1];
  });

const listLines = list
  .toString()
  .trim()
  .split('\n');

const set = new Set([...hostsLines, ...listLines]);
const all = Array.from(set);
all.sort();

fs.writeFileSync('./list.txt', all.join('\n'));
