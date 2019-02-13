const express = require("express")
const rondas = express.Router()
const cors = require('cors')

const RondasCalibracao = require("../models/RondasCalibracao")
rondas.use(cors())


rondas.post('/rondas', (req, res) => {
    const userData = {
        id_equipamento: req.body.id_equipamento,
        ronda_ultima: req.body.ronda_ultima,
        situacao: req.body.situacao,
        observacao: req.body.observacao,
    }

    RondasCalibracao.create(userData)
        .then(equipamento => res.json(equipamento))
})

module.exports = rondas
