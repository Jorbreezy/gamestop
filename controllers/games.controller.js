import db from '../db/db';

export const createGame = async (req, res, next) => {
  const {
    title, maker, type, price,
  } = req.body;

  try {
    await db('games')
      .insert({
        maker, price, title, type,
      });

    return next();
  } catch (err) {
    return next(err);
  }
};

export const getGameById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const gameQuery = await db
      .select('games.*', 'makers.name AS maker', 'types.name AS type')
      .from('games')
      .leftJoin('makers', 'games.maker', 'makers.id')
      .leftJoin('types', 'games.type', 'types.id')
      .where('games.id', id)
      .first();

    if (gameQuery === undefined) {
      const error = new Error('Game Not Found');
      error.code = 'NOT_FOUND';
      throw error;
    }

    res.locals.game = gameQuery;

    return next();
  } catch (err) {
    return next(err);
  }
};

export const getGames = async (req, res, next) => {
  const { title, maker, type } = req.query;

  try {
    const games = db
      .select('games.*', 'makers.name AS maker', 'types.name AS type')
      .from('games')
      .leftJoin('makers', 'games.maker', 'makers.id')
      .leftJoin('types', 'games.type', 'types.id');

    if (title) {
      games.where('games.title', 'ilike', `%${title}%`);
    }

    if (maker) {
      games.where('makers.name', 'ilike', `%${maker}%`);
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

export const updateGame = async (req, res, next) => {
  const { id } = req.params;
  const {
    title, maker, type, price,
  } = req.body;

  try {
    await db('games')
      .update({
        title, maker, type, price,
      })
      .where('id', id);

    return next();
  } catch (err) {
    return next(err);
  }
};

export const deleteGame = async (req, res, next) => {
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
