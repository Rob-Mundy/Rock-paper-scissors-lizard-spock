document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                alert("Let's play!");
            } else {
                let userSelection = this.getAttribute("data-type");
                alert(`You selected ${userSelection}`)
            }
        })
    }

    runGame();
})

function runGame() {

    // create array of possible answers, assign user's selection 
    // and create random computer answer

    let handShapes = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let computerShape = handShapes[Math.floor(Math.random() * handShapes.length)];

        let userShape;
        let userButtons = document.getElementsByClassName('user-selection-zone')[0];
        let buttons = userButtons.getElementsByTagName('button');
        for(let button of buttons) {
        button.addEventListener("click", function() {
            userShape = this.getAttribute("data-type");
            console.log(userShape);
        }); 
        
        }
        
    //displayBattle(userShape, computerShape);
    console.log(`You chose ${userShape}`);
    console.log(`Computer chose ${computerShape}`);
}

function displayBattle(userSelection,computerSelection) {

    document.getElementById('userSelection').textContent = userSelection;
    document.getElementById('computerSelection').textContent = computerSelection;
}

function determineWinner(userShape, computerShape) {

}

//function checkAnswer() {}

function incrementWins() {

}

function incrementDraws() {

}

function incrementLosses() {

}