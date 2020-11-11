var express = require('express');
var router = express.Router();

const {
  getGames,
  postGame,
} = require('../controllers/games.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/games', getGames, (req, res) => {
  res.render('games', { title: 'Games', games: res.locals.games });
});

router.get('/studios', (req, res) => {
  res.render('studios', { title: 'Studios' });
});

router.get('/post', (req, res) => {
  res.render('post');
});

module.exports = router;
