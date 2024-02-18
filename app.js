let choices = document.querySelectorAll(".choice");
let userScore = 0;
let comScore = 0;
let msg = document.querySelector("#msg")
let userScoreUpdate = document.querySelector("#user_score");
let comScoreUpdate = document.querySelector("#com_score");

// Generating Computer's Choice 
const genCompChoice = () => {
    Options = ["Rock", "Paper", "Scissors"];
    randomIdx = Math.floor(Math.random() *3);
    return Options[randomIdx];
}

//Draw Game 
const drawGame = () => {
    msg.style.backgroundColor = "rgb(14, 14, 97)";
    msg.innerText = "Game was Draw! Try Agin";
}

//Showing Winner 
const showWinner = (userWin, choiceID, comptChoice) => {
    if(userWin) {
        userScore++;
        userScoreUpdate.innerText = `${userScore}`;
        msg.innerText = `You Win! ${choiceID} beats ${comptChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        comScore++;
        comScoreUpdate.innerText = `${comScore}`;
        msg.innerText = `You Lose! ${comptChoice} beats ${choiceID}`;
        msg.style.backgroundColor = "red";
    }
}

//Playing Our Game 
const playGame = (choiceID) => {
    console.log(`User Choice is: ${choiceID}`);
    const comptChoice = genCompChoice();
    console.log(`Computer Choice is: ${comptChoice}`);

    if (choiceID === comptChoice) {
        drawGame();
    }
    else {
        userWin = true;
        if (choiceID === "Rock") {
            userWin = comptChoice === "Paper" ? false : true;
        }else if (choiceID === "Paper") {
            userWin = comptChoice === "Scissors" ? false : true;
        }else {
            choiceID === "Rock" ? false : true;
        }

        showWinner (userWin, choiceID, comptChoice);
    }
}



//Getting User Choice 
const userChoices = choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceID = choice.getAttribute("id");
        playGame(choiceID);
    });

});