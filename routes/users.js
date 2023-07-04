const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/register', userController.register);

router.post('/register', userController.create);

router.get('/login', userController.login);

router.get('/list', userController.list);

router.get('/search', userController.search);

router.get('/edit/:idUser', userController.edit);

router.put('/edit/:idUser', userController.edit);

router.delete('/delete/:idUser', userController.delete);

module.exports = router;