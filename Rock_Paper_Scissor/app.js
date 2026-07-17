//here write logic
let divs = document.querySelectorAll(".image-box");
let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#comp-score")
let result = document.querySelector("#result")

divs.forEach((div) => {
    div.addEventListener("click", (evt) => {
        let userInput = evt.currentTarget.id;
        console.log("userInput = ", userInput)
        let comInput = getCompInput();
        console.log("compInput = ", comInput)
        let winner = getWinner(userInput, comInput)
        console.log(winner);
        if (winner == "Match is draw") {
            result.innerHTML = winner;
            result.style.backgroundColor = "blue";
        }
        else if (winner == "Computer winner!") {
            result.innerHTML = winner;
            result.style.backgroundColor = "red";
            compScore.innerHTML = Number(compScore.innerHTML) + 1;
        }
        else {
            result.innerHTML = winner;
            result.style.backgroundColor = "green";
            userScore.innerHTML = Number(userScore.innerHTML) + 1;
        }

    })
})

function getCompInput() {
    let list = ["rock", "paper", "scissor"]
    let index = parseInt(Math.random() * 3);
    return list[index];
}

function getWinner(userInput, comInput) {
    if (userInput == comInput) {
        return "Match is draw";
    }
    else if (userInput == "rock" && comInput == "paper" || userInput == "paper" && comInput == "scissor" || userInput == "scissor" && comInput == "rock") {
        return "Computer winner!";
    }
    else {
        return "User winner!";
    }
}