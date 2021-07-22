let qNum = document.getElementById("q-num");
let question = document.getElementById("question");
let container = document.getElementById("container");
let choices = document.getElementById("choices");
let question1 = {
  question: "What is the largest animal ever lived?",
  answer: "1",
  choiceOne: "Blue Whale",
  choiceTwo: "Giraffe",
  choiceThree: "Titanosaurs",
  choiceFour: "Megaladon",
};

function questionOne() {
  qNum.textContent = "Question 1";
  question.textContent = question1.question;
  choices.innerHTML = `
  <button class="choice one"><li>A. ${question1.choiceOne}</li></button>
  <button class="choice two"><li>B. ${question1.choiceTwo}</li></button>
  <button class="choice three"><li>C. ${question1.choiceThree}</li></button>
  <button class="choice four"><li>D. ${question1.choiceFour}</li></button>
  `;
}

questionOne();
