const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/cadastro', (req, res) => {
    const hoje = new Date()
    const userData = {
        nome: req.body.nome,
        usuario: req.body.usuario,
        senha: req.body.senha,
        perfil: req.body.perfil,
        created: hoje
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

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            usuario: req.body.usuario
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.senha, user.senha)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }else{
                res.status(400).json({error: 'usuario nao existe'})
            }
        }
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

module.exports = users