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

        updateUserSelection();
}

/**
 * Updates the class to display the corresponding icon
 * reflecting the user's choice
 */
function updateUserSelection() {

}

/**
 * 
 * Creates random computer answer from array of 
 * possible answers
 */
function computerChoice() {

    let handShapes = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let computerShape = handShapes[Math.floor(Math.random() * 5)];
    console.log(computerShape);
    return computerShape;    
}

/**
 * Displays the user and computer choices to the 
 * battle area
 */
function displayBattle() {

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
        alert(`It's a draw! You both chose ${userAnswer}`);
        incrementDraws();
        incrementAll();
    } else if (userAnswer === "Rock" && computerAnswer === ("Scissors" || "Lizard") ||
    userAnswer === "Paper" && computerAnswer === ("Rock" || "Spock") ||
    userAnswer === "Scissors" && computerAnswer === ("Paper" || "Lizard") ||
    userAnswer === "Lizard" && computerAnswer === ("Paper" || "Spock") ||
    userAnswer === "Spock" && computerAnswer === ("Rock" || "Scissors")) {
    alert(`You win! ${userAnswer} defeats ${computerAnswer}`);
    incrementWins();
    incrementAll();
    } else {
        alert(`You lose! ${computerAnswer} defeats ${userAnswer}`);
        incrementLosses();
        incrementAll()
    }
}
}

//function checkAnswer() {}

/**
 * increments user wins by 1 if victorious
 */
function incrementWins() {
    let oldWins = parseInt(document.getElementById('wins').innerText);
    document.getElementById('wins').innerText = ++ oldWins;
    if(oldWins === 3) {
        alert("You win the best of 5!")
    }
}

/**
 * increments draw tally by 1 if result is a tie
 */
function incrementDraws() {
    let oldDraws = parseInt(document.getElementById('draws').innerText);
    document.getElementById('draws').innerText = ++ oldDraws;
}

/**
 * increments loss tally by 1 if computer wins
 */
function incrementLosses() {
    let oldLosses = parseInt(document.getElementById('losses').innerText);
    document.getElementById('losses').innerText = ++ oldLosses;
    if(oldLosses === 3) {
        alert("You lose the best of 5!")
    }
}

function incrementAll() {
    let currentScore = parseInt(document.getElementById('losses').innerText) +
    parseInt(document.getElementById('wins').innerText) + 
    parseInt(document.getElementById('draws').innerText);
    console.log(currentScore);
    /*if(currentScore === 5) {
        alert('The best of 5 is tied!');
    }*/

}