const client = require('./database');

(async () => {
    await client.connect();
    const result = await client.query(`select * from post`);
    console.log(result.rows);
    client.end();
})();
