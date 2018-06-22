const mysql = require ('mysql')
//initalize database connection
const serverSecrets = require('./config/secrets');

/**
 * 
 * Creates a database connection and then exports the value as mysql01
 * 
 */

let mysql01 = mysql.createConnection(serverSecrets.mysql, (err) => {
    if (err) 
      res.send("There was an issue connecting to the mysql server.");
})


module.exports = mysql01;
