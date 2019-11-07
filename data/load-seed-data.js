require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const buildings = require('./building-data.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
    
        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            buildings.map(building => {
                return client.query(`
                INSERT INTO buildings(
                    name, built, is_home, location, url, height
                )
                VALUES($1, $2, $3, $4, $5, $6);
                `,
                [building.name, building.built, building.is_home, building.location, building.url, building.height]
                );
                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!
                
            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }
    
}
