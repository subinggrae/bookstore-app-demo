const express = require('express');
const router = express.Router();
const categoryValidator = require('../validators/categoryValidator');
const categoryController = require('../controllers/categoryController');

router.use(express.json());

router.post('/', categoryValidator.createCategoryValidation, categoryController.handleCreateCategory);

router.get('/', categoryController.handleGetAllCategories);

router.put('/:id', categoryValidator.updateCategoryValidation, categoryController.handleUpdateCategory);

router.delete('/:id', categoryValidator.deleteCategoryValidation, categoryController.handleDeleteCategory);

router.get('/test', (req, res) => {
  res.send('test');
})

router.get('/:id/books', (req, res) => {

});

module.exports = router;