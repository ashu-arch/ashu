
module.exports.find_table = function (addr) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Ashu@2703",
        database: "mydb"
      });
      
        var sql = 'SELECT * FROM customer18 WHERE address = '+addr;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
        });
      
};


