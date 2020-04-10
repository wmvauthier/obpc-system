const mysql = require('../mysql').pool;

exports.getIgrejas = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM igrejas;',
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ igrejas: result })
            }
        );
    })
}

exports.getIgreja = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM igrejas WHERE id_igreja = ?;',
            [req.params.id_igreja],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ igrejas: result })
            }
        );
    })
}

exports.insertIgreja = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'INSERT INTO igrejas (nome, pastor) VALUES (?,?)',
            [
                req.body.nome,
                req.body.pastor,
            ],
            (error, result, field) => {

                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(201).send({
                    mensagem: 'Igreja inserida com sucesso',
                    id_igreja: result.insertId,
                    nome: req.body.nome,
                    pastor: req.body.pastor,
                })

            }
        )
    })
}

exports.updateIgreja = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `UPDATE igrejas SET
            nome = ?,
            pastor = ?
            WHERE id_igreja = ?`,
            [
                req.body.nome,
                req.body.pastor,
                req.body.id_igreja
            ],
            (error, result, field) => {

                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    mensagem: 'Igreja alterada com sucesso',
                    id_igreja: req.body.id_igreja,
                    nome: req.body.nome,
                    pastor: req.body.pastor
                })
            }
        );

    })
}

exports.deleteIgreja = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'DELETE FROM igrejas WHERE id_igreja = ?;',
            [req.params.id_igreja],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(202).send({ igrejas: result })
            }
        );
    })
}