const express = require('express');
const fs = require('fs');

const router = express.Router();

function badRequest(req, res) {
    res.sendStatus(400);
}

router.route('/blog-post/:blog_id')
.get((req, res) => {
    fs.readFile(`./data/blog-posts/${req.params.blog_id}.json`, (err, data) => {
        if (err) {
            res.sendStatus(500);
            return;
        }

        res.set('Access-Control-Allow-Origin', '*');
        let blog_data = JSON.parse(data);
        res.status(200).json({ content: blog_data.markdown, title: blog_data.title });
    });
})
.all(badRequest);

router.route('/blog-post')
.get((req, res) => {
    fs.readdir('./data/blog-posts', (err, data) => {
        let blog_titles = [ ];
        
        data.sort().reverse().forEach((filename) => {
            if (filename.match(/json$/i)) {
                let blog_data = JSON.parse(fs.readFileSync(`./data/blog-posts/${filename}`));
                blog_titles.push({ file: filename.replace(/\.json$/i, ''), title: blog_data.title });
            }
        });

        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).json({ content: blog_titles });
    })
})
.all(badRequest);

module.exports = router;
