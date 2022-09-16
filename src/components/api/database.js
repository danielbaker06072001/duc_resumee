const mysql = require('mysql2');
var connectionDB = mysql.createConnection({
    host : "bhqqptchh63gdzscoote-mysql.services.clever-cloud.com",
    user :"u1ybmli78csjjoff",
    password : "nCEYdpOC83AsxhWBgspW",
    database : "bhqqptchh63gdzscoote"
});

module.export = connectionDB;

async function get_experience() { 
    console.log("???????????????????????????????????")
    let sql = "SELECT * FROM Projet_list";

    connectionDB.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
      });
    connectionDB.query(sql, (err, results) => { 
        if (err) throw err;
        console.log("Solution is : " , results[0].solution);
    });
    return
};

export default get_experience();