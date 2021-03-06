const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
const IgrejasController = require('../controllers/igrejas-controller');

router.get('/', login.opcional, (req, res, next) => { res.render('igrejas.ejs'); });
router.get('/api', login.opcional, IgrejasController.getIgrejas);
router.get('/api/onlyIgrejas', login.opcional, IgrejasController.getOnlyIgrejas);
router.get('/api/onlyCongregations', login.opcional, IgrejasController.getOnlyCongregations);
router.get('/api/:id_igreja', login.opcional, IgrejasController.getIgreja);
router.post('/api', login.opcional, IgrejasController.insertIgreja);
router.put('/api', login.opcional, IgrejasController.updateIgreja);
router.delete('/api/:id_igreja', IgrejasController.deleteIgreja);

module.exports = router;