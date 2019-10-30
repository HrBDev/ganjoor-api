import * as express from 'express';
import { Category, Poet, Poem } from './entities';

export const router = express.Router();

router.get('/poets', (req, res, next) => {
  Poet.findAll()
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.get('/poets/:id', (req, res, next) => {
  Poet.findById(Number.parseInt(req.params.id))
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.get('/categories/:categoryId', (req, res, next) => {
  Category.findById(Number.parseInt(req.params.categoryId))
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.get('/categories/byPoet/:id', (req, res, next) => {
  Category.findByPoetId(Number.parseInt(req.params.id))
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.get('/poems/:id', (req, res, next) => {
  Poem.findById(Number.parseInt(req.params.id))
    .then(result => res.json(result))
    .catch(err => next(err));
});

router.get('/poems/byCategory/:id', (req, res, next) => {
  Poem.findAllByCategoryId(Number.parseInt(req.params.id))
    .then(result => res.json(result))
    .catch(err => next(err));
});
