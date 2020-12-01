const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let x = 0;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, x);
  x += 200;
}
