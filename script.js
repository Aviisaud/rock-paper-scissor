let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg')
const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const gencompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() *3);
    return option[ranIdx];
}

const drawGame = () => {
    // console.log('Game is Draw')
    msg.innerHTML = "It's a draw! No one wins.";
    msg.style.backgroundColor = "#483d8b"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        // console.log("You win")
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = `Congratulations! You win 🎉 ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        // console.log('You lost')
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `Oh no! Computer wins 😢 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice is", userChoice.toUpperCase());
    // Generate comp choice
    const compChoice = gencompChoice();
    // console.log("Comp choice is", compChoice.toUpperCase());
    if(userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === "paper" ? false : true;
        } else if( userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice.toUpperCase(), compChoice.toUpperCase())
    }
};



choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id")
        // console.log('Choice was clicked', userChoice)
        playGame(userChoice)
    })
})