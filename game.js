var Quiz = require('./quiz.js');
var Question = require('./question.js');


var questions = new Question();
questions.add('¿En que año estamos?', '2015', 5);
questions.add('¿Como llaman a Raul en casa?', 'pompe', 5);
questions.add('¿De que color es el caballo blanco como la leche de Santiago?', 'blanco como la leche', 5);

var quiz = new Quiz(questions.allQuestions);
var currentQuestion = quiz.getQuestion();

quiz.initialPrint();


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

  quiz.questionPrint();
  

});

