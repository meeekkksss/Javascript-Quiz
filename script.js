// 1. You will have only <span>15 seconds</span> per each question.
// 2. Once you select your answer, you can't reselect.
// 3. You can't select any option once time goes off.
// 4. You can't exit from the Quiz while you're playing.
// 5. You'll get points on the basis of your correct answers.

// Which of the following fuction of String object returns the calling string value converted to upper case while respecting the current locale?
// A -toLocaleUpperCase()
// B -toUpperCase()
// C -toString()
// D -substring()
// Answer:A Explanation: toLocaleUpperCase()-Returns the calling string calue converted to uppercase while respecting the current locale.

// Which of the following fuction of Array object calls a function for each element in the array?
// A -concat()
// B -every()
// C -filter()
// D -forEach()
// Answer:D Explanation: forEach() -Calls a function for each element in the array

// Inside which element do you put Javascript?
// A - <var>
// B - <script>
// C - <section>
// D - <code>
// Answer: B

// Which of the following is not a primitive data type in JavaScript?
// A - Number
// B - String
// C- Boolean
// D - Object
// Answer: D Object
// Explanation: In JavaScript, the primitive data types are Number, String, Boolean, Null, and Undefined. Object is not a primitive data type.

// What does the “typeof” operator do in JavaScript?
// A - Returns the data type of a variable
// B - Checks if a variable is defined
// C - Assigns a value to a variable
// D - Concatenates two strings
// Answer: A- Returns the data type of a variable
// Explanation: The “typeof” operator in JavaScript returns the data type of a variable. For example, “typeof 42” would return “number”.

// Which of the following is not a comparison operator in JavaScript?
// A - ==
// B - ===
// c - !=
// D - =<
// Answer: D - =<
// Explanation: The correct comparison operator is “<=”, not “=<“.


// let currentQuestionIndex = 0;
// let score = 0;

// // start quiz function 

// function startQuiz(){
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }
// function showQuestion(){
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex +1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   currentQuestion.answers.forEach(answer => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn")
//     answerButton.appendChild(button);
//   });
// }

// startQuiz();

// // variables 

// const questions = [
//   {
//     question:
//       "Which of the following fuction of String object returns the calling string value converted to upper case while respecting the current locale?",
//     answers: [
//       { text: "toLocaleUpperCase()", correct: true },
//       { text: "toUpperCase()", correct: false },
//       { text: "toString()", correct: false },
//       { text: "substring()", correct: false },
//     ]
//   },
//   {
//     question:
//       "Which of the following fuction of Array object calls a function for each element in the array?",
//     answers: [
//       { text: "concat()", correct: false },
//       { text: "every()", correct: false },
//       { text: "filter()", correct: false },
//       { text: "forEach()", correct: true },
//     ]
//   },
//   {
//     question: "Inside which element do you put Javascript?",
//     answers: [
//       { text: "<var>", correct: false },
//       { text: "<script>", correct: true },
//       { text: "<section>", correct: false },
//       { text: "<code>", correct: false },
//     ]
//   },
//   {
//     question:
//       "Which of the following is not a primitive data type in JavaScript?",
//     answers: [
//       { text: "Number", correct: false },
//       { text: "String", correct: false },
//       { text: "Boolean", correct: false },
//       { text: "Object", correct: true },
//     ]
//   },
//   {
//     question:
//       "Which of the following is not a comparison operator in JavaScript?",
//     answers: [
//       { text: "==", correct: false },
//       { text: "===", correct: false },
//       { text: "!=", correct: false },
//       { text: "=<", correct: true },
//     ]
//   },
// ];

// const questionElement = document.getElementsByClassName("que-text");
// const answerButton = document.getElementsByClassName("option");
// const nextButton = document.getElementsByClassName("next-btn");