let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
    // rock ,papaer scissor
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}
const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "game was draw. play again ";
    msg.style.backgroundColor = "#081b31";

}
const showWin = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;

        console.log("you win");
        msg.innerText = `you win! ${userchoice} beats ${compchoice}`;

        msg.style.backgroundColor = "green";
    } else {
        compscore++;

        compscorepara.innerText = compscore;


        // console.log("you lose");
        msg.innerText = `you lose! ${compchoice}beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}
const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    // getnertae computer choice 
    const compchoice = gencompchoice();
    console.log("comp choice=", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;

        }
        else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        }
        else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWin(userWin, userchoice, compchoice);


    }

};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log("choice was clicked ",userchoice);
        playgame(userchoice);
    });
});
