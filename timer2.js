
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

console.log('Type a number 1-9 to set a timer of that length in seconds');
console.log('Type b to brrring the bell');
// on any input from stdin (standard input), output a "." to stdout
// CTRL C DOESNT WORK WITHOUT THE IF STATEMENT
stdin.on('data', (key) => {
  // If key is that of keycode ctrl+c, exit process
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  if (key === 'b') beep();

  let time = Number(key);
  if (isNaN(time) || time < 0) return;
  console.log(`Setting timer for ${time} seconds...`)
  setTimeout(() => beep(), time * 1000);
});

const beep = () => process.stdout.write('\x07');