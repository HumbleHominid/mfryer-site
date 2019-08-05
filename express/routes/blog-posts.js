const express = require('express');
const view_logger = require('../middleware/view_logger');
const fs = require('fs');

const router = express.Router();

function badRequest(req, res) {
    res.sendStatus(400);
}

router.use('/blog-post/:blog_id', view_logger);

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

router.use('/blog-post', view_logger);

router.route('/blog-post')
.get((req, res) => {
    fs.readdir('./data/blog-posts', (err, data) => {
        let blog_data = [ ];
        
        data.sort().reverse().forEach((filename) => {
            if (filename.match(/md$/i)) {
                let blog_post = fs.readFileSync(`./data/blog-posts/${filename}`).toString();
                blog_data.push({
                    file: filename.replace(/\.md$/i, ''),
                    title: blog_post.substring(2, blog_post.indexOf('\n'))
                });
            }
        });

        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).json({ content: blog_data });
    })
})
.all(badRequest);

module.exports = router;
