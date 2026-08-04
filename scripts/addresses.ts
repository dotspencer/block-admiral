const file = Bun.file('./list.txt');
const text = await file.text();
const lines = text.trim().split('\n');

interface DnsRecord {
  address: string; // "35.201.127.164"
  family: number;
  ttl: number;
}

const addressCount: Record<string, number | null> = {};

for (const domain of lines) {
  console.log();
  console.log(domain);
  await wait(200);
  const results: DnsRecord[] = await Bun.dns.lookup(domain).catch((e) => []);

  if (results.length === 0) {
    console.log('  no dns records found');
    continue;
  }

  const first = results[0]!;
  addressCount[first.address] = (addressCount[first.address] || 0) + 1;
  console.log('  address:', first.address);
  console.log('addressCount:', addressCount);
}

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
