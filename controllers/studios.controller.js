const db = require('../db/knex');

exports.postStudio = async (req, res, next) => {
  const { name } = req.body;

  try {
    await db('studios')
      .insert({ name });

    return next();
  } catch (err) {
    return next(err);
  }
};

exports.getStudios = async (req, res, next) => {
  try {
    const studioQuery = db
      .select('*')
      .from('studios');

    res.locals.studios = await studioQuery;

    return next();
  } catch (err) {
    return next(err);
  }
};

exports.getStudioById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const studioQuery = await db
      .select('*')
      .from('studios')
      .where('id', id)
      .first();

    res.locals.studio = studioQuery;

    return next();
  } catch (err) {
    return next(err);
  }
};

exports.updateStudio = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    await db('studios')
      .update({ name })
      .where('id', id);

    return next();
  } catch (err) {
    return next(err);
  }
};

exports.deleteStudio = async (req, res, next) => {
  const { id } = req.params;

  try {
    await db('studios')
      .del()
      .where('id', id);

    return next();
  } catch (err) {
    return next(err);
  }
};