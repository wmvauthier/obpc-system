const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
const UsuariosController = require('../controllers/usuarios-controller');

// router.post('/login', login.opcional, UsuariosController.login);

router.post('/register', UsuariosController.register);
router.post('/login', UsuariosController.login);

module.exports = router;