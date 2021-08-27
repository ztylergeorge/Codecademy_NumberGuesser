let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generateTarget function returns random integer
//between 0 and 9

function generateTarget() {

    return Math.floor(Math.random() * 9);
}

//getAbsoluteDistance finds distance between two targets

function getAbsoluteDistance(n1, n2) {
    return Math.abs(n2 - n1);
}
//compareGuesses compares the user and computer guess
//to the target

function compareGuesses(user, computer, target) {

    if (getAbsoluteDistance(target, user) < getAbsoluteDistance(target, computer) || (getAbsoluteDistance(target, user) === getAbsoluteDistance(target, computer))) {

        return true;

    }

    else {

        return false;
    }

}

//updateScore updates the score of the user or computer
function updateScore(winner) {

    if (winner === "human") {

        humanScore++;

    }
    
    if (winner === "computer") {

        computerScore++;

    }
}

//advanceRound updates round number
function advanceRound() {

    currentRoundNumber++;

}
