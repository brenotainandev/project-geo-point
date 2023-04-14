const { User } = require('../database/models');
const StatusCode = require('../types/status.code.types');
const errorGenerate = require('../utils/error.generate');

const usersService = {
  create: async ({ displayName, email, cryptoPassword }) => {
    const user = await User.create({
      displayName,
      email,
      password: cryptoPassword,
    });
    return user;
  },

  findByEmail: async (email) => {
    const user = await User.findOne({ where: { email } });

    return user;
  },

  getById: async (id) => {
    const user = await User.findByPk(id, {
      attributes: ['id', 'displayName', 'email'],
    });

    if (user === null) throw errorGenerate('Usuário não Cadastrado', StatusCode.NOT_FOUND);
    return user;
  },
};

module.exports = usersService;
