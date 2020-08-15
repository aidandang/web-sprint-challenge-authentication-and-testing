const authController = require('../controllers/authController');
const router = require('express').Router();

// implement registration
router.post('/register', authController.register);

// implement login
router.post('/login', authController.login);

module.exports = router;
