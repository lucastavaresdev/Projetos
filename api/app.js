const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
var cors = require('cors');

//configurando o body parser para pegar POSTS caso precise
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//inicia o servidor
app.listen(3001);
console.log('API funcionando!');

const router = express.Router();

app.use(cors({origin: '*'}));
app.use('/', router);
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

//chama o banco de dados
const execQuery = require ('./db');


router.get('/beacons', (req, res) =>{
    execQuery('SELECT * FROM beacons', res);
})

router.get('/usuarios', (req, res) =>{
    execQuery('SELECT * FROM usuarios', res);
})

router.get('/agendamento', (req, res) =>{
    execQuery('SELECT * FROM agendamento;', res);
})

