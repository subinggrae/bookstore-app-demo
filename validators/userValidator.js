const { body } = require('express-validator');
const { validateRequest } = require('./validateRequest');

const validateConfirmPassword = (confirmPassword, { req }) => {
  const password = req.body.password;

  if (password !== confirmPassword) {
    throw new Error('패스워드가 일치하지 않습니다.');
  }

  return true;
}

const registerValidator = [
  body('email')
    .isEmail()
    .withMessage('이메일 형식을 입력해주세요.'),
  body('username')
    .isLength({ min: 3, max: 20 })
    .withMessage('사용자 이름은 3에서 20자 범위 내에서 입력해주세요.')
    .matches(/^[가-힣a-zA-Z0-9]+$/)
    .withMessage('사용자 이름은 한글, 영문 대소문자, 숫자만 입력해주세요.'),
  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('비밀번호는 8에서 16자 범위 내에서 입력해주세요.')
    .matches(/^[A-Za-z\d!@#$%^&*]+$/)
    .withMessage('비밀번호는 영문 대/소문자, 숫자, 특수문자만 입력해주세요.'),
  body('confirmPassword')
    .custom(validateConfirmPassword),
  validateRequest
]

module.exports = {
  registerValidator
}