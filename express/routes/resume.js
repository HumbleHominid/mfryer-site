const express = require('express');
const fs = require('fs');
const path = require('path');
const resume_path = './data/resume.pdf';

const router = express.Router();

function badRequest(req, res) {
    res.sendStatus(400);
}

router.route('/resume')
.get((req, res) => res.download(resume_path), 'resume.pdf')
.all(badRequest);

module.exports = router;