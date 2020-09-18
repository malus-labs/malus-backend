const Sequelize = require("sequelize");
const db = require("./../database/db");

const User_Store = db.define("users_stores", {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  store_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  is_owner: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },

  is_spender: {
    type: Sequelize.BOOLEAN,
        allowNull: false,
  },

}, {
  timestamps: false
});

User_Store.removeAttribute('id');

module.exports = User_Store;