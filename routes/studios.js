const express = require('express');
const csurf = require('csurf');

const router = express.Router();
const csurfProtection = csurf({ cookie: true });
const {
  getStudios,
  postStudio,
  updateStudio,
  deleteStudio
} = require('../controllers/studios.controller');

router.get('/studios', csurfProtection, getStudios, (req, res) => {
  const studioTemplateData = {
    title: 'Studios', 
    studios: res.locals.studios,
    csurfToken: req.csrfToken()
  };

  res.render('studios', studioTemplateData);
});

router.get('/studios/new', csurfProtection, (req, res) => {
  res.render('newStudio', { csurfToken: req.csrfToken() });
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