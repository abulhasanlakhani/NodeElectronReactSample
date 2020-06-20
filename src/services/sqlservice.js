const Connection = require("tedious").Connection
// const Request = require("tedious").Request
// const async = require('async');

const config = {
    server: 'NZDEVBULL2',
    authentication: {
        type: 'ntlm',
        options: {
            domain: 'KIWINZ',
            userName: 'SQA',
            password: 'robot'
        }
    },
    options: {
        database: 'AdventureWorks',
        instanceName: 'SQLEXPRESS',
        encrypt: false,
        trustServerCertificate: true,
        rowCollectionOnDone: true
    }
}

let connection;

connection = new Connection(config);

connection.connect()

connection.on('connect', function (err) {
    if (err) {
        console.log('Error: ', err)
    } else {
        // If no error, then good to go...
        console.log('Connection Successful!')
    }
});