const db = require('../db/knex');

exports.postGame = async (req, res, next) => {
  const {
    title, studio, type, price,
  } = req.body;

  try {
    await db('games')
      .insert({
        studio, price, title, type,
      });

    return next();
  } catch (err) {
    return next(err);
  }
};

exports.getGames = async (req, res, next) => {
  const { title, studio, type } = req.query;

  try {
    const games = db
      .select('games.*', 'studios.name AS studio', 'types.name AS type')
      .from('games')
      .leftJoin('studios', 'games.studio', 'studios.id')
      .leftJoin('types', 'games.type', 'types.id');

    if (title) {
      games.where('games.title', 'ilike', `%${title}%`);
    }

    if (studio) {
      games.where('studios.name', 'ilike', `%${studio}%`);
    }

    if (type) {
      games.where('types.name', 'ilike', `%${type}%`);
    }

    games.orderBy('games.id');

    res.locals.games = await games;

    return next();
  } catch (err) {
    return next(err);
  }
}; 

exports.getGameById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const gameQuery = await db
      .select('games.*', 'studios.name AS studio', 'types.name AS type')
      .from('games')
      .leftJoin('studios', 'games.studio', 'studios.id')
      .leftJoin('types', 'games.type', 'types.id')
      .where('games.id', id)
      .first();

    res.locals.game = gameQuery;

    return next();
  } catch (err) {
    return next(err);
  }
};

exports.updateGame = async (req, res, next) => {
  const { id } = req.params;
  const {
    title, studio, type, price,
  } = req.body;

  try {
    await db('games')
      .update({
        title, studio, type, price,
      })
      .where('id', id);

    return next();
  } catch (err) {
    return next(err);
  }
};

exports.deleteGame = async (req, res, next) => {
  const { id } = req.params;

  try {
    await db('games')
      .del()
      .where('id', id);

    return next();
  } catch (err) {
    return next(err);
  }
};