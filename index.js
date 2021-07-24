// Grab Elements
const qNum = document.getElementById("q-num");
const question = document.getElementById("question");
const container = document.getElementById("container");
const choices = document.getElementById("choices");
const retryBtn = document.getElementById("retry-btn");
// Create Elements
const welcome = document.createElement("h1");
const welcomDescription = document.createElement("p");
const startBtn = document.createElement("button");
const msg = document.createElement("h4");
const correctCount = document.createElement("h5");
const passed = document.createElement("p");
let questionCounter = 0;
let correctAnswers = 0;

// Setup Quiz details
const questions = {
  howManyQuestions: 3,
  howManyToPass: 2,
  questionNum: ["Question 1", "Question 2", "Question 3"],
  question: [
    "What was/is the largest animal ever lived?",
    "Who was the 40th U.S. Presodent?",
    "My Beautiful Dark Twisted Fantasy was an Hip-Hop album by which artist?",
  ],
  answer: [1, 4, 2],
  choiceOne: ["Blue Whale", "Georg W Bush Jr", "The Weekend"],
  choiceTwo: ["Giraffe", "Barack Obama", "Kanye West"],
  choiceThree: ["Titanosaurs", "Donald Trump", "The Dream"],
  choiceFour: ["Megaladon", "Ronald Reagen", "Taylor Swift"],
};

const messages = {
  welcomeText: "Welcome!",
  welcomeDescriptionText:
    "Created this Quiz using JavaScript and my understanding of Dom Manipulation. Feel free to challenge yourself! Get 2 out of 3 questions correct to pass, Good Luck!",
  startBtnText: "Start Quiz",
  thankYouText: "Thank You For Participating!",
  correctText: "Correct Answers: ",
  passedNoText: "Failed",
  passedYesText: "Passed",
  retakeQuizText: "Retry?",
};

// Start Quiz
if (questionCounter < questions.howManyQuestions) {
  welcome.textContent = messages.welcomeText;
  startBtn.textContent = messages.startBtnText;
  welcomDescription.textContent = messages.welcomeDescriptionText;
  startBtn.setAttribute("onClick", "renderQuestion()");
  startBtn.setAttribute("class", "start-btn");
  welcomDescription.setAttribute("class", "welcome-description");
  container.appendChild(welcome);
  container.appendChild(welcomDescription);
  container.appendChild(startBtn);
  // renderQuestion();
}

// Render Questions
function renderQuestion() {
  startBtn.remove();
  welcome.remove();
  welcomDescription.remove();
  qNum.textContent = questions.questionNum[questionCounter];
  question.textContent = questions.question[questionCounter];
  choices.innerHTML = `
  <button id="1" class="choice" onClick="selection(this.id)"><li>A. ${questions.choiceOne[questionCounter]}</li></button>
  <button id="2" class="choice" onClick="selection(this.id)"><li>B. ${questions.choiceTwo[questionCounter]}</li></button>
  <button id="3" class="choice" onClick="selection(this.id)"><li>C. ${questions.choiceThree[questionCounter]}</li></button>
  <button id="4" class="choice" onClick="selection(this.id)"><li>D. ${questions.choiceFour[questionCounter]}</li></button>
  `;
}

// User answer
function selection(btnOption) {
  btnOption = parseInt(btnOption);
  if (btnOption === questions.answer[questionCounter]) {
    questionCounter += 1;
    correctAnswers += 1;
  } else {
    questionCounter += 1;
  }
  if (questionCounter < questions.howManyQuestions) {
    renderQuestion();
  } else {
    done();
  }
}

// Display pass or fail
function done() {
  container.remove();
  msg.textContent = messages.thankYouText;
  correctCount.textContent = messages.correctText + correctAnswers;
  document.body.appendChild(msg);
  document.body.appendChild(correctCount);
  if (correctAnswers < questions.howManyToPass) {
    passed.textContent = messages.passedNoText;
    passed.setAttribute("style", "color: red");
    passed.setAttribute("class", "failed");
    // retry.setAttribute("onClick", "renderQuestion()");
    document.body.appendChild(passed);
    document.body.appendChild(retry);
  } else {
    passed.textContent = messages.passedYesText;
    document.body.appendChild(passed);
    passed.setAttribute("style", "color: green");
  }
}
