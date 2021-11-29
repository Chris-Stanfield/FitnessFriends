//Install express server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const app = express();
const db = require("./src/app/models");



var corsOptions = {origin: "http://localhost:8081"};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
db.sequelize.sync();

// Serve only the static files form the dist directory
app.use(express.static('./dist/Fitnessfriends'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/Fitnessfriends/' }),
);

app.listen(PORT, () => {console.log(`server is on ${ PORT }.`)});

// Connecting in Node.js heroku-postgresql
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * FROM post;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
