const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/database.config'); // <-- Include in all files you need to use database connection

//Production ready setup
if (process.env.NODE_ENV === 'production') {
    //serve statics file from backend while production
    app.use(express.static(`${__dirname}/public/`));
    app.get(/.*/, (req,res) => res.sendFile(`${__dirname}/public/index.html`));
}

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
    if (error) return console.log(error);
    console.log('Server started at: http://localhost:' + PORT);
});

//Middlewere's
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routers
app.use('/', require('./routes/root.route'));