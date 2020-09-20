const Sequelize = require('sequelize');
const db = new Sequelize('malus', 'root', '', {host: 'localhost', dialect: 'mysql', define: { timestamps: false }});

module.exports = db;