const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { verifyToken } = require('../middlewares/jwtMiddleware');

router.use(express.json());
router.use(verifyToken);

router.post('/', orderController.handleCreateOrder);

router.get('/:id', orderController.handleGetOrder);

router.delete('/:id', (req, res) => {

});

module.exports = router;