const sentence = "hello there from lighthouse labs";
let delay = 0;
let counter = 0;
for (const char of sentence) {
  delay = delay + 50;
  counter ++;
  setTimeout(function() {
    process.stdout.write(char);
  }, 1000 + delay)
  if (counter === sentence.length) {
    process.stdout.write("\n");
  }
  
}



