const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const authenticateToken = (token) => {
    try {
      const validateToken = jwt.verify(token, secret);
      return validateToken;
    } catch (error) {
      return false;
    }
  };

  module.exports = authenticateToken;