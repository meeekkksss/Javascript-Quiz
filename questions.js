const questions = [
  {
    question:
      "Which of the following fuction of String object returns the calling string value converted to upper case while respecting the current locale?",
    answers: [
      { text: "toLocaleUpperCase()", correct: true },
      { text: "toUpperCase()", correct: false },
      { text: "toString()", correct: false },
      { text: "substring()", correct: false },
    ],
  },
  {
    question:
      "Which of the following fuction of Array object calls a function for each element in the array?",
    answers: [
      { text: "concat()", correct: false },
      { text: "every()", correct: false },
      { text: "filter()", correct: false },
      { text: "forEach()", correct: true },
    ],
  },
  {
    question: "Inside which element do you put Javascript?",
    answers: [
      { text: "<var>", correct: false },
      { text: "<script>", correct: true },
      { text: "<section>", correct: false },
      { text: "<code>", correct: false },
    ],
  },
  {
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Boolean", correct: false },
      { text: "Object", correct: true },
    ],
  },
  {
    question:
      "Which of the following is not a comparison operator in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "===", correct: false },
      { text: "!=", correct: false },
      { text: "=<", correct: true },
    ],
  },
];
const questionElement = document.getElementsByClassName("que-text");
const answerButton = document.getElementsByClassName("option");
const nextButton = document.getElementsByClassName("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion(){
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}