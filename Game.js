// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to play the Craps game
function playCraps() {
  // Generate two random dice numbers
  const die1 = getRandomNumber(1, 6);
  const die2 = getRandomNumber(1, 6);

  // Calculate the sum of the dice
  const sum = die1 + die2;

  // Display the dice numbers and sum
  document.getElementById('result').innerHTML = `Rolled: ${die1} + ${die2} = ${sum}<br>`;

  // Check game conditions
  if (sum === 7 || sum === 11) {
      document.getElementById('result').innerHTML += 'CRAPS – You lose!';
  } else if (die1 === die2 && die1 % 2 === 0) {
      document.getElementById('result').innerHTML += 'You won!';
  } else {
      document.getElementById('result').innerHTML += 'You pushed!';
  }
}

// Event listener for the play button
document.getElementById('playButton').addEventListener('click', playCraps);