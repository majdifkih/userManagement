// config/database.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Log des variables d'environnement pour vérifier
console.log("Database config:", process.env.DB_NAME, process.env.DB_USER, process.env.DB_HOST, process.env.DB_DIALECT);

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql', 
  }
);

module.exports = sequelize;
