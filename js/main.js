var letter = prompt('Enter a letter:');
var counter;
var counter2;

for (counter = 0; counter < 10; counter++) {
  for (counter2 = 0; counter2 <= counter; counter2++) {
    document.write(letter);
  }
  document.write(' <br> ');
}
