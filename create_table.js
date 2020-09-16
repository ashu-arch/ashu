<!DOCTYPE html>
<html lang="en"></html>
<body>
  <h1>1. insert</h1>
  <h1>1. delete</h1>
  <h1>1. find</h1>
<script>
var mysql = require('mysql');
var xy = require('./insert_table');
var dt = require('./delete_table');
var ft = require('./find_table');
const { table } = require('console');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ashu@2703",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customer18 (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  var n=10;
  var x=1;
  while(n>0){
    n=n-1;
    x=1;
    var name='"ASHU"',address='"AShu"';
    if(x==1){
      xy.insert_table(name,address,con);
    }
    x=2;
    if(x==2){
      dt.delete_table(name);
    }
    x=3;
    if(x==3){
      ft.find_table(address);
    }
  }
  var sql = "select * from customer18";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  var sql = "DROP TABLE customer18";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });

});
</script>
</body>