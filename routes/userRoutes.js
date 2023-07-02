const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/register', userController.register);

router.get('/login', userController.login);

router.get('/list', userController.list);

module.exports = router;