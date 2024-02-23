const choices = ["Kamień", "Papier", "Nożyce"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === computerChoice) {

        result = "REMIS!";

    }
    else{
        switch(playerChoice){
            case "Kamień":
            result = (computerChoice === "Nożyce") ? "WYGRAŁEŚ!" : "PRZEGRAŁEŚ!";
                break;
            case "Papier":
                result = (computerChoice === "Kamień") ? "WYGRAŁEŚ!" : "PRZEGRAŁEŚ!";
                break;
            case "Nożyce":
                    result = (computerChoice === "Papier") ? "WYGRAŁEŚ!" : "PRZEGRAŁEŚ!";
                break;
        }

    }
    playerDisplay.textContent = `GRACZ: ${playerChoice}`;
    computerDisplay.textContent = `KOMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "WYGRAŁEŚ!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "PRZEGRAŁEŚ!":
                resultDisplay.classList.add("redText")
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
    }
}