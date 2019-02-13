var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 3003

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var Geral = require('./routes/Geral')
var Users = require('./routes/Users')
var Equipamentos = require('./routes/Equipamentos')
var Setores = require('./routes/Setores')
var Rondas = require('./routes/RondasCalibracao')

app.use('/geral', Geral)
app.use('/equipamento', Users)
app.use('/equipamento', Equipamentos)
app.use('/setores', Setores)
app.use('/rondascalibracao', Rondas)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})


const execQuery = require ('./routes/ExecuteQuery');


