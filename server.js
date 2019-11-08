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
                id,
                name,
                built,
                is_home,
                location,
                url,
                height
            FROM buildings;
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

app.get('api/ishome', async(req, res) => {
    try {
        const result = await client.query(`
        SELECT
            id,
            name,
            is_home
        FROM 
        `)
    }
    catch {

    }
});

app.listen(PORT, () => {
    console.log('server runnong on port ' + PORT);
})