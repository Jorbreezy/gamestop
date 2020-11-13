const express = require('express');
const csurfProtection = require('csurf')({ cookie: true });
const router = express.Router();

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

router.get('/games/new', csurfProtection, (req, res) => {
  res.render('newGame', { csrfToken: req.csrfToken() });
});

router.post('/games/new', postGame, (req, res) => {
  res.redirect('/games');
});

router.get('/games/:id', getGameById, (req, res) => {
  res.render('details', { game: res.locals.game });
});

router.post('/games/:id/edit', updateGame, (req, res) => {
  res.redirect('/games');
});

router.post('/games/:id/delete', deleteGame, (req, res) => {
  res.redirect('/games');
}); 

module.exports = router;