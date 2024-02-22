let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gemComputerChoice = () => {
  // Rock,paper,Seasor
  const options = ["rock", "paper", "seasor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  const msgContainer = document.querySelector(".msg-container");
  console.log("Game was Draw! ");
  msg.innerText = "Game was Draw, Play Again...";
  msgContainer.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  const msgContainer = document.querySelector(".msg-container");
  const msg = document.querySelector("#msg");
  const userCount = document.querySelector("user-score");
  const compCount = document.querySelector("comp-score");
  if (userWin) {
    console.log("You Win!");
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msgContainer.style.background = "Green";
    userScore++;
    userScorePara.innerText = `${userScore}`;
  } else {
    console.log("You Lose!");
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msgContainer.style.background = "red";
    compScore++;
    compScorePara.innerText = `${compScore}`;
  }
};

const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);

  // Generate Computer Choice
  const compChoice = gemComputerChoice();
  console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // seasor,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock,seasor
      userWin = compChoice === "seasor" ? false : true;
    } else {
      // rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
