require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
const path = require('path');

const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const PORT = process.env.PORT || 5001;

const { retrieveTransactions, retrieveRecurringDonors } = require('./controllers/transactionsController');
const { register, loginUser } = require('./controllers/loginController');

app.use(express.json());
app.use(express.static(path.join('../build')));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hours
}))

massive({
    connectionString: process.env.DATABASE_URL || CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log(`DB connection established!`);
    // db.seed();
}).catch(err => {
    console.log(`Error connecting to DB: ${err}`);
})


// REGISTRATION ENDPOINTS
app.post('/api/register', register);

// LOGIN / AUTHORIZATION ENDPOINTS
app.post('/api/login', loginUser);

// RETRIEVE TRANSACTIONS ENDPOINTS
app.get('/api/account', retrieveTransactions);
app.get('/api/account/recurring', retrieveRecurringDonors);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));