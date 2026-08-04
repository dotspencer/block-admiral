const file = Bun.file('./lists/list.txt');
const text = await file.text();
const lines = text.trim().split('\n');

interface DnsRecord {
  address: string; // "35.201.127.164"
  family: number;
  ttl: number;
}

// const domainsByAddress: Record<string, string[] | null> = {};
const liveDomains: string[] = [];
const inactiveDomains: string[] = [];

for (const domain of lines) {
  console.log(domain);
  // await wait(100);
  const results: DnsRecord[] = await Bun.dns.lookup(domain).catch((e) => []);

  if (results.length === 0) {
    inactiveDomains.push(domain);
    console.log('  no dns records found');
    continue;
  }

  const record = results[0]!;
  // if (!domainsByAddress[first.address]) domainsByAddress[first.address] = [];
  // domainsByAddress[first.address]?.push(domain);

  if (record.address.startsWith('34.') || record.address.startsWith('35.')) {
    liveDomains.push(domain);
  }

  console.log('  address:', record.address);
}

console.log('liveDomains:', liveDomains);
console.log('inactiveDomains:', inactiveDomains);

// save active list to file
const activeOutput = liveDomains.join('\n');
await Bun.write('./lists/list-active.txt', activeOutput);

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
