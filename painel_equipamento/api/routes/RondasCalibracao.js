const express = require("express")
const rondas = express.Router()
const cors = require('cors')
const execQuery = require ('./ExecuteQuery');


const RondasCalibracao = require("../models/RondasCalibracao")
rondas.use(cors())


rondas.post('/rondas_calibracao/:tabela/:coluna', function (req, res) {

    const dados = {
                id_equipamento: req.body.id_equipamento,
                ultima: req.body.ronda_ultima,
                situacao: req.body.situacao,
                observacao: req.body.observacao,
            }

     const $query = `INSERT INTO ${req.params.tabela} (id_equipamento,${req.params.coluna}, situacao, observacao) VALUES (${dados.id_equipamento}, '${dados.ultima}', ${dados.situacao},'${dados.observacao}');`; 
     console.log($query)
    execQuery($query, res);
});


rondas.get('/rondas_calibracao/:tabela/:coluna', function (req, res) {

     //const $query = `INSERT INTO ${req.params.tabela} (id_equipamento,${req.params.coluna}, situacao, observacao) VALUES (${dados.id_equipamento}, '${dados.ultima}', ${dados.situacao},'${dados.observacao}');`; 
     const $query = `SELECT e.nome , r.${req.params.coluna}, sit.nome_situacoes, observacao  FROM ${req.params.tabela} as r INNER JOIN equipamentos as e on r.id_equipamento = e.id INNER JOIN pe_situacoes as sit on r.situacao = sit.id WHERE ${req.params.coluna} BETWEEN DATE_ADD(NOW(), INTERVAL -360 DAY)  AND NOW();`; 
     console.log($query)
    execQuery($query, res);
});





module.exports = rondas
