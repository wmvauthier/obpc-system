const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
const IgrejasController = require('../controllers/igrejas-controller');

router.get('/', login.opcional, IgrejasController.getIgrejas);
router.get('/:id_igreja', login.opcional, IgrejasController.getIgreja);
router.post('/', login.obrigatorio, IgrejasController.insertIgreja);
router.patch('/', login.obrigatorio, IgrejasController.updateIgreja);
router.delete('/:id_igreja', IgrejasController.deleteIgreja);

module.exports = router;