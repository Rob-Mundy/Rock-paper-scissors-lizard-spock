/**
 * Wait for page load to run game functions
 */
document.addEventListener("DOMContentLoaded", function () {
    resetPage();
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                determineWinner();
            } else {
                resetPage();
            }
        });
    }

    runGame();
});

/**
 * Assigns a user shape to the battle area on click related to the button data-type
 */
function runGame() {

    let userShape;
    let userSelection = document.getElementById('user-selection');
    let userButtons = document.getElementsByClassName('user-selection-zone')[0];
    let buttons = userButtons.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener("click", function () {
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
    console.log(computerShape);
    return computerShape;
}

/**
 * Compares the user and computer answers and declares
 * a winner
 */
function determineWinner() {

    let userSpan = document.getElementById('user-selection');
    let userAnswer = userSpan.textContent;

    if (userAnswer === "?") {
        alert('Please choose a shape!');
    } else {
        console.log(`User chose: ${userAnswer}`);
        let computerAnswer = computerChoice();
        console.log(`Computer chose: ${computerAnswer}`);

        let compSpan = document.getElementById('computer-selection');
        compSpan.textContent = computerAnswer;

        if (userAnswer === computerAnswer) {
            alert(`It's a draw! You both chose ${userAnswer}`);
            incrementDraws();
        } else if ((userAnswer === "Rock" && ((computerAnswer === "Scissors") || (computerAnswer === "Lizard"))) ||
            (userAnswer === "Paper" && ((computerAnswer === "Rock") || (computerAnswer === "Spock"))) ||
            (userAnswer === "Scissors" && ((computerAnswer === "Paper") || (computerAnswer === "Lizard"))) ||
            (userAnswer === "Lizard" && ((computerAnswer === "Paper") || (computerAnswer === "Spock"))) ||
            (userAnswer === "Spock" && ((computerAnswer === "Rock") || (computerAnswer === "Scissors")))) {
            alert(`You win! ${userAnswer} defeats ${computerAnswer}`);
            incrementWins();
        } else {
            alert(`You lose! ${computerAnswer} defeats ${userAnswer}`);
            incrementLosses();
        }
    }
    hidePlay();
}

/**
 * increments user wins by 1 if victorious
 */
function incrementWins() {
    let oldWins = parseInt(document.getElementById('wins').innerText);
    document.getElementById('wins').innerText = ++oldWins;
    if (oldWins === 5) {
        alert("You win the first to 5!");
        location.reload();
    }
}

/**
 * increments draw tally by 1 if result is a tie
 */
function incrementDraws() {
    let oldDraws = parseInt(document.getElementById('draws').innerText);
    document.getElementById('draws').innerText = ++oldDraws;
}

/**
 * increments loss tally by 1 if computer wins
 */
function incrementLosses() {
    let oldLosses = parseInt(document.getElementById('losses').innerText);
    document.getElementById('losses').innerText = ++oldLosses;
    if (oldLosses === 5) {
        alert("You lose the first to 5!");
        location.reload();
    }
}

/**
 * Hides 'Let's Play!' button and displays 'Play again?' button in its
 * place.
 */
function hidePlay() {
    let playButton = document.getElementsByClassName('play-button')[0];
    playButton.style.display = "none";

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
    playButton.style.display = "inline-block";

    document.getElementById('computer-selection').textContent = '?';
    document.getElementById('user-selection').textContent = '?';
}