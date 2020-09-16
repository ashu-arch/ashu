
module.exports.insert_table = function (nm,addr,con) {
    var mysql = require('mysql');
        var sql = 'INSERT INTO customer18 (name, address) VALUES (' + nm + ',' + addr + ')';
        
        con.query(sql, function (err, result) {
            console.log('Entry Inserted');
            if (err) throw err;
            console.log('Entry Inserted');
        });
        
      
};