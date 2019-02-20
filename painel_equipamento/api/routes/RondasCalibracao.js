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
     const $query = `SELECT e.nome , r.${req.params.coluna}, sit.nome_situacoes, observacao  FROM ${req.params.tabela} as r INNER JOIN equipamentos as e on r.id_equipamento = e.id INNER JOIN pe_situacoes as sit on r.situacao = sit.id WHERE ${req.params.coluna} BETWEEN DATE_ADD(NOW(), INTERVAL -360 DAY)  AND NOW();`; 
     console.log($query)
    execQuery($query, res);
});


rondas.get('/grafico_status/:tabela/:coluna', (req, res) =>{
    const $query = `select pe_situacoes.nome_situacoes, count(situacao) as qtd from ( SELECT id_equipamento, situacao, ${req.params.coluna} from (SELECT MAX(${req.params.coluna}) as reg_recente FROM ${req.params.tabela} WHERE ${req.params.coluna} BETWEEN DATE_ADD(NOW(), INTERVAL -7 DAY) AND NOW() GROUP BY id_equipamento) reg left join ${req.params.tabela} on ${req.params.tabela}.${req.params.coluna} = reg.reg_recente group by id_equipamento) r right join pe_situacoes  on pe_situacoes.id = r.situacao group by pe_situacoes.nome_situacoes;`
    execQuery($query, res);
})




module.exports = rondas
