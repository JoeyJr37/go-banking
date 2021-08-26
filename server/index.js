require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

massive({
    connectionString: process.env.DATABASE_URL || CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
}).then(db => {
    app.set('db', db);
    console.log(`DB connection established!`);
}).catch(err => {
    console.log(`Error connecting to DB: ${err}`);
})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));