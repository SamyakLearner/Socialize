var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // db password
    password: 'bpit9868',
    // db instance name 
    database: 'socialize'
})
connection.connect();
console.log("connected to db");
module.exports = connection;
