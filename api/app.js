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

// ROTAS


router.get('/hcor/beacons_temperatura_atual', (req, res) =>{
    const $Temperatura_atual = 'SELECT e.nome as nome_do_beacon , b.beacon as mac_beacon , b.temp as temperatura , e.setor, s.nome as nome_setor FROM equipamentos as e  inner join beacons as b  inner join setores s where e.serie = b.beacon and e.setor = s.id';

    execQuery($Temperatura_atual, res);
})

router.get('/hcor/beacons_temperatura_atual/:mac', (req, res) =>{

    var parametro = req.params.mac;
    const $Temperatura_atual = `SELECT e.nome as nome_do_beacon , b.beacon as mac_beacon , b.temp as temperatura , e.setor, s.nome as nome_setor FROM equipamentos as e  inner join beacons as b  inner join setores s where e.serie = b.beacon and e.setor = s.id and b.beacon = "${parametro}"`;

    execQuery($Temperatura_atual, res);
})

