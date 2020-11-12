var express = require('express');
var router = express.Router();

const {
  getGames,
  postGame,
  getGameById
} = require('../controllers/games.controller');

const {
  getStudios
} = require('../controllers/studios.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/games', getGames, (req, res) => {
  res.render('games', { title: 'Games', games: res.locals.games });
});

router.get('/games/:id', getGameById, (req, res) => {
  res.render('details', { game: res.locals.game });
});

router.get('/studios', getStudios, (req, res) => {
  res.render('studios', { title: 'Studios', studios: res.locals.studios });
});

router.get('/post', (req, res) => {
  res.render('post');
});

router.post('/post', postGame, (req, res) => {
  res.redirect('/');
});

module.exports = router;
