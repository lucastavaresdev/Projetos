var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 3003


app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var Users = require('./routes/Users')
var Equipamentos = require('./routes/Equipamentos')

app.use('/equipamento', Users)
app.use('/equipamento', Equipamentos)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})


const execQuery = require ('./routes/ExecuteQuery');


