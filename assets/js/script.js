document.addEventListener("DOMContentLoaded", function() {
    resetPage();
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
               determineWinner();
            } else {
                resetPage();
                /*let userSelection = this.getAttribute("data-type");
                alert(`You selected ${userSelection}`)
                document.getElementsByTagName('computer-selection') = '';*/
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

    if(userAnswer === "?") {
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
        /*incrementAll();*/
    } else if (userAnswer === "Rock" && computerAnswer === ("Scissors" || "Lizard") ||
    userAnswer === "Paper" && computerAnswer === ("Rock" || "Spock") ||
    userAnswer === "Scissors" && computerAnswer === ("Paper" || "Lizard") ||
    userAnswer === "Lizard" && computerAnswer === ("Paper" || "Spock") ||
    userAnswer === "Spock" && computerAnswer === ("Rock" || "Scissors")) {
    alert(`You win! ${userAnswer} defeats ${computerAnswer}`);
    incrementWins();
    /*incrementAll();*/
    } else {
        alert(`You lose! ${computerAnswer} defeats ${userAnswer}`);
        incrementLosses();
        /*incrementAll()*/
    }
} hidePlay();
}

//function checkAnswer() {}

/**
 * increments user wins by 1 if victorious
 */
function incrementWins() {
    let oldWins = parseInt(document.getElementById('wins').innerText);
    document.getElementById('wins').innerText = ++ oldWins;
    if(oldWins === 5) {
        alert("You win the first to 5!")
        location.reload();
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
    if(oldLosses === 5) {
        alert("You lose the first to 5!")
        location.reload();
    }
}

/**
 * Hides 'Let's Play!' button and displays 'Play again?' button in its
 * place.
 */
function hidePlay() {
    let playButton = document.getElementsByClassName('play-button')[0];
    playButton.style.display="none";

    let playAgainButton = document.getElementsByClassName('play-again-button')[0];
    playAgainButton.style.display = 'inline-block';
}

/**
 * Resets user selection and computer selection.  Hides 'Play Again?' button and 
 * displays Play button.
 */
function resetPage() {
        let playAgainButton = document.getElementsByClassName('play-again-button')[0];
        playAgainButton.style.display = 'none';

        let playButton = document.getElementsByClassName('play-button')[0];
        playButton.style.display="inline-block";
        
        document.getElementById('computer-selection').textContent = '?';
        document.getElementById('user-selection').textContent = '?';
}

/*function incrementAll() {
    let currentScore = parseInt(document.getElementById('losses').innerText) +
    parseInt(document.getElementById('wins').innerText) + 
    parseInt(document.getElementById('draws').innerText);
    console.log(currentScore);
    if(currentScore === 5) {
        alert('The best of 5 is tied!');
    }*/

