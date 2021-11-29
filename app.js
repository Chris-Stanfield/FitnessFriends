const client = require('./database');

(async () => {
    await client.connect();
    const result = await client.query(`SELECT userid FROM TheUser WHERE token='token2'`);
    console.log(result.rows);
    client.end();
})();
