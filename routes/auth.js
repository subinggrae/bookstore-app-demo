const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authValidator = require('../validators/authValidator');

router.use(express.json());

router.post('/login', authValidator.loginValidator, authController.login);

router.delete('/logout', (req, res) => {

});

router.post('/forgot-password', (req, res) => {

});

router.post('/reset-password', (req, res) => {

});

module.exports = router;