const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.use(express.json());

router.post('/', reviewController.handleCreateReview);

module.exports = router;