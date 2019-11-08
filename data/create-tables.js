// load connection string from .env
require('dotenv').config();
// "require" pg (after `npm i pg`)
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// **note:** you will need to create the database!

// async/await needs to run in a function
run();

async function run() {
    // make a new pg client to the supplied url
    const client = new Client(process.env.DATABASE_URL);

    try {
        // initiate connecting to db
        await client.connect();
    
        // run a query to create tables
        await client.query(`
            CREATE TABLE buildings (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL,
                built VARCHAR(256) NOT NULL,
                is_home BOOLEAN 
                location VARCHAR(256) NOT NULL,
                url VARCHAR(256) NOT NULL,
                height VARCHAR(256) NOT NULL
            )
        `);

        console.log('create tables complete');
    }
    catch (err) {
        // problem? let's see the error...
        console.log(err);
    }


    finally {
        // success or failure, need to close the db connection
        client.end();
    }
    
}