function computerPlay() {
    let pOutput = ["rock", "paper", "scissors"];
    let output = pOutput[Math.floor(Math.random() * pOutput.length)];
    return output;
}
function playRound(pSelection, cSelection) {
    if (pSelection.toLowerCase() === "rock") {
        if (cSelection === "paper") {
            return "c";
        }
        else if (cSelection === "scissors") {
            return "p";
        }
        else {
            return null;
        }
    }
    else if (pSelection.toLowerCase() === "paper") {
        if (cSelection === "scissors") {
            return "c";
        }
        else if (cSelection === "rock") {
            return "p";
        }
        else {
            return null;
        }
    }
    else {
        if (cSelection === "rock") {
            return "c";
        }
        else if (cSelection === "paper") {
            return "p";
        }
        else {
            return null;
        }
    }
}
function game() {
    let pScore = 0;
    let cScore = 0;
    for (let k = 0; k < 5; k++) {
        let pSelection = prompt("Rock, paper, scissors!");
        let cSelection = computerPlay();
        let result = playRound(pSelection, cSelection);
        if (result === "p") {
            pScore++;
            console.log("result: player wins!");
        }
        else if (result === "c") {
            cScore++;
            console.log("result: computer wins!");
        }
        else {
            console.log("result: draw!");
        }
        
    }
    if (cScore > pScore) {
        console.log("total result: computer wins!");
    }
    else if (pScore > cScore) {
        console.log("total result: player wins!");
    }
    else {
        console.log("total result: draw!");
    }
}