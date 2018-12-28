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


router.get('/umdi/temperatura_atual/:mac', (req, res) =>{

    var parametro = req.params.mac;
    const $Temperatura_atual = `SELECT b.codigo, b.beacon as mac_beacon , b.temp as temperatura FROM equipamentos as e  inner join beacons as b  inner join setores s where e.serie = b.beacon and e.setor = s.id and b.beacon = "${parametro}"`;

    execQuery($Temperatura_atual, res);
})

router.get('/hcor/temperatura_media', (req, res) =>{

    var parametro = req.params.mac;
    const $Temperatura_atual = `SELECT temperatura,DATE_FORMAT(data_hora, '%H:%i:%s') as hora FROM umdi.temperatura_media where data_hora = now() - interval 1 hour;`;

    execQuery($Temperatura_atual, res);
})

router.get('/umdi/temperatura_media_hora/:mac', (req, res) =>{

    var parametro = req.params.mac;

    const $Temperatura_media_hora = `select tempo as name, ROUND(avg(temperatura), 2) as graus from (
        SELECT
          beacons.beacon, temperatura_media.data_hora, temperatura_media.temperatura  
          ,(CASE
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '01:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '01:59' THEN '01h'
          
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '02:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '02:59' THEN '02h'
          
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '03:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '03:59' THEN '03h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '04:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '04:59' THEN '04h'
          
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '05:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '05:59' THEN '05h'
          
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '06:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '06:59' THEN '06h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '07:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '07:59' THEN '07h'	
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '08:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '08:59' THEN '08h' 
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '09:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '09:59' THEN '09h'  
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '10:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '10:59' THEN '10h'   
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '11:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '11:59' THEN '11h'  
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '12:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '12:59' THEN '12h'     
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '13:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '13:59' THEN '13h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '14:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '14:59' THEN '14h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '15:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '15:59' THEN '15h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '16:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '16:59' THEN '16h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '17:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '17:59' THEN '17h' 
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '18:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '18:59' THEN '18h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '19:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '19:59' THEN '19h'   
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '20:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '20:59' THEN '20h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '21:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '21:59' THEN '21h' 
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '22:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '22:59' THEN '22h' 
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '23:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '23:59' THEN '23h'
              
              WHEN DATE_FORMAT(data_hora, '%H:%i:%s') > '00:00' 
              && DATE_FORMAT(data_hora, '%H:%i:%s') < '00:59' THEN '0h'
              
              ELSE 0 END)
        AS tempo
        FROM temperatura_media 
        inner join beacons on temperatura_media.id_beacon = beacons.codigo
        where DATE_FORMAT(data_hora, '%y-%m-%d') = curdate() and beacon = '${parametro}'
      ) as horas GROUP BY  tempo desc limit 8`;

    execQuery($Temperatura_media_hora, res);
})

