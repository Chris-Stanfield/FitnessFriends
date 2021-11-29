const { Client } = require('pg');

const client = new Client({
    host: "ec2-3-226-134-153.compute-1.amazonaws.com",
    port: 5432,
    user: "tuyzdizyzkxmec",
    password: "501ac44f2b8da7a1c435c59b3c0bb8e3cb3b3595d593d08a7a3569785eda4072",
    database: "db890rvnm6jjqq",
    ssl: {rejectUnauthorized: false}
})

client.on("connect", ()=> {
    console.log("Database connection");
})

client.on("end", () => {
    console.log("Connection end");
})

module.exports = client;

// client.connect();

// client.query( `select * from post`, (err, result) => {

//     if(!err) {
//         console.log(result.rows)
//     }
//     client.end();
// })