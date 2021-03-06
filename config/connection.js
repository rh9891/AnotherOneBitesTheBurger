// Sets up MySQL connection. The connection will be retrieving data from the burger_db database. The port, host, user name, and password are provided.
const mysql = require("mysql");

// Establishes the MySQL connection with Heroku.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQLKEY,
    database: "burger_db"
  });
};
  

// Establishes the connection between node and MySQL. Lets the user know that the connection is made by providing an ID number.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use.
module.exports = connection;