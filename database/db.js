const Sequelize = require('sequelize');
const db = new Sequelize('malus', 'root', '', {host: 'localhost', dialect: 'mysql'});

module.exports = db;