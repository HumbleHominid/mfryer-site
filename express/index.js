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
let uri;
const port = 3000;

if (process.argv.includes('--prod')) {
    uri = 'http://mfryer.us/node'
}
else {
    uri = 'localhost:3000'
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
// Bad request
function badRequest(req, res) {
    res.status(400).send('Bad Request');
}

// All other routes
app.route('*')
// Define get requests to 404
.get((req, res) => {
    res.status(404).send('Page not Found');
})
.all(badRequest);

