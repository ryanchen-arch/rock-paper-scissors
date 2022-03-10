window.addEventListener('DOMContentLoaded', () => {
    const scoreboard = document.querySelector('#scoreboard');
    const playerS = document.querySelector('#playerS');
    const computerS = document.querySelector('#computerS');
    const buttons = document.querySelectorAll('button');
    let pScore = 0;
    let cScore = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            
            let cButton = computerPlay();
            let pButton = event.target.id;
            let result = playRound(pButton, cButton);
            game(result);
            
        })
    })
    function computerPlay() {
        let pOutput = ['rock', 'paper', 'scissors'];
        let output = pOutput[Math.floor(Math.random() * pOutput.length)];
        return output;
    }
    function playRound(pSelection, cSelection) {
        if (pSelection.toString().toLowerCase() === 'rock') {
            if (cSelection === 'paper') {
                return 'c';
            }
            else if (cSelection === 'scissors') {
                return 'p';
            }
            else {
                return null;
            }
        }
        else if (pSelection.toString().toLowerCase() === 'paper') {
            if (cSelection === 'scissors') {
                return 'c';
            }
            else if (cSelection === 'rock') {
                return 'p';
            }
            else {
                return null;
            }
        }
        else {
            if (cSelection === 'rock') {
                return 'c';
            }
            else if (cSelection === 'paper') {
                return 'p';
            }
            else {
                return null;
            }
        }
    }

    function game(result) {
        if (result === "p") {
            pScore++;
            playerS.textContent = 'player: ' + pScore;
            scoreboard.textContent = 'result: player wins!';
        }
        else if (result === "c") {
            cScore++;
            computerS.textContent = 'computer: ' + cScore;
            scoreboard.textContent = 'result: computer wins!';
        }
        else {
            scoreboard.textContent = 'result: draw!';
        }
        if (pScore === 5 || cScore === 5) {
            if (cScore > pScore) {
                scoreboard.textContent= "total result: computer wins!";
            }
            else if (pScore > cScore) {
                scoreboard.textContent = "total result: player wins!";
            }
        }
        
        
    }
})
