const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { verifyToken } = require('../middlewares/jwtMiddleware');

router.use(express.json());
router.use(verifyToken);

router.post('/', reviewController.handleCreateReview);

module.exports = router;