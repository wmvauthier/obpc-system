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

exports.getTicket = async (ticket) => {
    try {
        const query = `SELECT * FROM eventosTickets WHERE ticket = ?;`;
        const result = await mysql.execute(query, [ticket]);
        return result;
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
            mensagem: 'Ticket gerado com Sucesso!'
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
        return res.status(500).send({ error: error })
    }
}

exports.getQtdTicketsFromEvento = async (req, res, next) => {

    try {
        const query = `SELECT * FROM eventosListaPersona WHERE id_evento = ?;`;
        const result = await mysql.execute(query, [req.params.id_evento]);
        return res.status(200).send({ id_evento: req.params.id_evento, qtd: result })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.validateTicket = async (req, res, next) => {

    try {
        let tic = req.params.ticket;
        let ticket = await this.getTicket(tic);
        let personaData = ticket.personaData;

        personaData.forEach(element => {
            this.validateTicketPersona(element.id_evento, element.nome, element.rg);
        });

        res.status(201).send({
            mensagem: 'Ticket validado com Sucesso!'
        });

    } catch (error) {
        return res.status(500).send({ error: error })
    }

}

exports.validateTicketPersona = async (id_evento, nome) => {
    try {
        const query = `UPDATE eventosListaPersona SET
        status = 0 WHERE id_evento = ? and nome = ? and rg = ?`;
        const result = await mysql.execute(query, [id_evento, nome, rg]);
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}