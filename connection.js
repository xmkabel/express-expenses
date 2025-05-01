const mysql = require('mysql')
const connection = mysql.createConnection(keys)
const keys = {
    host: "localhost",
    username: "root",
    password: "",
    database: "cars_db"
}

module.exports = connection