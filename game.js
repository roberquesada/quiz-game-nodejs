var Question = function () {
  this.id = 0;
  this.allQuestions = [];
}

Question.prototype.add = function(question, answer, points) {
  this.allQuestions.push({
    'id': ++this.id,
    'question': question,
    'answer': answer,
    'point': points
  });
}

var Quiz = function (questions) {
  this.currentQuestion = 1;
  this.questions = questions;
  this.totalPoints = 0;
}

Quiz.prototype.filterById = function(currentQuestion) {

  var result = this.questions.filter(function(obj){
    if ('id' in obj && typeof(obj.id) === 'number' && obj.id === currentQuestion) {
      return true;
    } else {
      return false;
    }
  });

  return result;
}

Quiz.prototype.getQuestion = function() {
  return this.filterById(this.currentQuestion)[0];
}

Quiz.prototype.next = function() {
  ++this.currentQuestion;
}


var questions = new Question();
questions.add('¿En que año estamos?', '2015', 5);
questions.add('¿Como llaman a Raul en casa?', 'pompe', 5);
questions.add('¿De que color es el caballo blanco de Santiago?', 'blanco', 5);

var quiz = new Quiz(questions.allQuestions);
var currentQuestion = quiz.getQuestion();

console.log('###############################');
console.log('#-- WELCOME TO QUIZ GAME --#');
console.log('###############################\n');
console.log('---------------------------------');
console.log('Question N.' + currentQuestion.id + '/ Points: ' + currentQuestion.points)
console.log(currentQuestion.question)
console.log('---------------------------------');

// Prompt
process.stdin.on('data', function (data) {
  var input = String(data).trim().toLowerCase();

  if (input == currentQuestion.answer) {
    quiz.next();
    currentQuestion = quiz.getQuestion();
    if (currentQuestion == undefined) {
      console.log('\n\nEnhorabuena!!! Has contestado todas las preguntas\n\n');
      process.exit();
    }
  } else {
    console.log('\nRespuesta incorrecta\n');
  }
  console.log('---------------------------------');
  console.log('Pregunta ' + currentQuestion.id);
  console.log(currentQuestion.question);
  console.log('---------------------------------');


});

