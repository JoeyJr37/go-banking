const { DB_USER, DB_PASSWORD, DB_SERVER, DB_NAME } = process.env;

const retrieveTransactions = (req, res ) => {
    //  const { id } = req.session.user;
    const id = '248301';

    const sql = require('mssql');

    // configure database
    const config = {
        user: DB_USER,
        password: DB_PASSWORD,
        server: DB_SERVER,
        database: DB_NAME
    };

    const query = `SELECT antioch.individualdimensionview.IndividualProfileId, antioch.individualdimensionview.FullName, antioch.appliedpaymentdetailfactview.Amount, antioch.appliedpaymentdetailfactview.DepositDate, antioch.appliedpaymentdetailfactview.IsRecurringOrNotRecurring FROM antioch.appliedpaymentdetailfactview INNER JOIN antioch.individualdimensionview ON (appliedpaymentdetailfactview.IndividualProfileId = individualdimensionview.IndividualProfileId) WHERE DesignationId = ${id} ORDER BY antioch.appliedpaymentdetailfactview.DepositDate DESC;`;

    sql.connect(config, function(err){
        if (err) console.log(err);

        const request = new sql.Request();
        request.query(query)
            .then(response => res.status(200).send(response))
            .catch(err => console.log(err));
        });
}

retrieveRecurringDonors = (req, res ) => {

    //  const { id } = req.session.user;
    const id = '248301';

    const sql = require('mssql');

    // configure database
    const config = {
        user: DB_USER,
        password: DB_PASSWORD,
        server: DB_SERVER,
        database: DB_NAME
    };

    const query = `SELECT individualdimensionview.FullName, recurringgiftview.DesignationId, 
    recurringgiftview.IndividualProfileId, recurringgiftview.FrequencyTypeName, 
    recurringgiftview.CommitmentStatusTypeName FROM antioch.recurringgiftview INNER JOIN antioch.individualdimensionview
    ON (recurringgiftview.IndividualProfileId = individualdimensionview.IndividualProfileId)
    WHERE recurringgiftview.Designationid = ${id};`;

    sql.connect(config, function(err){
        if (err) console.log(err);

        const request = new sql.Request();
        request.query(query)
            .then(response => res.status(200).send(response))
            .catch(err => console.log(err));
        });
}



module.exports = {
    retrieveTransactions, retrieveRecurringDonors
}