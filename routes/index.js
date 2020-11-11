var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gamestop' });
});

router.get('/games', (req, res) => {
  res.render('games', { title: 'Games' });
});

module.exports = router;
