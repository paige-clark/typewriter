const typewriter = function(str, incrTime) {
  let timer = 0;
  let stringStatus = '';
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
      stringStatus += char;
      if (stringStatus === str) {
        process.stdout.write('\n');
      }
    }, timer);
    timer += incrTime;
  }
};

const string = 'Eggs are cool, eggs are nice. Eggs come from birds.';
typewriter(string, 50);