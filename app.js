const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const rotaPessoas = require('./routes/pessoas');
const rotaIgrejas = require('./routes/igrejas');
const rotaUsuarios = require('./routes/usuarios');

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();

})

app.use('/pessoas', rotaPessoas);
app.use('/igrejas', rotaIgrejas);
app.use('/usuarios', rotaUsuarios);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});


module.exports = app;