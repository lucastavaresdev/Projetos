const express = require("express")
const equipamentos = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Equipamento = require("../models/Equipamento")
equipamentos.use(cors())

process.env.SECRET_KEY = 'secret'

equipamentos.post('/cadastro', (req, res) => {
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

    User.findOne({
        where: {
            usuario: req.body.usuario
        }
    })
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.senha, 10, (err, hash) => {
                userData.senha = hash
                User.create(userData)
                    .then(user => {
                        res.json({ status: user.usuario + ' registrado' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            })
        } else {
            res.json({ error: "Usuario ja existe" })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})


module.exports = equipamentos