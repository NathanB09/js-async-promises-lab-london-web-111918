const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let randQ = questions[Math.floor(Math.random() * questions.length)];
let question;

function appendQuestion(question) {
  const qContainer = document.querySelector(".question-container");
  qContainer.innerHTML = question.questionText;
}

function askQuestionThen() {
  return new Promise((resolve) => resolve(question = randQ));
}

function removeQuestion() {
  const qContainer = document.querySelector(".question-container");
  qContainer.innerHTML = '';
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion(questions[0]);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(removeQuestion());
    }, time)
  })
}

function trueAndFalseButtons() {
  return document.querySelectorAll(".btn.center-align");
}

function toggleTrueAndFalseButtons() {
  let buttons = document.querySelectorAll(".btn.center-align");
  buttons.forEach((btn) => {
    // if (btn.classList.contains('hide')) {
    //   btn.classList.remove('hide');
    // } else {
    //   btn.classList.add('hide');
    // }
    btn.classList.toggle('hide')
  })
}

function both() {
  toggleTrueAndFalseButtons();
  askQuestionThenRemoveQuestion(5000);
}

function displayQuestionOnClick() {
  let askBtn = document.querySelector('a.btn');
  askBtn.addEventListener('click', both);
}
