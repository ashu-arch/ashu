

module.exports.delete_table = function (nm) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Ashu@2703",
        database: "mydb"
      });
      
        var sql = 'DELETE FROM customer18 WHERE name = '+nm;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Entry deleted");
        });
      
};