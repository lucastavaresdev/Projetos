const mysql = require('mysql');

function execQuery(query, res){
 
  
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