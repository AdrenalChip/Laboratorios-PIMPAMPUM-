const mysql= require("mysql2");


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ejemplo',
    password: ''
});

module.exports = pool.promise();