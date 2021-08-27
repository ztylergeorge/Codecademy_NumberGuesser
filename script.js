let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generateTarget() function returns random integer
//between 0 and 9

function generateTarget() {

    return Math.floor(Math.random() * 9);
}

//compareGuesses compares the user and computer guess
//to the target

function compareGuesses(user, computer, target) {

    if ((Math.abs(target - user) < Math.abs(target - computer)) || (Math.abs(target - user) === Math.abs(target - computer))) {

        return true;

    }

    else {

        return false;
    }

}

