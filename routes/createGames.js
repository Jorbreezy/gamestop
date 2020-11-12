var express = require('express');
var router = express.Router();

const {
 postGame
} = require('../controllers/games.controller');

router.get('/compose/new', (req, res) => {
  res.render('newGame');
});

router.post('/compose/new', postGame, (req, res) => {
  res.redirect('/games');
});


module.exports = router;