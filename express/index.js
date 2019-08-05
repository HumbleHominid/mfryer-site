//---------------------------------
//- Built-In Node Module Requires -
//---------------------------------
const path = require('path');

//------------------------
//- Node Module Requires -
//------------------------
const express = require('express');

//---------------------
//- Additional Routes -
//---------------------
const routes = [
    require('./routes/blog-posts.js'),
    require('./routes/resume.js')
];

//--------------------
//- Script Constants -
//--------------------
const app = express();
const port = 3000;
let uri;

if (process.argv.includes('--prod')) {
    uri = 'http://mfryer.us/node';
}
else {
    uri = `localhost:${port}`;
}

//-------------------
//- Server Listener -
//-------------------
app.listen(port, () => {
    console.log(`Listening at "${uri}"`);
});

//--------------------
//- App Static Files -
//--------------------
routes.forEach((route) => { app.use(route) });

//-----------------
//- Set up Routes -
//-----------------

// All other routes
app.route('*')
.get((req, res) => res.status(404).send('Page not Found'))
.all((req, res) => res.sendStatus(400));
