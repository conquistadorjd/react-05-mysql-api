var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'mysql-rfam-public.ebi.ac.uk',
    port     : 4497,
    user     : 'rfamro',
    password : '',
    database : 'Rfam',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to MySQL");

});

module.exports = connection;