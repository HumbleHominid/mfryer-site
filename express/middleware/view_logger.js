const fs = require('fs');

const view_file = './views.json';

function view_logger(req, res, next) {
    fs.readFile(view_file, (err, data) => {
        let json_data;
        
        if (err) json_data = {};
        else json_data = JSON.parse(data.toString());

        if (req.originalUrl in json_data) json_data[req.originalUrl]++;
        else json_data[req.originalUrl] = 1;
        
        let string_data = JSON.stringify(json_data);

        fs.writeFile(view_file, string_data, (err) => {
            if (err) throw err
        });
    });

    next();
}

module.exports = view_logger;