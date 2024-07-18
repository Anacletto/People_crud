// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'CoderLife',
  database: 'peoplecrud'
});

module.exports = connection;
