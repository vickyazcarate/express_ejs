const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/', productController.mostrarTodos);

router.get('/:id', productController.mostrarPorId);

router.get('/crear', productController.crear);

router.get('/guardar', productController.guardar);

router.post('/guardar', productController.store);

module.exports = router;