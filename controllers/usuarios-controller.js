const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res, next) => {
    mysql.getConnection((error, conn) => {

        if (error) { return res.status(500).send({ error: error }) }

        conn.query('SELECT * FROM usuarios WHERE login = ?', [req.body.login], (error, result) => {

            if (error) { return res.status(500).send({ error: error }) }

            if (result.length > 0) {
                res.status(409).send({ mensagem: "Login já cadastrado" });
            } else {

                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {

                    if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }

                    conn.query(`INSERT INTO usuarios (login, senha) VALUES (?,?)`,
                        [req.body.login, hash],
                        (error, result) => {

                            conn.release();
                            if (error) { return res.status(500).send({ error: error }) }

                            return res.status(201).send({
                                mensagem: "Usuário criado com sucesso",
                                id_usuario: result.insertId,
                                login: req.body.login,
                            });

                        });
                });

            }

        })

    });
}

exports.login = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }

        const forcedSQL = `SELECT * FROM usuarios WHERE login = 'washington.vauthier'`;
        const sql = `SELECT * FROM usuarios WHERE login = '${req.body.login}'`;
        const returnStr = `Login => ${req.body.login}, Senha => ${req.body.senha}`

        conn.query(forcedSQL, [req.body.login], (error, results, fields) => {
            conn.release();
            if (error) { return res.status(500).send({ error: error }) }

            if (results.length < 1) {
                return res.status(401).send({ mensagem: "Usuário não encontrado", normalSQL: sql, forcedSQL: forcedSQL, returnStr: returnStr });
            }

            bcrypt.compare(req.body.senha, results[0].senha, (err, result) => {
                if (err) {
                    return res.status(401).send({ mensagem: "Senha errada", normalSQL: sql, forcedSQL: forcedSQL, returnStr: returnStr });
                }
                if (result) {

                    let token = jwt.sign({
                        id_usuario: results[0].id_usuario,
                        login: results[0].login
                    },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "360h"
                        });

                    return res.status(200).send({
                        mensagem: "Autenticado com sucesso",
                        token: token
                    });

                }
                return res.status(401).send({ mensagem: "Erro no BCrypt", normalSQL: sql, forcedSQL: forcedSQL, returnStr: returnStr });
            });

        });
    });
}
