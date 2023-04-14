const StatusCode = require('../types/status.code.types');

const usersService = require('../services/users.service');

const verifyUser = async (req, res, next) => {
    const { email } = req.body;
    const user = await usersService.findByEmail(email);

    if (user) return res.status(StatusCode.CONFLIC_ERROR).json({ message: 'Usuário já existe' });
  
    next();
};

module.exports = verifyUser;