# NodeElectronReactArticle

## Setup Instructions:

* Clone this repository
* Run `npm install` to install all the packages and dependencies
* Create a environment *(.env)* file with all the required variables at the root **(See below)**
* Run `npm start`

## Environment Variables:

In order for us to connect to the database and query it we will require credentials. This sample application uses [Dotenv](https://github.com/motdotla/dotenv) to store all the environment variables that are likely to vary between deploys (staging, production, developer environments, etc). This includes:

* Resource handles to the database, Memcached, and other backing services
* Credentials to external services such as Amazon S3 or Twitter
* Per-deploy values such as the canonical hostname for the deploy

Create the following environment variables that are required to use [TediousJS](http://tediousjs.github.io/tedious/index.html) correctly and connect our database server, as shown:

```dosini
# Host or Machine name in this instance
# Might try using FQDN or IP of SQL Server on your network
# Can either be your machine name or the machine on the network
# or 'localhost' if SQLEXPRESS is installed on your own machine
# If you on corporate domain network use your own internal SQL Server name
DB_SERVER=server
DB_USERNAME=username
DB_PASSWORD=password
DB_DOMAIN=domain
DB_DBNAME=databaseName
DB_INSTANCENAME=instanceName
DB_AUTHTYPE=authenticationtype
```

Please see the documentation **[Here](http://tediousjs.github.io/tedious/api-connection.html)** to see all the available config options.

## Contributing Guide

See [CONTRIBUTING.md](CONTRIBUTING.md)

## Code of Conduct

See [code-of-conduct.md](code-of-conduct.md)