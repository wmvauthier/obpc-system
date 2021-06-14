const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
const MusicController = require('../controllers/music-controller');

router.get('/getAllMusics', login.opcional, MusicController.getAllMusics);

module.exports = router;