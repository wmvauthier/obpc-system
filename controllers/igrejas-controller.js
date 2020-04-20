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
            `INSERT INTO igrejas 
            (nome, endereco, endereco_numero, endereco_complemento, endereco_bairro, endereco_cidade,
                endereco_estado, endereco_pais, endereco_telefone, pastor, regiao, classificacao,
                sede, rede_social_instagram, rede_social_facebook, rede_social_youtube, imagem_igreja) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                req.body.nome, req.body.endereco, req.body.endereco_numero, req.body.endereco_complemento,
                req.body.endereco_bairro, req.body.endereco_cidade, req.body.endereco_estado, req.body.endereco_pais,
                req.body.endereco_telefone, req.body.pastor, req.body.regiao, req.body.classificacao,
                req.body.sede, req.body.rede_social_instagram, req.body.rede_social_facebook, req.body.rede_social_youtube,
                req.body.imagem_igreja
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