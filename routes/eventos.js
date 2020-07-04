const express = require('express');
const router = express.Router();
const login = require('../middleware/login');
const EventosController = require('../controllers/eventos-controller');

router.get('/', login.opcional, (req, res, next) => { res.render('igrejas.ejs'); });
router.get('/api', login.opcional, EventosController.getAllEventos);
router.get('/api/listaPersona/:idEvento', login.opcional, EventosController.getListaPersona);
router.get('/api/listaTicket/:idEvento', login.opcional, EventosController.getListaTickets);
router.post('/api/insertEvent', login.opcional, EventosController.insertEvent);
router.post('/api/insertTicket', login.opcional, EventosController.insertTicket);
router.post('/api/insertTicketPersona', login.opcional, EventosController.insertTicketPersona);

module.exports = router;