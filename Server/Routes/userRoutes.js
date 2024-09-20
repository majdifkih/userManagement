// routes/userRoutes.js
const express = require('express');
const userController = require('../Controller/user');

const router = express.Router();

// Routes CRUD pour les utilisateurs
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
