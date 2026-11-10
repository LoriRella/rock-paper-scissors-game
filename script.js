
const gameForm = document.querySelector("#gameForm");
const playerChoice = document.querySelector("#playerChoice");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const determineWinner = (player, computer) => {
  if (player === computer) {
    return "Tie";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Player wins!";
  }

  return "Computer wins!";
};

gameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const player = playerChoice.value;
  const computer = getComputerChoice();
  const result = determineWinner(player, computer);

  console.log("Player's choice:", player);
  console.log("Computer's choice:", computer);
  console.log("Winner:", result);
});
