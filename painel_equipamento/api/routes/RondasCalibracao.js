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
     const $query = `SELECT e.nome ,  DATE_FORMAT(r.${req.params.coluna}, '%d/%m/%Y') as data_ultima , sit.nome_situacoes, observacao  FROM ${req.params.tabela} as r INNER JOIN equipamentos as e on r.id_equipamento = e.id INNER JOIN pe_situacoes as sit on r.situacao = sit.id WHERE ${req.params.coluna} BETWEEN DATE_ADD(NOW(), INTERVAL -360 DAY)  AND NOW();`; 
     console.log($query)
    execQuery($query, res);
});

rondas.get('/grafico_status/:tabela/:coluna', (req, res) =>{
    const $query = `select pe_situacoes.nome_situacoes, count(situacao) as qtd from ( SELECT id_equipamento, situacao, ${req.params.coluna} from (SELECT MAX(${req.params.coluna}) as reg_recente FROM ${req.params.tabela} WHERE ${req.params.coluna} BETWEEN DATE_ADD(NOW(), INTERVAL -7 DAY) AND NOW() GROUP BY id_equipamento) reg left join ${req.params.tabela} on ${req.params.tabela}.${req.params.coluna} = reg.reg_recente group by id_equipamento) r right join pe_situacoes  on pe_situacoes.id = r.situacao group by pe_situacoes.nome_situacoes;`
    execQuery($query, res);
})

rondas.get('/ultimos_registros/:tabela/:coluna', (req, res) =>{
    const $query = `SELECT e.nome, DATE_FORMAT(r.${req.params.coluna}, '%d/%m/%Y') as ronda_ultima FROM  ${req.params.tabela} as r inner join equipamentos as e on e.id = r.id_equipamento order by  ${req.params.coluna} desc limit 5;`
    execQuery($query, res);
})



rondas.get('/atrasados/:tabela/:coluna', (req, res) =>{
    const $query = `SELECT *, CASE WHEN data_qtd_de_dias_atraso > 1 THEN "Em dia" WHEN data_qtd_de_dias_atraso < -1 THEN "Atrasado" WHEN data_qtd_de_dias_atraso = 1 THEN "Amanhã" WHEN data_qtd_de_dias_atraso = -1 THEN "Ontem" ELSE "Hoje" END as status from( select id_equipamento, nome, reg_recente, DATE_FORMAT(now(),'%Y/%m/%d') as hoje, DATE_FORMAT(DATE_ADD(reg_recente, INTERVAL ronda DAY), '%Y/%m/%d') as data_qtd_de_dias, DATEDIFF(DATE_ADD(reg_recente, INTERVAL ronda DAY),now()) as data_qtd_de_dias_atraso from ( SELECT id_equipamento,MAX(${req.params.coluna}) as reg_recente FROM ${req.params.tabela} GROUP BY id_equipamento ) as horario_mais_recente inner join equipamentos as e on e.id = horario_mais_recente.id_equipamento ) as dados_ok where  data_qtd_de_dias_atraso < 0 order by data_qtd_de_dias_atraso limit 5`
    execQuery($query, res);
})


module.exports = rondas
