const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
const PessoasController = require('../controllers/pessoas-controller');

router.get('/api/onlyMembros', login.opcional, PessoasController.getOnlyMembros);
router.get('/api/onlyCongregados', login.opcional, PessoasController.getOnlyCongregados);
router.get('/api/getOnlyObreiros', login.opcional, PessoasController.getOnlyObreiros);
router.get('/api/getOnlyAniv', login.opcional, PessoasController.getOnlyAniv);
router.get('/api/getOnlyDisciplinados', login.opcional, PessoasController.getOnlyDisciplinados);
router.get('/api/getOnlyAfastados', login.opcional, PessoasController.getOnlyAfastados);

router.get('/api/getPessoasIgreja/:igreja', login.opcional, PessoasController.getPessoasIgreja);

router.get('/api/:id_pessoa', login.opcional, PessoasController.getPessoa);
router.post('/api', login.opcional, PessoasController.insertPessoa);
router.put('/api', login.opcional, PessoasController.updatePessoa);
router.delete('/api/:id_pessoa', PessoasController.deletePessoa);

module.exports = router;