
const User = require('../models/User');
const crypto = require('crypto');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const login = async (req, res) => {
  const { email, password } = req.body;
  let user;

  try {
    user = await User.findUserByEmail(email);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }

  const salt = user.salt;
  console.log(user);
  const key = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512');
  const hashedPassword = key.toString('base64');

  console.log(hashedPassword);

  if (hashedPassword !== user.password) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }

  const token = jwt.sign({
    email: email,
    username: user.username
  }, process.env.PRIVATE_KEY, {
    expiresIn: '5m',
    issuer: 'subin'
  });

  res.setHeader('Authorization', `Bearer ${token}`);
  res.status(StatusCodes.OK).json(user);
}

module.exports = {
  login
}