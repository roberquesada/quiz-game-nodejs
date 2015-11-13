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

Quiz.prototype.initialPrint = function() {
  console.log('\n############################');
  console.log('#-- WELCOME TO QUIZ GAME --#');
  console.log('############################\n');
  this.questionPrint(this.getQuestion);
}

Quiz.prototype.questionPrint = function() {
  var currentQuestion = this.getQuestion();
  console.log('---------------------------------');
  console.log('Question N.' + 
              currentQuestion.id + 
              ' / Q. points: ' + 
              currentQuestion.point + 
              ' / Score: ' + 
              this.totalPoints)
  console.log(currentQuestion.question);
  console.log('---------------------------------');
}

module.exports = Quiz;