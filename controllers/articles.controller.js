const fetch = require('node-fetch');

exports.getArticles = async (req, res, next) => {
  const source = `https://www.gamespot.com/api/articles/?api_key=${process.env.GAMESPOTAPIKEY}&format=json`;

  try {
    const response = await fetch(source);
    const articles = await response.json();

    res.locals.articles = articles.results;

    next();
  } catch (err) {
    next(err);
  }
};