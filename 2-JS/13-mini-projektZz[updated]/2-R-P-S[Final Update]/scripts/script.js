// Getting score from local storage
let score = JSON.parse(localStorage.getItem('theScore')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Reusing Function call to update score on webpage when page loads
updateScore();

// JavaScript code will go here;
function playGame(playerMove) {
  const computerChoice = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerChoice === 'rock') {
      result = 'You lose!';
    } else if (computerChoice === 'paper') {
      result = 'You win!';
    } else if (computerChoice === 'scissors') {
      result = "It's a tie!";
    }
  } else if (playerMove === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You win!';
    } else if (computerChoice === 'paper') {
      result = "It's a tie!";
    } else if (computerChoice === 'scissors') {
      result = 'You lose!';
    }
  } else if (playerMove === 'rock') {
    if (computerChoice === 'rock') {
      result = "It's a tie!";
    } else if (computerChoice === 'paper') {
      result = 'You lose!';
    } else if (computerChoice === 'scissors') {
      result = 'You win!';
    }
  }

  // Update score based on result
  if (result === 'You win!') {
    score.wins += 1;
  } else if (result === 'You lose!') {
    score.losses += 1;
  } else if (result === "It's a tie!") {
    score.ties += 1;
  }

  // Saving the score to local storage
  localStorage.setItem('theScore', JSON.stringify(score));

  // Updating the score on the webpage
  updateScore();

  // Displaying result to the user
  document.querySelector('.result-text').innerText = result;

  document.querySelector('.moves-text').innerHTML = `
        You
          <img class="move-icon" src="img/${playerMove}-emoji.png">
          <img class="move-icon" src="img/${computerChoice}-emoji.png">
        Computer`;
}

// Function to update score on webpage
function updateScore() {
  document.querySelector(
    '.score-display'
  ).innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Function to pick computer move
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerChoice = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = 'scissors';
  }

  return computerChoice;
}

// Function for resetting score
function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  // Remove score from local storage when resetting
  localStorage.removeItem('theScore');

  // Update score on webpage
  updateScore();
}
