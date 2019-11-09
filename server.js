require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

app.get('/api/buildings', async(req, res) => {
    try {
        const result = await client.query(`
            SELECT
                b.*,
                ih.ishome as ishome
            FROM buildings b
            JOIN ishome ih
            ON b.is_home_id = ih.id;
        `);
        console.log(result.rows);
        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.post('api/buildings', async(req, res) => {
    const building = req.body;
    try{
        const result = await client.query(`
            INSERT INTO buildings
                name,
                built,
                is_home_id,
                location,
                url,
                height,
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `)
        [building.name, building.built, building.is_home_id, building.location, building.url, building.height];
        res.json(result.rows[0]);
    }
    catch (e){
        console.log(e);
    };
});

app.get('api/ishome', async(req, res) => {
    try {
        const result = await client.query(`
        SELECT
            id
            ishome
        FROM ishome;
        `);
        res.json(result.rows);
    }
    catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log('server runnong on port ' + PORT);
});