'use strict'

const express = require('express');
const database = require('./config/database');
const route = require('./routes');
const config = require('./config/config')

const app = express();

const configureExpress = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.config = config;
  app.use('/api/v1', route);
  app.use((req, res, next) => {
    const err = new Error('Route Not Found');
    err.status = 404;
    next(err);
  });
  app.use((err, req, res) => {
    res.status(err.status || 500).json({ message: err.message });
  });

  return app;
};

module.exports = database.authenticate().then(configureExpress);