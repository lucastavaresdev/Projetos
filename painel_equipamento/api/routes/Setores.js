const express = require("express")
const setores = express.Router()
const cors = require('cors')
const execQuery = require ('./ExecuteQuery');

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




setores.get('/lista_setores', (req, res) =>{
    const $query = 'SELECT s.id, s.nome, s.sigla, s.andar, s.capacidade, s.permanencia, tt.nome_tipo_de_tracking as tracking, s.atendimentos, aio.nome_status as ativo FROM setores as s inner join pe_ativo_inativo as aio on s.ativo = aio.id inner join pe_tipo_de_tracking as tt on s.tracking = tt.id where s.ativo = 0 or s.ativo = 1 order by id';  
    execQuery($query, res);
})

setores.put('/ocultar/:id/:tabela', function (req, res) {
    const $query = `UPDATE ${req.params.tabela} SET  ativo=2  WHERE id=${req.params.id}`; 
    execQuery($query, res);
});


setores.put('/atualizar_setores/:id', function (req, res) {

    var dados = {
        nome: req.body.nome,
        sigla: req.body.sigla,
        andar: req.body.andar,
        capacidade: req.body.capacidade,
        permanencia: req.body.permanencia,
        tracking: req.body.tracking,
        ativo: req.body.ativo,
        atendimentos: req.body.atendimentos,
    }

  const $query = `UPDATE setores SET  nome="${dados.nome}", 
    sigla="${dados.sigla}",
    andar="${dados.andar}",
    capacidade="${dados.capacidade}",
    permanencia="${dados.permanencia}",
    tracking="${dados.tracking}", 
    atendimentos="${dados.atendimentos}",
    ativo="${dados.ativo}"
    WHERE id="${req.params.id}"`; 
 
  console.log($query)
   execQuery($query, res);

});



module.exports = setores