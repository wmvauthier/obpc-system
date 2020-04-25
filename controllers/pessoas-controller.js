const mysql = require('../mysql').pool;

exports.getOnlyMembros = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `SELECT * FROM pessoas WHERE tipo = 'Membro';`,
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ igrejas: result })
            }
        );
    })
}

exports.getOnlyCongregados = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `SELECT * FROM pessoas WHERE tipo = 'Congregado';`,
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ igrejas: result })
            }
        );
    })
}

exports.getOnlyObreiros = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `SELECT * FROM pessoas WHERE tipo = 'Obreiro';`,
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ igrejas: result })
            }
        );
    })
}

exports.getOnlyAniv = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `SELECT * FROM pessoas WHERE tipo = 'Congregado';`,
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ igrejas: result })
            }
        );
    })
}

exports.getOnlyDisciplinados = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `SELECT * FROM pessoas WHERE situacao = 'Disciplinado';`,
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ igrejas: result })
            }
        );
    })
}

exports.getOnlyAfastados = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `SELECT * FROM pessoas WHERE situacao = 'Afastado';`,
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ igrejas: result })
            }
        );
    })
}

exports.getPessoasIgreja = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM pessoas WHERE igreja = ?;',
            [req.params.igreja],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ pessoas: result })
            }
        );
    })
}

exports.getPessoa = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM pessoas WHERE id_pessoa = ?;',
            [req.params.id_pessoa],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ pessoas: result })
            }
        );
    })
}

exports.insertPessoa = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `INSERT INTO pessoas 
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
                    mensagem: 'Pessoa inserida com sucesso',
                    id_pessoa: result.insertId,
                    nome: req.body.nome
                })

            }
        )
    })
}

exports.updatePessoa = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `UPDATE pessoas SET 
            nome = ?, endereco = ?, endereco_numero = ?, endereco_complemento = ?, endereco_bairro = ?, endereco_cidade = ?,
                endereco_estado = ?, endereco_pais = ?, endereco_telefone = ?, pastor = ?, regiao = ?, classificacao = ?,
                sede = ?, rede_social_instagram = ?, rede_social_facebook = ?, rede_social_youtube = ?, imagem_igreja = ?
                WHERE id_pessoa = ?`,
            [
                req.body.nome, req.body.endereco, req.body.endereco_numero, req.body.endereco_complemento,
                req.body.endereco_bairro, req.body.endereco_cidade, req.body.endereco_estado, req.body.endereco_pais,
                req.body.endereco_telefone, req.body.pastor, req.body.regiao, req.body.classificacao,
                req.body.sede, req.body.rede_social_instagram, req.body.rede_social_facebook, req.body.rede_social_youtube,
                req.body.imagem_igreja, req.body.id_igreja
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

exports.deletePessoa = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'DELETE FROM pessoas WHERE id_pessoa = ?;',
            [req.params.id_pessoa],
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(202).send({ igrejas: result })
            }
        );
    })
}