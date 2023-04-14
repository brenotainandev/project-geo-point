const express = require('express');
const userController = require('../controllers/user.controller');
const verifyCredentials = require('../middleware/verify.credentials');
const verifyUser = require('../middleware/verify.user');

const registerRouter = express.Router();

registerRouter.post('/', verifyCredentials, verifyUser, userController.signUp);

module.exports = registerRouter;
