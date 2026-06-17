const quizQuestions = [
    {
        id: 1,
        question: "Was ist die Hauptstadt von Deutschland",
        answers: [
            { id: "a", text: "München", correct: false },
            { id: "b", text: "Berlin", correct: true },
            { id: "c", text: "Hamburg", correct: false },
            { id: "d", text: "Hannover", correct: false },
        ],
    },
    {
        id: 2,
        question: "Was ist die Hauptstadt von Frankreich",
        answers: [
            { id: "a", text: "Marseille", correct: false },
            { id: "b", text: "Paris", correct: true },
            { id: "c", text: "Callais", correct: false },
            { id: "d", text: "Rom", correct: false },
        ],
    },
];
let currentQuestion = quizQuestions[0];
let currentQuestionPointer = -1;
// TODO 11: Frage Rendern
function renderQuestion(question) {
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
    document.getElementById("display-question").appendChild(questionDiv);
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