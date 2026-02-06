const mysql = require("mysql2")
const dotenv = require("dotenv")

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
db.connect((error) => {
    if (error) {
        console.log({
            message: "dB not connected",
            error: error.message
        });
    }
    else {
        console.log("data base connected successfully");
    }
})
module.exports = db;
