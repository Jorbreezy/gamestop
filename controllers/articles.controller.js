const fetch = require('node-fetch');

const sources = {
  'gamespot':`https://www.gamespot.com/api/games/?api_key=${process.env.GAMESPOTAPIKEY}&format=json`,
}

exports.getArticlesBySource = async (req, res, next) => {
  const { source } = req.params;

  try {
    const response = await fetch(sources[source]);
    const results = await response.json();

    res.locals.articles = results.results;

    next();
  } catch (err) {
    next(err);
  }
};

exports.getArticleFromSource = async (req, res, next) => {
  const { id, source } = req.params;

  try {
    const response = await fetch(sources[source]);
    const results = await response.json();

    res.locals.article = results.results[id];

  } catch (err) {
    next(err);
  }
};