const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const verifyAccount = require('../middleware/verify.account');

const loginRoute = express.Router();

loginRoute.post('/', verifyAccount);
loginRoute.get('/', authMiddleware, userController.getUser);

module.exports = loginRoute;