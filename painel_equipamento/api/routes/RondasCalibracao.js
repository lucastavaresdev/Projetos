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
    execQuery($query, res);
});

module.exports = rondas
