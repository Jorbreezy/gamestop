const express = require('express');
const csurfProtection = require('csurf')({ cookie: true });
const router = express.Router();

const {
  getStudios, postStudio, updateStudio, deleteStudio
} = require('../controllers/studios.controller');

router.get('/studios', getStudios, (req, res) => {
  res.render('studios', { title: 'Studios', studios: res.locals.studios });
});

router.get('/studios/new', csurfProtection, (req, res) => {
  res.render('newStudio', { csurfToken: req.csurfToken() });
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