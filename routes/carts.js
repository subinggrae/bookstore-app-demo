const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/:userId/items', (req, res) => {

});

router.get('/:userId', (req, res) => {

});

router.patch('/:userId/items/:itemId', (req, res) => {

});

router.delete('/:userId/items/:itemId', (req, res) => {

});

module.exports = {
  router
}