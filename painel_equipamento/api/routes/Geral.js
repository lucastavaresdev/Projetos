const express = require("express")
const geral = express.Router()
const cors = require('cors')
const execQuery = require ('./ExecuteQuery');

geral.use(cors())


geral.put('/ocultar/:id/:tabela', function (req, res) {
    const $query = `UPDATE ${req.params.tabela} SET  ativo=3   WHERE id=${req.params.id}`; 
    execQuery($query, res);
});



module.exports = geral