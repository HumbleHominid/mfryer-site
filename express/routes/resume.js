const express = require('express');
const fs = require('fs');
const path = require('path');
const resume_url = './data/resume.pdf';

const router = express.Router();

function badRequest(req, res) {
    res.sendStatus(400);
}

router.route('/resume')
.get((req, res) => {
    let file = fs.createReadStream(resume_url);
    let stat = fs.statSync(resume_url);
    
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');

    file.pipe(res);
})
.all(badRequest);

module.exports = router;