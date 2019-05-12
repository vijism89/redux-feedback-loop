const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.delete('/:id', (req, res) => { 
    console.log(req.params.id);  
    // TODO: Use filter to remove the artist
    // let artist = artists.filter(artist => artist.id == req.params.id);
    //  console.log(artist);
    //  artists.splice( artists.indexOf ( artist ),1);
    // res.send(200);
});

// GET all the books
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
    
}); // END GET Route

// GET all the books
router.get('/', (req, res) => {
    //res.send(artists);
}); // END GET Route


module.exports = router;