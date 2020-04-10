const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todas as Pessoas'
    })
})

router.get('/:id_pessoa', (req, res, next) => {

    const id_pessoa = req.params.id_pessoa;

    res.status(200).send({
        mensagem: 'Retorna uma pessoa específica',
        id: id_pessoa
    })
})

router.post('/', (req, res, next) => {

    const pessoa = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome
    }

    res.status(201).send({
        mensagem: 'Pessoa inserida com sucesso',
        pessoaCriada: pessoa
    })
})

router.patch('/:id_pessoa', (req, res, next) => {

    const id_pessoa = req.params.id_pessoa;

    res.status(200).send({
        mensagem: 'Altera uma pessoa',
        id: id_pessoa
    })
})

router.delete('/:id_pessoa', (req, res, next) => {

    const id_pessoa = req.params.id_pessoa;

    res.status(200).send({
        mensagem: 'Exclui uma pessoa',
        id: id_pessoa
    })
})

module.exports = router;