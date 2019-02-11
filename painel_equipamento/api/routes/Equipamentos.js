const express = require("express")
const equipamentos = express.Router()
const cors = require('cors')

const Equipamento = require("../models/Equipamento")
equipamentos.use(cors())

equipamentos.post('/cadastro_de_equipamento', (req, res) => {
    const hoje = new Date()
    const userData = {
        nome: req.body.nome,
        marca: req.body.marca,
        modelo: req.body.modelo,
        serie: req.body.serie,
        patrimonio: req.body.patrimonio,
        ronda: req.body.ronda,
        calibracao: req.body.calibracao,
        situacao: req.body.situacao,
        ativo: req.body.ativo,
        setor: req.body.setor,
        data_de_criacao: hoje
    }
    Equipamento.findOne({
        where: {
            serie: req.body.serie
        }
    })
    .then(equipamento => {
        if (!equipamento) {
            Equipamento.create(userData)
                    .then(equi => {
                        res.json({
                            status:  equi.nome + ' serie ' + equi.serie + ' registrado',
                            cod: 0
                        })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
        } else {
            res.json({ 
                error: "Equipamento ja existe",
                cod: 1
            })
        }
    })
})



const execQuery = require ('./ExecuteQuery');


equipamentos.get('/tracking_equipamentos', (req, res) =>{
    const $query = 'select t.id, t.id_gateway, g.nome as gateway, g.mac, t.id_setor, s.nome as setor, t.id_beacon, e.nome, e.marca, e.modelo, e.serie, e.patrimonio, b.minor, t.rssi, t.checkin, t.checkout, timediff(checkout, checkin) as tempo from tracking t left join setores s on s.id = t.id_setor left join gateways g on g.id = t.id_gateway left join beacons b on b.id = t.id_beacon left join equipamentos e on e.id = b.id_equipamento where (fechado is null and t.id_usuario is null and t.id_equipamento is not null) ';
    execQuery($query, res);
})

equipamentos.get('/quantidade_de_equipamento', (req, res) =>{
    const $query = 'SELECT count(serie) as quantidade_de_equipamentos FROM equipamentos;';
    execQuery($query, res);
})

equipamentos.get('/qtd_calibracoes', (req, res) =>{
    const $query = 'SELECT distinct (pe_situacoes.nome_situacoes)  ,count(rondas.situacao) as quantidade FROM pe_situacoes left join rondas  ON pe_situacoes.nome_situacoes =  rondas.situacao group by pe_situacoes.nome_situacoes order by quantidade desc;';
    execQuery($query, res);
})

equipamentos.get('/rondas_status', (req, res) =>{
    const $query = 'select pe_situacoes.nome_situacoes, count(situacao) as qtd from ( select id_equipamento, situacao, ronda_ultima from ( SELECT MAX(ronda_ultima) as reg_recente FROM rondas GROUP BY id_equipamento) reg left join rondas on rondas.ronda_ultima = reg.reg_recente group by id_equipamento) r right join pe_situacoes on pe_situacoes.nome_situacoes = r.situacao group by pe_situacoes.nome_situacoes';
    execQuery($query, res);
})

equipamentos.get('/qtd_equipamentos', (req, res) =>{
    const $query = 'SELECT setores.nome, count(equipamentos.setor IS NULL) as contagem FROM equipamentos left join setores on equipamentos.setor = setores.id group by equipamentos.setor;';
    execQuery($query, res);
})

equipamentos.get('/lista_equipamentos', (req, res) =>{
    const $query = 'SELECT e.id ,e.nome, e.marca, e.modelo,e.serie, e.patrimonio, e.ronda, e.calibracao, sit.nome_situacoes as situacao, e.situacao as id_situacao , e.ativo, s.nome as setor, ai.nome_status, e.setor as setor_id FROM equipamentos  as e left join setores as s on s.id = e.setor inner join pe_situacoes as sit on sit.id = e.situacao inner join pe_ativo_inativo as ai on e.ativo = ai.id where e.ativo = 1 or e.ativo = 0';
    execQuery($query, res);
})
equipamentos.get('/lista_setores', (req, res) =>{
    const $query = 'SELECT id,nome FROM setores order by id';
    execQuery($query, res);
})



equipamentos.put('/atualizar_equipamento/:id', function (req, res) {

    const hoje = new Date()

    var dados = {
        nome: req.body.nome,
        marca: req.body.marca,
        modelo: req.body.modelo,
        serie: req.body.serie,
        patrimonio: req.body.patrimonio,
        ronda: req.body.ronda,
        calibracao: req.body.calibracao,
        situacao: req.body.situacao,
        ativo: req.body.ativo,
        setor: req.body.setor,
        data_de_edicao: hoje
    }


  const $query = `UPDATE equipamentos SET  nome="${dados.nome}",
    marca="${dados.marca}",
    modelo="${dados.modelo}",
    patrimonio="${dados.patrimonio}",
    ronda="${dados.ronda}",
    calibracao="${dados.calibracao}",
    situacao="${dados.situacao}",
    ativo="${dados.ativo}",
    setor="${dados.setor}",
    data_de_edicao="${dados.data_de_edicao}"
    WHERE id="${req.params.id}"`;
    
    console.log($query)
    execQuery($query, res);

});
equipamentos.put('/ocultar_equipamento/:id', function (req, res) {
    const $query = `UPDATE equipamentos SET  ativo=3   WHERE id=${req.params.id}`; 
    execQuery($query, res);
});





module.exports = equipamentos