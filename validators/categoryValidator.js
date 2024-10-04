const { body, param } = require('express-validator');
const { validateRequest } = require('./validateRequest');

const createCategoryValidation = [
  body('name')
    .notEmpty()  
    .withMessage('카테고리를 입력해주세요.')  
    .isString()
    .trim()
    .isLength({ max: 10 })
    .withMessage('카테고리를 10자 미만으로 입력해주세요.'),
  validateRequest
]

const deleteCategoryValidation = [
  param('id')
    .isInt()
    .toInt()
    .withMessage('카테고리 아이디로 숫자를 입력해주세요.'),
  validateRequest
]

const updateCategoryValidation = [
  param('id')
    .isInt()
    .toInt()
    .withMessage('카테고리 아이디로 숫자를 입력해주세요.'),
  body('name')
    .notEmpty()  
    .withMessage('카테고리를 입력해주세요.')  
    .isString()
    .trim()
    .isLength({ max: 10 })
    .withMessage('카테고리를 10자 미만으로 입력해주세요.'),
  validateRequest
]

module.exports = {
  createCategoryValidation,
  deleteCategoryValidation,
  updateCategoryValidation
}