const Sequelize = require("sequelize");
const db = require("./../database/db");

const Store = db.define("stores", {
  store_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },

  wallet_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  available_funds: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  stake: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  stake_expiration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  collateral: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  collateral_relief: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  collateral_acceptance_rate: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  ens_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  store_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  website: {
    type: Sequelize.STRING,
    allowNull: false,
  },

}, {
    timestamps: false
});

module.exports = Store;