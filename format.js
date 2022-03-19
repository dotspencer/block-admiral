const fs = require('fs');

const hosts = './hosts';

const file = fs.readFileSync(hosts);
const lines = file.toString().trim().split('\n');

const set = new Set(lines);
const list = Array.from(set);
list.sort();

fs.writeFileSync(hosts, list.join('\n'));
