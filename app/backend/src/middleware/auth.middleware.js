const StatusCode = require('../types/status.code.types');
const authenticateToken = require('../utils/authenticate.token');

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(StatusCode.BAD_REQUEST).json({ message: 'Token Invalido' });
    }

    const userAuth = authenticateToken(authorization);

    if (!userAuth) {
      return res.status(StatusCode.BAD_REQUEST).json({ message: 'Token Inspirado ou Invalido' });
    }

    req.user = userAuth;
    next();
};

module.exports = authMiddleware;