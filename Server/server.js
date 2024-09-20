// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./Routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Utiliser les routes
app.use('/users', userRoutes);

// Synchroniser la base de données et démarrer le serveur
sequelize.sync().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
