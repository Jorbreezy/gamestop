const fetch = require('node-fetch');

exports.getNews = async (req, res, next) => {
  const source = `https://www.gamespot.com/api/games/?api_key=${process.env.GAMESPOTAPIKEY}&format=json`

  try {
    const response = await fetch(source);
    const results = await response.json();

    res.locals.news = results.results;

    next();
  } catch (err) {
    next(err);
  }
};