const express = require('express');
const router = express.Router();

router.use(express.json());

router.post('/login', (req, res) => {

});

router.delete('/logout', (req, res) => {

});

router.post('/forgot-password', (req, res) => {

});

router.post('/reset-password', (req, res) => {

});

module.exports = router;