
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS caso precise
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);



function execQuery(query, res){
    const connection = mysql.createConnection({
      host     : 'XXX',
      port: '3306',
      user     : 'XXX',
      password : 'XXX',
      database : 'XXX'
    });
  
    connection.query(query, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
           connection.end();
         console.log('executou!');
    });
  }


router.get('/beacons', (req, res) =>{
    execQuery('SELECT * FROM beacons', res);
})

router.get('/usuarios', (req, res) =>{
    execQuery('SELECT * FROM usuarios', res);
})

