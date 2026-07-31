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

let question = document.querySelector("#question");
let answerBtns = document.querySelectorAll(".btn");
let nextBtn = document.querySelector("#next-btn");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    showQuestions();
}
function showQuestions() {
    let currentQuestion = myQuestions[currentQuestionIndex];
    question.innerHTML = currentQuestion.question;
}
startQuiz()

