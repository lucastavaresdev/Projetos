
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão


//configurando o body parser para pegar POSTS caso precise
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);


const execQuery = require ('./db');



router.get('/beacons', (req, res) =>{
    execQuery('SELECT * FROM beacons', res);
})

router.get('/usuarios', (req, res) =>{
    execQuery('SELECT * FROM usuarios', res);
})

