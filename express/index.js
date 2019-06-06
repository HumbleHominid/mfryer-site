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
    require('./routes/blog-posts.js')
];

//--------------------
//- Script Constants -
//--------------------
const app = express();
let namespace;
let hostname;
const port = 3000;

if (process.argv.includes('--prod')) {
    namespace = 'api';
    hostname = 'mfryer.us';
}
else {
    namespace = '';
    hostname = 'localhost';
}

const uri = (namespace ? `${namespace}.` : '') + `${hostname}:${port}`; 

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

// Include the users routes

// All other routes
app.route('*')
// Define get requests to 404
.get((req, res) => {
    res.status(404).send('Page not Found');
})
.all(badRequest);

