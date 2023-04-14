const md5 = require('md5');
const usersService = require('../services/users.service');
const StatusCode = require('../types/status.code.types');
const createToken = require('../utils/create.token');

const userController = {
  signUp: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const cryptoPassword = md5(password);

      const { id } = await usersService.create({ name, email, cryptoPassword });

      const token = createToken({ email, id, name });

      res.status(StatusCode.CREATE).json({ name, email, id, token });
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

  getUser: async (req, res) => {
    const { name, email, id } = req.user;

    res.status(StatusCode.CREATE).json({ name, email, id });
  },
};

module.exports = userController;
