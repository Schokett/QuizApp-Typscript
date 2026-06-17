const quizQuestions = [
    {
        id: 1,
        question: "Auf welcher japanischen Insel liegt die Hauptstadt Tokio?",
        answers: [
            { id: "a", text: "Hokkaido", correct: false },
            { id: "b", text: "Honshu", correct: true },
            { id: "c", text: "Kyushu", correct: false },
            { id: "d", text: "Shikoku", correct: false },
        ],
    },
    {
        id: 2,
        question: "Was beschreibt der Begriff 'Sakura' in der japanischen Kultur?",
        answers: [
            { id: "a", text: "Die Kunst des Papierfaltens", correct: false },
            { id: "b", text: "Die traditionelle Teezeremonie", correct: false },
            { id: "c", text: "Die Kirschblüte", correct: true },
            { id: "d", text: "Ein scharfes Gewürz aus Meerrettich", correct: false },
        ],
    },
    {
        id: 3,
        question: "Wie heißt der höchste Berg Japans, der auch ein heiliges Symbol ist?",
        answers: [
            { id: "a", text: "Mount Everest", correct: false },
            { id: "b", text: "Mount Kita", correct: false },
            { id: "c", text: "Mount Fuji", correct: true },
            { id: "d", text: "Mount Aso", correct: false },
        ],
    },
    {
        id: 4,
        question: "Welches Gericht besteht traditionell aus gesäuertem Reis und oft rohem Fisch?",
        answers: [
            { id: "a", text: "Ramen", correct: false },
            { id: "b", text: "Sashimi", correct: false },
            { id: "c", text: "Sushi", correct: true },
            { id: "d", text: "Tempura", correct: false },
        ],
    },
    {
        id: 5,
        question: "Wie nennt man die japanischen Ritter des Adelsstandes im vorindustriellen Japan?",
        answers: [
            { id: "a", text: "Ninja", correct: false },
            { id: "b", text: "Samurai", correct: true },
            { id: "c", text: "Shogun", correct: false },
            { id: "d", text: "Ronin", correct: false },
        ],
    },
];
let currentQuestion = quizQuestions[0];
let currentQuestionPointer = -1;
// TODO 11: Frage Rendern
function renderQuestion(question) {
    var _a;
    const questionDiv = document.createElement("div");
    questionDiv.id = question.id.toString();
    questionDiv.classList.add("question");
    const questionTitle = document.createElement("div");
    questionTitle.classList.add("question-title");
    questionTitle.appendChild(document.createTextNode(question.question));
    const questionAnswers = document.createElement("div");
    questionAnswers.classList.add("question-answers");
    // [] --> c,a,d,b
    const answersCopy = [];
    question.answers.forEach((answer) => {
        answersCopy.push(answer);
    });
    while (answersCopy.length > 0) {
        const randomPointer = Math.floor(Math.random() * answersCopy.length);
        const answer = answersCopy.splice(randomPointer, 1)[0];
        const answerDiv = document.createElement("button");
        answerDiv.id = answer.id;
        answerDiv.addEventListener("click", () => {
            validate(answer.id);
        });
        answerDiv.classList.add("answer");
        answerDiv.appendChild(document.createTextNode(answer.text));
        questionAnswers.appendChild(answerDiv);
    }
    questionDiv.appendChild(questionTitle);
    questionDiv.appendChild(questionAnswers);
    (_a = document.getElementById("display-question")) === null || _a === void 0 ? void 0 : _a.appendChild(questionDiv);
}
// TODO 12: "Next" Logik
function nextQuestion() {
    var _a;
    if (currentQuestion) {
        (_a = document.getElementById(String(currentQuestion.id))) === null || _a === void 0 ? void 0 : _a.remove();
    }
    if (currentQuestionPointer + 1 < quizQuestions.length) {
        currentQuestionPointer++;
        currentQuestion = quizQuestions[currentQuestionPointer];
    }
    else {
        currentQuestionPointer = 0;
        currentQuestion = quizQuestions[currentQuestionPointer];
    }
    renderQuestion(currentQuestion);
}
// TODO 13: Frage beantworten Logik
function validate(answerId) {
    var _a, _b, _c;
    const correctAnswer = currentQuestion.answers.find((answer) => {
        return answer.correct;
    });
    if (!correctAnswer) {
        return;
    }
    if (correctAnswer.id === answerId) {
        alert("RICHTIG");
        (_a = document.getElementById(answerId)) === null || _a === void 0 ? void 0 : _a.classList.add("correct");
    }
    else {
        alert("FALSCH");
        (_b = document.getElementById(answerId)) === null || _b === void 0 ? void 0 : _b.classList.add("incorrect");
        (_c = document.getElementById(correctAnswer.id)) === null || _c === void 0 ? void 0 : _c.classList.add("correct");
    }
}
// TODO 14: Lösung anzeigen
function showSolution() {
    var _a;
    const correctAnswer = currentQuestion.answers.find((answer) => {
        return answer.correct;
    });
    if (!correctAnswer) {
        return;
    }
    (_a = document.getElementById(correctAnswer.id)) === null || _a === void 0 ? void 0 : _a.classList.add("correct");
}
window.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    renderQuestion(currentQuestion);
    (_a = document.getElementById("showSolution")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", showSolution);
    (_b = document.getElementById("showNextQuestion")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", nextQuestion);
});
export {};
//# sourceMappingURL=index.js.map