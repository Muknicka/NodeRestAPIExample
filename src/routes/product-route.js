'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');

//teste basico de conexao
// router.get('/', (req, res, next) => {
//     res.status(200).send({
//         title: "Node Store API",
//         version: "0.0.1"
//     });
// });

router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);

router.post('/', authService.isAdmin, controller.post);
router.put('/:id', authService.isAdmin, controller.put);
router.delete('/', authService.isAdmin, controller.delete);

module.exports = router;