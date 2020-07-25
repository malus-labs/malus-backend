const Sequelize = require("sequelize");
const db = require("./../database/db");

const User = db.define("users", {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },

  wallet_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;