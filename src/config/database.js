const { Sequelize } = require('sequelize');
const { dbconfig } = require('./config');

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  {
    dialect: 'postgres',
    port: dbconfig.port,
  },
  dbconfig.define
);

module.exports = sequelize;