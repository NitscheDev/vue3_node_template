const mysql = require('mysql');

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});


if (!process.env.DB_HOST || process.env.DB_NAME || process.env.DB_USER) {
    return console.log('MYSQL: Database credentials not found in .env file');
} else {
    database.connect(error => {
        if (error) return console.log('MYSQL: ' + error);
        console.log('MYSQL: Database connected');
    });
}

module.exports = database;