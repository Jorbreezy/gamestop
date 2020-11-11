var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/games', (req, res) => {
  res.render('games', { title: 'Games' });
});

router.get('/studios', (req, res) => {
  res.render('studios', { title: 'Studios' });
});

router.get('/post', (req, res) => {
  res.render('post');
});

module.exports = router;
