const mysql = require('../mysql').pool;

exports.getOnlyMembros = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `SELECT * FROM pessoas WHERE tipo = 'Membro';`,
            (error, result, field) => {
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }
                res.status(200).send({ pessoas: result })
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
                res.status(200).send({ pessoas: result })
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
                res.status(200).send({ pessoas: result })
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
                res.status(200).send({ pessoas: result })
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
                res.status(200).send({ pessoas: result })
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
                res.status(200).send({ pessoas: result })
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
            (imagem_pessoa, nome, nome_pai, nome_mae, nome_conjuge, nome_responsavel, contato_responsavel,
                data_nascimento, cpf, rg, endereco, endereco_numero, endereco_bairro, endereco_cidade,
                endereco_estado, endereco_pais, endereco_telefone, igreja, tipo, cargo, departamento,
                situacao, profissao, data_conversao, igreja_conversao, data_batismo, igreja_batismo, tipo_de_recebimento) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                req.body.imagem_pessoa, req.body.nome, req.body.nome_pai, req.body.nome_mae,
                req.body.nome_conjuge, req.body.nome_responsavel, req.body.contato_responsavel,
                req.body.data_nascimento, req.body.cpf, req.body.rg, req.body.endereco, req.body.endereco_numero,
                req.body.endereco_bairro, req.body.endereco_cidade, req.body.endereco_estado,
                req.body.endereco_pais, req.body.endereco_telefone, req.body.igreja,
                req.body.tipo, req.body.cargo, req.body.departamento, req.body.situacao, req.body.profissao,
                req.body.data_conversao, req.body.igreja_conversao, req.body.data_batismo, req.body.igreja_batismo,
                req.body.tipo_de_recebimento
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
            imagem_pessoa = ?, nome = ?, nome_pai = ?, nome_mae = ?, nome_conjuge = ?, nome_responsavel = ?, contato_responsavel = ?,
                data_nascimento = ?, cpf = ?, rg = ?, endereco = ?, endereco_numero = ?, endereco_bairro = ?, endereco_cidade = ?,
                endereco_estado = ?, endereco_pais = ?, endereco_telefone = ?, igreja = ?, tipo = ?, cargo = ?, departamento = ?,
                situacao = ?, profissao = ?, data_conversao = ?, igreja_conversao = ?, data_batismo = ?, igreja_batismo = ?, tipo_de_recebimento = ?
                WHERE id_pessoa = ?`,
            [
                req.body.imagem_pessoa, req.body.nome, req.body.nome_pai, req.body.nome_mae,
                req.body.nome_conjuge, req.body.nome_responsavel, req.body.contato_responsavel,
                req.body.data_nascimento, req.body.cpf, req.body.rg, req.body.endereco, req.body.endereco_numero,
                req.body.endereco_bairro, req.body.endereco_cidade, req.body.endereco_estado,
                req.body.endereco_pais, req.body.endereco_telefone, req.body.igreja,
                req.body.tipo, req.body.cargo, req.body.departamento, req.body.situacao, req.body.profissao,
                req.body.data_conversao, req.body.igreja_conversao, req.body.data_batismo, req.body.igreja_batismo,
                req.body.req.body.tipo_de_recebimento, req.body.id_pessoa
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