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

module.exports = Question;