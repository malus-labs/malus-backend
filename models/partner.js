const Sequelize = require("sequelize");
const db = require("./../database/db");

const Partner = db.define("partners", {
  store_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  partner_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

}, {
  timestamps: false
});

Partner.removeAttribute('id');

module.exports = Partner;