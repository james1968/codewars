function intRac(n, guess) {
  var lastGuess = guess;
  var ans = [guess];
  do {
    lastGuess = guess;
    guess = Math.floor((guess + n / guess) / 2);
    ans.push(guess);
  } while(Math.abs(lastGuess - guess) >= 1);
  return (ans.length -1);
}