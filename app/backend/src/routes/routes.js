const express = require('express');
const loginRoute = require('./login.route');
const registerRoute = require('./register.route');

const routes = express.Router({ mergeParams: true });

routes.use('/login', loginRoute);
routes.use('/register', registerRoute);

module.exports = routes;