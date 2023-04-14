const StatusCode = require('../types/status.code.types');

const verifyCredentials = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email) {
    return res.status(StatusCode.BAD_REQUEST).json({ message: 'Preencha todos campos' });
  }

  if (name.length < 8) { 
    return res.status(StatusCode.BAD_REQUEST).json({ message: 'Nome com menos de 8 carcteres' });
  }

  if (password.length < 6) {
    return res.status(StatusCode.BAD_REQUEST)
      .json({ message: 'A senha deve ter pelo menos 6 caracteres' });
  }

  const emailRegex = /\S+@+\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(StatusCode.BAD_REQUEST).json({
      message: 'Formato de email invalido',
    });
  }

  next();
};

module.exports = verifyCredentials;
