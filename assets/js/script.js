document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
               determineWinner();
            } else {
                let userSelection = this.getAttribute("data-type");
                alert(`You selected ${userSelection}`)
            }
        })
    }

    runGame();
})

function runGame() {

        let userShape;
        let userSelection = document.getElementById('user-selection');
        let userButtons = document.getElementsByClassName('user-selection-zone')[0];
        let buttons = userButtons.getElementsByTagName('button');
        for(let button of buttons) {
        button.addEventListener("click", function() {
            userShape = this.getAttribute("data-type");
            userSelection.textContent = userShape;
            console.log(userShape);
        }); 
        }
}

/**
 * 
 * Creates random computer answer from array of 
 * possible answers
 */
function computerChoice() {

    let handShapes = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let computerShape = handShapes[Math.floor(Math.random() * 5)];
    alert(computerShape);
    return computerShape;    
}

/**
 * Displays the user and computer choices to the 
 * battle area
 */
function displayBattle(userSelection,computerSelection) {

    document.getElementById('user-selection').textContent = userSelection;
    document.getElementById('computer-selection').textContent = computerSelection;
}

/**
 * Compares the user and computer answers and declares
 * a winner
 */
function determineWinner() {

    let userSpan = document.getElementById('user-selection');
    let userAnswer = userSpan.textContent;

    if(userAnswer === "") {
        alert('Please choose a shape!')
    } else {
    console.log(`User chose: ${userAnswer}`);
    let computerAnswer = computerChoice();
    console.log(`Computer chose: ${computerAnswer}`)

    let compSpan = document.getElementById('computer-selection');
    compSpan.textContent = computerAnswer ;

    if (userAnswer === computerAnswer){
        alert("It's a draw!");
        incrementDraws();
    } else if (userAnswer === "Rock" && computerAnswer === ("Scissors" || "Lizard") ||
    userAnswer === "Paper" && computerAnswer === ("Rock" || "Spock") ||
    userAnswer === "Scissors" && computerAnswer === ("Paper" || "Lizard") ||
    userAnswer === "Lizard" && computerAnswer === ("Paper" || "Spock") ||
    userAnswer === "Spock" && computerAnswer === ("Rock" || "Scissors")) {
    alert(`You win! ${userAnswer} defeats ${computerAnswer}`);
    incrementWins();
    } else {
        alert(`You lose! ${computerAnswer} defeats ${userAnswer}`);
        incrementLosses();
    }
}
}

//function checkAnswer() {}

function incrementWins() {

}

function incrementDraws() {

}

function incrementLosses() {

}