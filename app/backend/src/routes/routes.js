const express = require('express');
const loginRoute = require('./login.route');

const routes = express.Router({ mergeParams: true });

routes.use('/login', loginRoute);

module.exports = routes;