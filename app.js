const client = require('./database');

(async () => {
    await client.connect();
    const result = await client.query(`INSERT INTO TheUser 
            VALUES($1, $2, $3, $4) RETURNING UserID`, ['Nick', 'Password123', 'token1', 'mypic.jpg']);
    console.log(result.rows);
    client.end();
})();
