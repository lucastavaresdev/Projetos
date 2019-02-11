const express = require("express")
const setores = express.Router()
const cors = require('cors')

const Setores = require("../models/Setores")
setores.use(cors())


setores.post('/cadastro_de_setor', (req, res) => {
    const userData = {
        nome: req.body.nome,
        sigla: req.body.sigla,
        andar: req.body.andar,
        capacidade: req.body.capacidade,
        permanencia: req.body.permanencia,
        tracking: req.body.tracking,
        ativo: req.body.ativo,
        atendimentos: req.body.atendimentos,
    }
    Setores.findOne({
        where: {
            nome: req.body.nome,
            sigla: req.body.sigla,
        }
    })
    .then(equipamento => {
        if (!equipamento) {
            Setores.create(userData)
                    .then(setor => {
                        res.json({
                            status:  setor.nome,
                            cod: 0
                        })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
        } else {
            res.json({ 
                error: "Setor ja existe",
                cod: 1
            })
        }
    })
})


module.exports = setores