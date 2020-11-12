var express = require('express');
var router = express.Router();

const {
  getGames,
  postGame,
  getGameById,
  updateGame,
  deleteGame
} = require('../controllers/games.controller');

router.get('/games', getGames, (req, res) => {
  res.render('games', { title: 'Games', games: res.locals.games });
});

router.get('/games/:id', getGameById, (req, res) => {
  res.render('details', { game: res.locals.game });
});

router.get('/games/new', (req, res) => {
  res.render('newGame');
});

router.post('/games/new', postGame, (req, res) => {
  res.redirect('/games');
});

router.post('/games/:id/edit', updateGame, (req, res) => {
  res.status(200).send('Update Successfully');
});

router.post('/games/:id/delete', deleteGame, (req, res) => {
  res.redirect('/games');
}); 

module.exports = router;