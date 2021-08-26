require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const path = require('path');

const { CONNECTION_STRING } = process.env;
const PORT = process.env.PORT || 5001;

const { retrieveTransactions, retrieveRecurringDonors } = require('./controllers/transactionsController');

app.use(express.json());
app.use(express.static(path.join('../build')));

massive({
    connectionString: process.env.DATABASE_URL || CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log(`DB connection established!`);
}).catch(err => {
    console.log(`Error connecting to DB: ${err}`);
})

// ENDPOINTS

// REGISTRATION

// LOGIN / AUTHORIZATION
// app.post('/api/login', loginUser);

// RETRIEVE TRANSACTIONS
app.get('/api/my-account/:id', retrieveTransactions);
app.get('/api/my-account/recurring/:id', retrieveRecurringDonors);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));