var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
var authorController = require('../controllers/author_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'portal Quiz' });
});

router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);
router.get('/author',authorController.show);

module.exports = router;
