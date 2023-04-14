const md5 = require('md5');
const usersService = require('../services/users.service');
const StatusCode = require('../types/status.code.types');
const createToken = require('../utils/create.token');

const userController = {
  signUp: async (req, res) => {
    try {
      const { displayName, email, password } = req.body;
      const cryptoPassword = md5(password);

      const { id } = await usersService.create({ displayName, email, cryptoPassword });

      const token = createToken({ email, id, displayName });

      res.status(StatusCode.CREATE).json({ displayName, email, id, token });
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.body;

      const user = await usersService.getById(id);

      return res.status(StatusCode.OK).json(user);
    } catch (error) {
      res.status(StatusCode.SERVER_ERROR).json({ message: error });
    }
  },
};

module.exports = userController;
