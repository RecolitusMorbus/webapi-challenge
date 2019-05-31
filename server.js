const express = require('express');
const morgan = require('morgan');

const server = express();
const router = require('./router/projectRouter.js');

/* MIDDLEWARE */

/* ROUTER */

/* SANITY CHECK */
server.get('/', (req, res) => {
  res.send(`Get a dog little longy! –Ronald Reagan`);
});

/* CUSTOM MIDDLEWARE */

module.exports = server;