let qNum = document.getElementById("q-num");
let question = document.getElementById("question");
let container = document.getElementById("container");
let choices = document.getElementById("choices");
let questionCounter = 0;
let correctAnswers = 0;

let questions = {
  howManyQuestions: 3,
  howManyToPass: 2,
  questionNum: ["Question 1", "Question 2", "Question 3"],
  question: [
    "What was/is the largest animal ever lived?",
    "Who was the 40th U.S. Presodent?",
    "My Beautiful Dark Twisted Fantasy was an Hip-Hop album by which artist?",
  ],
  answer: [0, 3, 1],
  choiceOne: ["Blue Whale", "Georg W Bush Jr", "The Weekend"],
  choiceTwo: ["Giraffe", "Barack Obama", "Kanye West"],
  choiceThree: ["Titanosaurs", "Donald Trump", "The Dream"],
  choiceFour: ["Megaladon", "Ronald Reagen", "Taylor Swift"],
};

if (questionCounter < questions.howManyQuestions) {
  renderQuestion();
}

function renderQuestion() {
  qNum.textContent = questions.questionNum[questionCounter];
  question.textContent = questions.question[questionCounter];
  choices.innerHTML = `
  <button id="0" class="choice one" onClick="selection(this.id)"><li>A. ${questions.choiceOne[questionCounter]}</li></button>
  <button id="1" class="choice two" onClick="selection(this.id)"><li>B. ${questions.choiceTwo[questionCounter]}</li></button>
  <button id="2" class="choice three" onClick="selection(this.id)"><li>C. ${questions.choiceThree[questionCounter]}</li></button>
  <button id="3" class="choice four" onClick="selection(this.id)"><li>D. ${questions.choiceFour[questionCounter]}</li></button>
  `;
}

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

function done() {
  const msg = document.createElement("h4");
  const correctCount = document.createElement("h5");
  const passed = document.createElement("p");
  const msgText = document.createTextNode("Thank You For Participating!");
  const msgTextCorrect = document.createTextNode(
    `Correct Answers: ${correctAnswers}`
  );
  const passedYes = document.createTextNode("Passed");
  const passedNo = document.createTextNode("Failed");
  container.setAttribute("style", "display: none");
  msg.appendChild(msgText);
  correctCount.appendChild(msgTextCorrect);
  document.body.appendChild(msg);
  document.body.appendChild(correctCount);

  if (correctAnswers < questions.howManyToPass) {
    passed.appendChild(passedNo);
    passed.setAttribute("style", "color: red");
    document.body.appendChild(passed);
  } else {
    passed.appendChild(passedYes);
    document.body.appendChild(passed);
    passed.setAttribute("style", "color: green");
  }
}
