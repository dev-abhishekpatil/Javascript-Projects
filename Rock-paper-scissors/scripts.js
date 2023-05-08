const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");

let resultDisplay = document.getElementById("result");

const possibleChoice = document.querySelectorAll("button");

let userChoice, computerChoice, randomChoice, result;

possibleChoice.forEach(possibleChoice => addEventListener("click", (e) => {

  userChoice = e.target.id;

  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    computerChoice = "Rock";
  }
  if (randomChoice === 2) {
    computerChoice = "Paper";
  }
  if (randomChoice === 3) {
    computerChoice = "Scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a DRAW"
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "User's Loss"
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "User's Loss"
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "User's Win"
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "User's Win"
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "User's Win"
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "User's Loss"
  }

  resultDisplay.innerHTML = result;
}