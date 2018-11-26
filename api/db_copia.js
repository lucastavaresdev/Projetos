//Exemplo 

const mysql = require('mysql');

function execQuery(query, res){
    const connection = mysql.createConnection({
      host     : 'XXX',
      port: 'XXX',
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


  module.exports = execQuery