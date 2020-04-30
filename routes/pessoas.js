const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
const PessoasController = require('../controllers/pessoas-controller');

router.get('/api/onlyMembros', login.opcional, PessoasController.getOnlyMembros);
router.get('/api/allMembros', login.opcional, PessoasController.getAllMembros);
router.get('/api/onlyCongregados', login.opcional, PessoasController.getOnlyCongregados);
router.get('/api/onlyObreiros', login.opcional, PessoasController.getOnlyObreiros);
router.get('/api/onlyAniv', login.opcional, PessoasController.getOnlyAniv);
router.get('/api/onlyDisciplinados', login.opcional, PessoasController.getOnlyDisciplinados);
router.get('/api/onlyAfastados', login.opcional, PessoasController.getOnlyAfastados);
router.get('/api/memberCong', login.opcional, PessoasController.getMemberCong);

router.get('/api/getPessoasIgreja/:igreja', login.opcional, PessoasController.getPessoasIgreja);

router.get('/api/:id_pessoa', login.opcional, PessoasController.getPessoa);
router.post('/api', login.opcional, PessoasController.insertPessoa);
router.put('/api', login.opcional, PessoasController.updatePessoa);
router.delete('/api/:id_pessoa', PessoasController.deletePessoa);

router.post('/api/alterToObreiro', login.opcional, PessoasController.alterToObreiro);
router.post('/api/alterToAfastado', login.opcional, PessoasController.alterToAfastado);
router.post('/api/alterToDisciplinado', login.opcional, PessoasController.alterToDisciplinado);

module.exports = router;