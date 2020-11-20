const express = require('express');
const router = express.Router();

const {
  getArticlesBySource
} = require('../controllers/articles.controller');

router.get('/articles/:source', getArticlesBySource, (req, res) => {
  res.render('articles', { articles: res.locals.articles });
});

//router.get('/articles/:source/:id', (req, res) => {
//  res.render('article', { article: res.locals.article });
//});

module.exports = router;