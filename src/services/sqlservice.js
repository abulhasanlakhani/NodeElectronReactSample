const Connection = require("tedious").Connection
// const Request = require("tedious").Request
// const async = require('async');

const config = {
    // Host or Machine name in this instance
    // Might try using FQDN or IP of SQL Server on your network
    // Can either be 'NZDEVBULL2' or 'localhost' if SQLEXPRESS is installed on your own machine
    // If on KIWINZ network use NIX or NZSTYX or whatever
    server: 'localhost',

    options: {
        database: 'AdventureWorks',
        
        // This option is only required if you're using SQL Server Express 
        // with named instance, which is the default setting
        // Together with the 'server' option this will make up to 'NZDEVBULL2\SQLEXPRESS'
        instanceName: 'SQLEXPRESS',
        
        // These two settings are really important to make successfull connection
        encrypt: false,
        trustServerCertificate: true,

        // This will allow you to access the rows returned. 
        // See 'doneInProc' event below
        rowCollectionOnDone: true
    },
    
    authentication: {
        // Use Windows Authentication
        // Set to 'default' to use SQL Server Authentication
        type: 'ntlm',
        
        options: {
            // Make sure to set this when you set 'type' as 'ntlm' or Windows Authentication
            domain: 'KIWINZ',
            
            // username along with the domain will make up the complete login for SQL Server like
            // domain\username e.g. KIWINZ\SQA in our case
            userName: 'SQA',
            password: 'robot'
        }
    }
}

let connection;

const GetProducts = () => {
    connection = new Connection(config)

    connection.connect()
    
    connection.on('connect', function (err) {
        if (err) {
            console.log('Error: ', err)
        } else {
            // If no error, then good to go...
            console.log('Connection Successful!')
        }
    })
}

module.exports.GetProducts = GetProducts