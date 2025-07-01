let random = Math.round(Math.random() * 100);
// console.log(random);

const submit = document.querySelector(".submit");
const user_input = document.querySelector(".User_input");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".cnt");
const lowOrhi = document.querySelector(".lowOrHI");
const startOver = document.querySelector(".result");

const p = document.createElement("p"); // it creating a paragraph element

let prevGuess = [];
let numGuess = 1;

let PlayGame = true;

if (PlayGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(user_input.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more than 1");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is too low`);
  } else if (guess > random) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  user_input.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrhi.innerHTML = `<h2> ${message} </h2>`;
}

function endGame() {
  user_input.value = "";
  user_input.setAttribute("disabled", "");
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p)
  PlayGame = false
  newGame()
}

function newGame() {
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener('click', function(e){
        random = Math.round(Math.random() * 100);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        user_input.removeAttribute('disabled')
        startOver.removeChild(p)
        PlayGame = True
    })
}
