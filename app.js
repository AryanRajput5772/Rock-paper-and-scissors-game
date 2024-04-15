let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const rockImg = document.querySelector(".rock");
const paperImg = document.querySelector(".paper");
const scissorsImg = document.querySelector(".scissors");

const showCompChoice = (compChoice) => {
  if (compChoice == "rock") {
    scissorsImg.style.display = "none";
    paperImg.style.display = "none";
    rockImg.style.display = "inline";
  } else if (compChoice == "paper") {
    rockImg.style.display = "none";
    scissorsImg.style.display = "none";
    paperImg.style.display = "inline";
  } else if (compChoice == "scissors") {
    rockImg.style.display = "none";
    paperImg.style.display = "none";
    scissorsImg.style.display = "inline";
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randNum = Math.floor(Math.random() * 3);
  let compChoice = options[randNum];
  showCompChoice(compChoice);
  return compChoice;
};

const drawGame = () => {
  msg.innerText = "😇 Game was Draw, Play Again";
  msg.style.backgroundColor = "#2e1c2b";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin == true) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `😍 You Win!, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `😒 You lose, ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //Scissors, paper
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "rock" ? true : false;
    } else {
      //paper, rock
      userWin = compChoice === "paper" ? true : false;
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
