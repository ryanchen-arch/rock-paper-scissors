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
    }
}
function game() {
    let pScore = 0;
    let cScore = 0;
    for (let k = 0; k < 5; k++) {
        let pSelection = prompt("Rock, paper, scissors!");
        let cSelection = computerPlay();
        let result = playRound(pSelection, cSelection);
        if (let === "p") {
            pScore++;
            console.log("result: player wins!");
        }
        else if (let === "c") {
            cScore++;
            console.log("result: computer wins!");
        }
        else {
            console.log("result: draw!");
        }
        
    }
}