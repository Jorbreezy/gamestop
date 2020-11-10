const express = require('express');

const router = express.Router();

const {
  createMaker,
  getMakers,
  getMakerById,
  updateMaker,
  deleteMaker
} = require('../controllers/maker.controller');

// CREATE
router.post('/makers', createMaker, (req, res) => res.status(201).send('Created Successfully'));

// READ
router.get('/makers', getMakers, (req, res) => res.status(200).json(res.locals.makers));

router.get('/makers/:id', getMakerById, (req, res) => res.status(200).json(res.locals.maker));

// UPDATE
router.patch('/makers/:id', updateMaker, (req, res) => res.status(200).send('Update Successful'));

// DELETE
router.delete('/makers/:id', deleteMaker, (req, res) => res.status(204).send('Delete Successful'));

export default router;
