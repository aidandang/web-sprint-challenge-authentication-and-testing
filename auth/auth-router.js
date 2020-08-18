const authController = require('../controllers/authController');
const validationController = require('../controllers/validationController');
const router = require('express').Router();

// implement registration
router.post('/register', validationController.validateUserRegister, authController.register);

// implement login
router.post('/login', authController.login);

module.exports = router;
