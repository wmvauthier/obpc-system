const mysql = require('../mysql');

exports.getAllEventos = async (req, res, next) => {
    try {
        const query = `SELECT * FROM eventos;`;
        const result = await mysql.execute(query);
        return res.status(200).send({ eventos: result })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getListaTickets = async (req, res, next) => {
    try {
        const query = `SELECT * FROM eventosTickets WHERE id_evento = ?;`;
        const result = await mysql.execute(query, [req.params.idEvento]);
        return res.status(200).send({ eventosTickets: result })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getListaPersona = async (req, res, next) => {
    try {
        const query = `SELECT * FROM eventosListaPersona WHERE id_evento = ?;`;
        const result = await mysql.execute(query, [req.params.idEvento]);
        return res.status(200).send({ listaPersona: result })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.insertEvent = async (req, res, next) => {
    try {
        const query = `INSERT INTO eventos 
        (typeEvento, dataEvento, vagasEvento)
            VALUES (?,?,?)`;
        const result = await mysql.execute(query, [
            req.params.typeEvento, req.params.dataEvento, req.params.vagasEvento
        ]);
        res.status(201).send({
            mensagem: 'Evento inserida com Sucesso'
        })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.insertTicket = async (req, res, next) => {

    let personaData = JSON.parse(req.params.personaData);

    personaData.forEach(element => {
        this.insertTicketPersona(req.params.id_evento, element.nome, element.rg, '1');
    });

    try {
        const query = `INSERT INTO eventosTickets 
        (id_evento, ticket, personaData)
            VALUES (?,?,?)`;
        const result = await mysql.execute(query, [
            req.params.id_evento, req.params.ticket, req.params.personaData
        ]);
        res.status(201).send({
            mensagem: 'Evento inserida com Sucesso'
        })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.insertTicketPersona = async (id_evento, nome, rg, status) => {
    try {
        const query = `INSERT INTO eventosListaPersona
        (id_evento, nome, rg, status)
            VALUES (?,?,?,?)`;
        const result = await mysql.execute(query, [
            id_evento, nome, rg, status
        ]);
    } catch (error) {
        console.log(error);
    }
}