const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { verifyToken } = require('../middlewares/jwtMiddleware');

router.use(express.json());
router.use(verifyToken);

router.post('/items', cartController.handleCreateItem);

router.get('/', cartController.handleGetItems);

router.patch('/items/:itemId', (req, res) => {

});

router.delete('/items/:itemId', cartController.handleDeleteItem);

module.exports = router;