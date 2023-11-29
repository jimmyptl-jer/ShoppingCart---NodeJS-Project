const { Sequelize } = require('sequelize');

// Replace the following with your actual database configuration
const sequelize = new Sequelize('node_server', 'root', 'Jimmyptl@4699', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  sequelize,
};
