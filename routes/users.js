const express = require('express');
const router = express.Router();
const userValidator = require('../validators/userValidator');
const userController = require('../controllers/userController');

router.use(express.json());

router.post('/', userValidator.registerValidation, userController.handleCreateUser);

router.delete('/', (req, res) => {
  
});

module.exports = router;