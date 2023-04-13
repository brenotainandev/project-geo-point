const StatusCode = require('../types/status.code.types');

module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError':
      res.status(StatusCode.BAD_REQUEST).json({ message });
      break;
    case 'NotFoundError':
      res.status(StatusCode.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      res.status(StatusCode.CONFLIC_ERROR).json({ message });
      break;
    case 'UnauthorizedError':
      res.status(StatusCode.UNAUTHORIZED).json({ message });
      break;
    default:
      res.status(StatusCode.SERVER_ERROR).json({ message });
      break;
  }
};
