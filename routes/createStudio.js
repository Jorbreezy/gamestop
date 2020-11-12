var express = require('express');
var router = express.Router();

const {
 postStudio
} = require('../controllers/studios.controller');

router.get('/compose/new', (req, res) => {
  res.render('newStudio');
});

router.post('/compose/new', postStudio, (req, res) => {
  res.redirect('/studios');
});


module.exports = router;