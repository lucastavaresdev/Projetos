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


equipamentos.get('/listar', (req, res) =>{
    const $Temperatura_atual = 'SELECT * FROM hfcp.equipamentos';
    execQuery($Temperatura_atual, res);
})


module.exports = equipamentos