const myQuestions = [
    {
        question: "Which of the following is a looping structure in JavaScript?",
        answer: [
            { text: "if-else", correct: false },
            { text: "for", correct: true },
            { text: "switch", correct: false },
            { text: "function", correct: false },
        ]
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: [
            { text: "var", correct: true },
            { text: "int", correct: false },
            { text: "string", correct: false },
            { text: "define", correct: false },
        ]
    },

    {
        question: "Which method is used to add an element at the end of an array?",
        answer: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false },
        ]
    },

    {
        question: "Which operator is used for strict equality in JavaScript?",
        answer: [
            { text: "=", correct: false },
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false },
        ]
    },

    {
        question: "Which function is used to print output in the browser console?",
        answer: [
            { text: "print()", correct: false },
            { text: "console.log()", correct: true },
            { text: "display()", correct: false },
            { text: "write()", correct: false },
        ]
    }
];


// n = Number(prompt("enter how number of quize you want assign : "))
// for (let i = 0; i < n; i++) {
//     ques = prompt(`enter question ${i + 1} : `)
//     let ans = []
//     for (let j = 0; j < 4; j++) {
//         op = prompt(`enter op ${j + 1} : `)
//         cr = Boolean(prompt(`enter ture or false: `))
//         ans.push({ text: op, correct: cr })
//     }
//     myQuestions.push({ question: ques, answer: ans })
// }


let question = document.querySelector("#question");
let answerBtns = document.querySelector(".answer-btns");
let nextBtn = document.querySelector("#next-btn");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    nextBtn.style.display = "none";
    nextBtn.innerHTML = "Next";
    showQuestions();
}
function showQuestions() {
    resetButtons();
    let currentQuestion = myQuestions[currentQuestionIndex];
    question.innerHTML = (currentQuestionIndex + 1) + ". " + currentQuestion.question;
    currentQuestion.answer.forEach((ans) => {
        let btn = document.createElement("button");
        btn.innerText = ans.text;
        btn.classList.add("btn");
        answerBtns.append(btn);
        btn.addEventListener("click", selectAnswer)
        if (ans.correct == true) {
            btn.dataset.correct = ans.correct;
        }
    })
}
function resetButtons() {
    // answerBtns.innerHTML=""

    while (answerBtns.firstElementChild) {
        answerBtns.firstElementChild.remove();
    }
}

function selectAnswer(evt) {
    let correct = evt.target.dataset.correct;
    console.log(typeof correct)
    if (correct == "true") {
        evt.target.classList.add("correct");
        score++;
    }
    else {
        evt.target.classList.add("in-correct");
    }

    Array.from(answerBtns.children).forEach((bt) => {
        if (bt.dataset.correct == "true") {
            bt.classList.add("correct");
        }
        bt.disabled = true;
    })
    nextBtn.style.display = "block";
}

function showResult() {
    resetButtons();
    question.innerHTML = `you scored ${score} out of ${myQuestions.length}!`
    nextBtn.innerHTML = "play again";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    nextBtn.style.display = "none";
    currentQuestionIndex++; //6
    if (currentQuestionIndex < myQuestions.length) {
        showQuestions()
    }
    else if (currentQuestionIndex == myQuestions.length + 1) {
        startQuiz();
    }
    else {
        showResult();
    }
})

startQuiz()

