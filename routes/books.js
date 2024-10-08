const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.use(express.json());

router.post('/', (req, res) => {

});

router.get('/', bookController.handleGetAllBooks);

router.get('/:id', bookController.handleGetBook);

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.get('/:id/reviews', bookController.handleGetReview);

module.exports = router;