let humanScore = 0;
let computerScore = 0;

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
    if (humanChoice === computerChoice) {
        console.log("You tied! " + humanChoice +" doesn\'t beat " + computerChoice + " or vice versa.");
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "");
        computerScore++;
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "");
        humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "");
        humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "");
        computerScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "");
        computerScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "");
        humanScore++;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Human score: " + humanScore + "\nComputer score: " + computerScore);
}

playGame();