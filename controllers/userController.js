const User = require('../models/User');
const crypto = require('crypto');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  const { email, username, password } = req.body;

  const salt = crypto.randomBytes(64).toString('base64');
  const key = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512');
  const hashedPassword = key.toString('base64');

  try {
    const newUser = await User.createUser(username, email, hashedPassword, salt);
    res.status(StatusCodes.CREATED).json(newUser);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
}

module.exports = {
  register
}