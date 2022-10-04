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
})

function runGame() {

}

function determineWinner() {

}

//function checkAnswer() {}

function incrementWins() {

}

function incrementDraws() {

}

function incrementLosses() {

}