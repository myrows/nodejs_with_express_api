var express = require('express');
var router = express.Router();

const UserController = require('../controllers/users')


router.post('/login', UserController.login);
router.post('/register', UserController.register);

module.exports = router;
