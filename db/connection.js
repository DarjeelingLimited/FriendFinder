var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'friends_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log("Connected as id: " + connection.threadid)
});

module.exports = connection; 