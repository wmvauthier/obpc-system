const mysql = require('../mysql');

exports.getMemberCong = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE tipo IN ('Membro', 'Congregado');`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getPastores = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE cargo IN ('Pastor', 'Presbítero');`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getOnlyMembros = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE tipo IN ('Membro');`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getOnlyCongregados = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE tipo = 'Congregado';`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getOnlyObreiros = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE tipo = 'Obreiro';`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getOnlyAniv = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE tipo = 'Congregado';`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getOnlyDisciplinados = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE situacao = 'Disciplinado';`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getOnlyAfastados = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE situacao = 'Afastado';`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getAllMembros = async (req, res, next) => {
    try {
        const query = `SELECT * FROM pessoas WHERE tipo IN ('Membro', 'Obreiro', 'Pastor', 'Convenção');`;
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getPessoasIgreja = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM pessoas WHERE igreja = ?;';
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getPessoa = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM pessoas WHERE id_pessoa = ?;';
        const result = await mysql.execute(query);
        return res.status(200).send({ pessoas: result });
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.insertPessoa = async (req, res, next) => {
    try {
        const query = `INSERT INTO pessoas 
        (imagem_pessoa, nome, nome_pai, nome_mae, nome_conjuge, nome_responsavel, contato_responsavel,
            data_nascimento, cpf, rg, endereco, endereco_numero, endereco_bairro, endereco_cidade,
            endereco_estado, endereco_pais, endereco_telefone, igreja, tipo, cargo, departamento,
            situacao, profissao, data_conversao, igreja_conversao, data_batismo, igreja_batismo, tipo_de_recebimento) 
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        const result = await mysql.execute(query, [
            req.body.imagem_pessoa, req.body.nome, req.body.nome_pai, req.body.nome_mae,
            req.body.nome_conjuge, req.body.nome_responsavel, req.body.contato_responsavel,
            req.body.data_nascimento, req.body.cpf, req.body.rg, req.body.endereco, req.body.endereco_numero,
            req.body.endereco_bairro, req.body.endereco_cidade, req.body.endereco_estado,
            req.body.endereco_pais, req.body.endereco_telefone, req.body.igreja,
            req.body.tipo, req.body.cargo, req.body.departamento, req.body.situacao, req.body.profissao,
            req.body.data_conversao, req.body.igreja_conversao, req.body.data_batismo, req.body.igreja_batismo,
            req.body.tipo_de_recebimento
        ]);
        return res.status(201).send({
            mensagem: 'Pessoa inserida com sucesso',
            id_pessoa: result.insertId,
            nome: req.body.nome
        })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.updatePessoa = async (req, res, next) => {
    try {
        const query = `UPDATE pessoas SET 
        imagem_pessoa = ?, nome = ?, nome_pai = ?, nome_mae = ?, nome_conjuge = ?, nome_responsavel = ?, contato_responsavel = ?,
            data_nascimento = ?, cpf = ?, rg = ?, endereco = ?, endereco_numero = ?, endereco_bairro = ?, endereco_cidade = ?,
            endereco_estado = ?, endereco_pais = ?, endereco_telefone = ?, igreja = ?, tipo = ?, cargo = ?, departamento = ?,
            situacao = ?, profissao = ?, data_conversao = ?, igreja_conversao = ?, data_batismo = ?, igreja_batismo = ?, tipo_de_recebimento = ?
            WHERE id_pessoa = ?`;
        const result = await mysql.execute(query, [
            req.body.imagem_pessoa, req.body.nome, req.body.nome_pai, req.body.nome_mae,
            req.body.nome_conjuge, req.body.nome_responsavel, req.body.contato_responsavel,
            req.body.data_nascimento, req.body.cpf, req.body.rg, req.body.endereco, req.body.endereco_numero,
            req.body.endereco_bairro, req.body.endereco_cidade, req.body.endereco_estado,
            req.body.endereco_pais, req.body.endereco_telefone, req.body.igreja,
            req.body.tipo, req.body.cargo, req.body.departamento, req.body.situacao, req.body.profissao,
            req.body.data_conversao, req.body.igreja_conversao, req.body.data_batismo, req.body.igreja_batismo,
            req.body.tipo_de_recebimento, req.body.id_pessoa
        ]);
        return res.status(202).send({
            mensagem: 'Pessoa alterada com sucesso',
            id_pessoa: req.body.id_pessoa,
            nome: req.body.nome,
        })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.alterToObreiro = async (req, res, next) => {
    try {
        const query = `UPDATE pessoas SET cargo = ?, tipo = 'Obreiro' WHERE id_pessoa = ?`;
        const result = await mysql.execute(query, [req.body.cargo, req.body.id_pessoa]);
        return res.status(202).send({
            mensagem: 'Pessoa alterada com sucesso',
            id_pessoa: req.body.id_pessoa,
            nome: req.body.nome,
        })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.alterToAfastado = async (req, res, next) => {
    try {
        const query = `UPDATE pessoas SET situacao = 'Afastado' WHERE id_pessoa = ?`;
        const result = await mysql.execute(query, [req.body.id_pessoa]);
        return res.status(202).send({
            mensagem: 'Pessoa alterada com sucesso',
            id_pessoa: req.body.id_pessoa,
            nome: req.body.nome,
        })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.alterToDisciplinado = async (req, res, next) => {
    try {
        const query = `UPDATE pessoas SET situacao = 'Disciplinado' WHERE id_pessoa = ?`;
        const result = await mysql.execute(query, [req.body.id_pessoa]);
        return res.status(202).send({
            mensagem: 'Pessoa alterada com sucesso',
            id_pessoa: req.body.id_pessoa,
            nome: req.body.nome,
        })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.deletePessoa = async (req, res, next) => {
    try {
        const query = 'DELETE FROM pessoas WHERE id_pessoa = ?;';
        const result = await mysql.execute(query, [req.params.id_pessoa]);
        return res.status(202).send({ igrejas: result })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}