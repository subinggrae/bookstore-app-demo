const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.use(express.json());

router.post('/:userId/items', cartController.handleCreateItem);

router.get('/:userId', cartController.handleGetItems);

router.patch('/:userId/items/:itemId', (req, res) => {

});

router.delete('/:userId/items/:itemId', cartController.handleDeleteItem);

module.exports = router;