const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
  let token;
  if (req.header('Authorization')) {
    token = req.header('Authorization').split(' ')[1];
  }

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }

  try {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }
}

module.exports = {
  verifyToken
}