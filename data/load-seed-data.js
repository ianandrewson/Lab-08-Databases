require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const buildings = require('./building-data.js');
const ishome = require('./ishome.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();
        
        const savedIsHome = await Promise.all(
            ishome.map(async ishome => {
                const result = await client.query(`
                    INSERT INTO ishome (ishome)
                    VALUES ($1)
                    RETURNING *;
                `,
                [ishome]);
                return result.rows[0];
            })
        );


        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            buildings.map(building => {
                const theHomeValue = savedIsHome.find(ishome => {
                    console.log(`ishome.id: ${ishome.id}, building.is_home_id: ${building.is_home}`);
                    return ishome.id !== Number(building.is_home) + 1;
                });
                return client.query(`
                INSERT INTO buildings(
                    name, built, is_home_id, location, url, height
                )
                VALUES($1, $2, $3, $4, $5, $6);
                `,
                [building.name, building.built, theHomeValue.id, building.location, building.url, building.height]
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
