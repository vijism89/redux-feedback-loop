const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST request to database 
router.post('/',async (req, res) => {
    console.log('Feedback POST with', req.body);
    const client = await pool.connect();
    try {
        const {
          feelings,
          understanding,
          support,
          comment
        } = req.body;
        await client.query('BEGIN')
        await client.query (`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)`, [feelings, understanding, support, comment]);
        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /feedback', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
    
}); // END Route

router.get('/', (req,res) => {
    let sqlQuery = `
        SELECT * FROM "feedback" ORDER BY "id" DESC;
    `
    pool.query(sqlQuery)
    .then((result) => {
        console.log('response from GET route:', result.rows);
        res.send(result.rows);        
    }).catch((error) => {
        console.log("error in GET route:", error);
        res.sendStatus(500);
    });
})

router.delete('/delete/:id', (req, res) => {
    let sqlQuery = `
        DELETE FROM "feedback"
        WHERE "id" = $1;
    `
    pool.query(sqlQuery, [req.params.id])
    .then((result) => {
        console.log('response from DELETE route:', result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in DELTE route:', error);
        res.sendStatus(500);
    });
})


module.exports = router;