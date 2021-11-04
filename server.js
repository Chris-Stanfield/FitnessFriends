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

app.get('/*', (req, res) => { res.sendFile('index.html', { root: 'dist/software-engineering-team-project-fourtothefloor/' }) });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {console.log(`server is on ${ PORT }.`)});
