const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
// const IgrejasController = require('../controllers/igrejas-controller');

router.get('/home', login.opcional, (req, res, next) => {
    res.render('home.ejs');
});

router.get('/login', login.opcional, (req, res, next) => {
    res.render('login.ejs');
});

module.exports = router;