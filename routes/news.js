const express = require('express');
const router = express.Router();

const {
  getNews
} = require('../controllers/news.controller');

router.get('/news', getNews, (req, res) => {
  res.render('news', { news: res.locals.news });
});

module.exports = router;
