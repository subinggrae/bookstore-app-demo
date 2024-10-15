const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.use(express.json());

router.post('/', orderController.handleCreateOrder);

router.get('/:id', orderController.handleGetOrder);

router.delete('/:id', (req, res) => {

});

module.exports = router;