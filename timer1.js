const times = process.argv.slice(2);

for(let time of times) {
  time = Number(time);
  if (isNaN(time) || time < 0) continue;
  setTimeout(() => process.stdout.write('\x07'), time * 1000);
}