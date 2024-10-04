const express = require('express');
const router = express.Router();
const categoryValidator = require('../validators/categoryValidator');
const categoryController = require('../controllers/categoryController');

router.use(express.json());

router.post('/', categoryValidator.createCategoryValidation, categoryController.handleCreateCategory);

router.get('/', categoryController.handleGetAllCategories);

router.put('/:id', categoryValidator.updateCategoryValidation, categoryController.handleUpdateCategory);

router.delete('/:id', categoryValidator.deleteCategoryValidation, categoryController.handleDeleteCategory);

router.get('/:id/books', categoryController.handleGetBooksByCategory);

module.exports = router;