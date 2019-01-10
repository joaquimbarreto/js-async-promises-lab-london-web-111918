const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const appendQuestion = (question) => {
  document.querySelector('.question-container').innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise(resolve => {
    setTimeout(() => question, time)
  })
}

const removeQuestion = () => document.querySelector('.question-container').innerHTML = '';

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion);
  }

const trueAndFalseButtons = () => {
  return document.querySelector('.true-false-list').querySelectorAll('.btn');
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach((item) => item.classList.toggle('hide'));
}

function displayQuestionOnClick() {
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  });
}
