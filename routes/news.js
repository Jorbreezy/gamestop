const express = require('express');
const router = express.Router();

const {
  getArticles
} = require('../controllers/articles.controller');

router.get('/news', getArticles, (req, res) => {
  res.render('news', { articles: res.locals.articles });
});

module.exports = router;
