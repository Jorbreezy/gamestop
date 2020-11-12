var express = require('express');
var router = express.Router();

const {
  getStudios, getStudioById, postStudio, updateStudio, deleteStudio
} = require('../controllers/studios.controller');

router.get('/studios', getStudios, (req, res) => {
  res.render('studios', { title: 'Studios', studios: res.locals.studios });
});

router.get('/studios/:id', getStudioById, (req, res) => {
  res.render('details', { game: res.locals.studio });
});

router.get('/studios/new', (req, res) => {
  res.render('newStudio');
});

router.post('/studios/new', postStudio, (req, res) => {
  res.redirect('/studios');
});

router.post('/studios/:id/edit', updateStudio, (req, res) => {
  res.redirect('/studios');
});

router.post('/studios/:id/delete', deleteStudio, (req, res) => {
  res.redirect('/studios');
}); 

module.exports = router;