import db from '../db/db';

export const createMaker = async (req, res, next) => {
  const { name } = req.body;

  try {
    await db('makers')
      .insert({ name });

    return next();
  } catch (err) {
    return next(err);
  }
};

export const getMakers = async (req, res, next) => {
  try {
    const makerQuery = db
      .select('*')
      .from('makers');

    res.locals.makers = await makerQuery;

    return next();
  } catch (err) {
    return next(err);
  }
};

export const getMakerById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const makerQuery = await db
      .select('*')
      .from('makers')
      .where('id', id)
      .first();

    if (makerQuery === undefined) {
      const error = new Error('Maker Not Found');
      error.code = 'NOT_FOUND';
      throw error;
    }

    res.locals.maker = makerQuery;

    return next();
  } catch (err) {
    return next(err);
  }
};

export const updateMaker = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    await db('makers')
      .update({ name })
      .where('id', id);

    return next();
  } catch (err) {
    return next(err);
  }
};

export const deleteMaker = async (req, res, next) => {
  const { id } = req.params;

  try {
    await db('makers')
      .del()
      .where('id', id);

    return next();
  } catch (err) {
    return next(err);
  }
};
