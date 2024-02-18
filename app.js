let userScore = 0;
let comScore = 0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScoreupdate = document.querySelector("#user_score");
const comScoreUpdate = document.querySelector("#com_score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const drawGame = () => {
    msg.innerText = "Draw, Try Again";
    msg.style.backgroundColor = "rgb(14, 14, 97)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreupdate.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        comScore++;
        comScoreUpdate.innerText = comScore;
    }
};

const palyGame = (userChoice) => {
    console.log(`The User choice ${userChoice}`);
    const compChoice = genCompChoice();
    console.log(`The Computer Choice ${compChoice}`);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice ==="paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = userChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        palyGame(userChoice);
    })
})