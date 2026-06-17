"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
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
  if (currentQuestion) {
    document.getElementById(String(currentQuestion.id))?.remove();
  }
  if (currentQuestionPointer + 1 < quizQuestions.length) {
    currentQuestionPointer++;
    currentQuestion = quizQuestions[currentQuestionPointer];
  } else {
    currentQuestionPointer = 0;
    currentQuestion = quizQuestions[currentQuestionPointer];
  }
  renderQuestion(currentQuestion);
}
// TODO 13: Frage beantworten Logik
function validate(answerId) {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  if (!correctAnswer) {
    return;
  }
  if (correctAnswer.id === answerId) {
    alert("RICHTIG");
    document.getElementById(answerId)?.classList.add("correct");
  } else {
    alert("FALSCH");
    document.getElementById(answerId)?.classList.add("incorrect");
    document.getElementById(correctAnswer.id)?.classList.add("correct");
  }
}
// TODO 14: Lösung anzeigen
function showSolution() {
  const correctAnswer = currentQuestion.answers.find((answer) => {
    return answer.correct;
  });
  if (!correctAnswer) {
    return;
  }
  document.getElementById(correctAnswer.id)?.classList.add("correct");
}
window.addEventListener("DOMContentLoaded", () => {
  renderQuestion(currentQuestion);
  document.getElementById("showSolution")?.addEventListener("click", showSolution);
  document.getElementById("showNextQuestion")?.addEventListener("click", nextQuestion);
});
//# sourceMappingURL=index.js.map
