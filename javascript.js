const buttons = document.querySelectorAll("button");
const logic = document.querySelector("#logic");
const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");
const playAgainButton = document.querySelector("#play-again-button");

playAgainButton.style.display = "none";

buttons.forEach((button) =>
    button.addEventListener("click", () => {
        playGame(button.id);
    })
);

let humanScore = 0;
let computerScore = 0;

playAgainButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    buttons.forEach((button) =>
        button.style.display = "initial"
    )
    playAgainButton.style.display = "none";
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    logic.textContent = "";
});

function getComputerChoice(){
    const choice = Math.round(Math.random() * 2);
    if (choice === 0) {
        console.log("Computer chooses: " + choice);
        return "rock";
    }
    if (choice === 1) {
        console.log("Computer chooses: " + choice);
        return "paper";
    }
    if (choice === 2) {
        console.log("Computer chooses: " + choice);
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("What's your choice? \"rock\", \"paper\" or \"scissors\"");
    humanChoice = humanChoice.toLowerCase();
    console.log("Human chooses: " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    let outputText = "";
    if (humanChoice === computerChoice) {
        outputText = ("You tied! " + humanChoice +" doesn\'t beat " + computerChoice + " or vice versa.");
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        outputText = ("You lose! " + computerChoice + " beats " + humanChoice + "");
        computerScore++;
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        outputText = ("You Win! " + humanChoice + " beats " + computerChoice + "");
        humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        outputText = ("You Win! " + humanChoice + " beats " + computerChoice + "");
        humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        outputText = ("You lose! " + computerChoice + " beats " + humanChoice + "");
        computerScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        outputText = ("You lose! " + computerChoice + " beats " + humanChoice + "");
        computerScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        outputText = ("You Win! " + humanChoice + " beats " + computerChoice + "");
        humanScore++;
    }

    logic.setAttribute('style', 'white-space: pre;');
    logic.textContent = "Computer chose: " + computerChoice + "\r\n" + outputText + "\r\n";
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    if (humanScore >= 5 || computerScore >= 5) {
        buttons.forEach((button) =>
            button.style.display = "none"
        )
        if (humanScore === 5) { logic.textContent = "You won!"; }
        if (computerScore === 5) { logic.textContent = "Computer won!"; }
        playAgainButton.style.display = "initial";
    }
}

function playGame(btnId){
    //for (let i = 0; i < 5; i++) {
        const humanSelection = btnId;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    //}
    console.log("Human score: " + humanScore + "\nComputer score: " + computerScore);
}

//playGame();