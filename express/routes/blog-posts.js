const express = require('express');
const fs = require('fs');
const path = require('path');
const mongo = require('mongodb'),
    MongoClient = mongo.mongoClient,
    mongoURL = 'mongodb://localhost:27017',
    dbName = 'mfryer';

const router = express.Router();

function badRequest(req, res) {
    res.sendStatus(400);
}

router.route('/blog-post/:blog_id')
.get((req, res) => {
    fs.readFile(`./data/blog-posts/${req.params.blog_id}.md`, (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }

        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).json({ content: data.toString() });
    });
})
.all(badRequest);

module.exports = router;
