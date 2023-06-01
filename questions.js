const questions = [
  {
    question:
      "Which of the following function of String object returns the calling string value converted to upper case while respecting the current locale?",
    answers: [
      { text: "toLocaleUpperCase()", correct: true },
      { text: "toUpperCase()", correct: false },
      { text: "toString()", correct: false },
      { text: "substring()", correct: false },
    ],
  },
  {
    question:
      "Which of the following function of Array object calls a function for each element in the array?",
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

// Get DOM elements
const startButton = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitButton = infoBox.querySelector(".buttons .quit");
const continueButton = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const optionList = document.querySelector(".option-list");

// Function to start the quiz
startButton.onclick = () => {
  infoBox.classList.add("activeInfo");
};

// Function to exit the quiz
exitButton.onclick = () => {
  infoBox.classList.remove("activeInfo");
};

// Function to restart the quiz
continueButton.onclick = () => {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");
  showQuestions(0);
  queCounter(1);
  startTimer(15);
};

// Function to show quiz questions
let questionCount = 0;
let queNum = 1;
let counter;
let timeValue = 15;
let score = 0;

function showQuestions(index) {
  const queText = document.querySelector(".que-text");

  // Create a new span element for the question text
  let queTag = "<span>" + questions[index].question + "</span>";

  // Create an HTML string for options
  let optionTag = "";
  for (let i = 0; i < questions[index].answers.length; i++) {
    optionTag +=
      '<div class="option"><span class="icon"></span>' +
      questions[index].answers[i].text +
      "</div>";
  }

  // Set the question text and options in the DOM
  queText.innerHTML = queTag;
  optionList.innerHTML = optionTag;

  // Add event handler to each option
  const option = optionList.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// Function to handle user's option selection
function optionSelected(answer) {
  clearInterval(counter);
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answers.find(
    (a) => a.correct === true
  ).text;

  // Check if the user selected the correct option
  if (userAnswer === correctAnswer) {
    answer.classList.add("correct");
    score += 1;
  } else {
    answer.classList.add("incorrect");
  }

  // Disable options after selection
  for (let i = 0; i < optionList.children.length; i++) {
    optionList.children[i].classList.add("disabled");
  }

  // Show the correct answer after a delay
  setTimeout(nextQuestion, 1000);
}

// Function to load the next question
function nextQuestion() {
  if (questionCount === questions.length - 1) {
    quizOver();
  } else {
    questionCount++;
    queNum++;
    showQuestions(questionCount);
    queCounter(queNum);
    clearInterval(counter);
    startTimer(timeValue);
  }
}

// Function to display the result after quiz completion
function quizOver() {
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");
  const scoreText = resultBox.querySelector(".score-text");
  if (score === questions.length) {
    scoreText.textContent =
      "Congratulations! You've scored " + score + "/" + questions.length;
  } else {
    scoreText.textContent = "You scored " + score + "/" + questions.length;
  }
}

// Function to update the question counter
function queCounter(index) {
  const bottomQuestionCounter = document.querySelector(".total-questions");
  let totalQuestionsCountTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> Questions</span>";
  bottomQuestionCounter.innerHTML = totalQuestionsCountTag;
}

// Function to start the timer
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      const timeText = timeCount.querySelector("p");
      timeText.textContent = "0" + time;
    }
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "00";
      quizOver();
    }
  }
}

// Invoke the startTimer function to start the countdown
startTimer(timeValue);

// // Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//   // Get references to the HTML elements
//   const startButton = document.getElementById("startButton");
//   const infoBox = document.querySelector(".info-box");
//   const quizBox = document.querySelector(".quiz-box");
//   const resultBox = document.querySelector(".result-box");
//   const timerSec = document.querySelector(".timer-sec");

// // countdown timer
// let timeLeft = 15;
// let timerId;

// function startTimer(){
//   timerId = setInterval(updateTimer, 1000);
// }

// function updateTimer(){
//   if (timeLeft > 0) {
//     timeLeft--;
//     timerSec.textContent = timeLeft;
//   }else {
//     clearInterval(timerId);
//     // Timer has reached 0, perform actions for time-up scenario
//     // For now, let's hide the quiz box and show the reult box
//     quizBox.style.display ="none";
//     resultBox.style.display = "block";
//   }
// }

// // Add Click event listener to the start button
// startButton.addEventListener("click", function(){
//   // Hide the start button and show the info box
//   infoBox.style.display = "block";
//   this.style.display = "none";
//   // start the timer when the quiz starts
//   startTimer();
// });
