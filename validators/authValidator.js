const { body } = require('express-validator');
const { validateRequest } = require('./validateRequest');

const loginValidator = [
  body('email')
    .notEmpty()
    .withMessage('이메일을 입력해주세요.'),
  body('password')
    .notEmpty()
    .withMessage('비밀번호를 입력해주세요.'),
  validateRequest
];

module.exports = {
  loginValidator
}