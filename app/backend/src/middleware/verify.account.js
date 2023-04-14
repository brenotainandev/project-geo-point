const md5 = require('md5');
const createToken = require('../utils/create.token');
const usersService = require('../services/users.service');
const StatusCode = require('../types/status.code.types');
require('dotenv/config');

const verifyAccount = async (req, res) => {
  const { email, password } = req.body;

  const user = await usersService.findByEmail(email);

  if (!user) {
    return res.status(StatusCode.NOT_FOUND).json({ message: 'Usuário não Cadastrado' });
  }

  const crypted = md5(password);

  console.log(crypted);

  if (crypted !== user.password) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: 'Senha Incorreta' });
  }

  const { id, name } = user;

  const token = createToken({ email, id, name });

  res.status(StatusCode.OK).json({ token, name, id, email });
};

module.exports = verifyAccount;
