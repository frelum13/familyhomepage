import * as mysql from 'mysql';

function myfunktion(){
    var con = mysql.createConnection({
        host: "109.73.158.173",
        user: "root",
        password: "Campus02",
        database: "webserver"});

        con.connect(function(err) {
          if (err) throw err;
          con.query("SELECT * FROM user", 
          function (err, result, fields) {
            if (err) throw err;
            console.log(result);
          });
        });
}
