const express = require('express');
const resume_path = './data/resume.pdf';
const view_logger = require('../middleware/view_logger');

const router = express.Router();

router.use('/resume', view_logger);

router.route('/resume')
.get((req, res) => res.download(resume_path, 'resume.pdf'))
.all((req, res) => res.sendStatus(400));

module.exports = router;