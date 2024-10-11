import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "mysqluser",
    password: "mysqlpassword",
    database: "evento_db"
})