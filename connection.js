const mysql = require('mysql')
const keys = {
    host: "localhost",
    user: "root",
    password: "",
    database: "expenses_db"
}
const connection = mysql.createConnection(keys)

module.exports = connection