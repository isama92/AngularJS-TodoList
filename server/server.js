var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const PORT = 3000;
app.use(bodyParser.json());

require('./config/');
require('./routes/')(app, express, path);

app.listen(PORT, function () {
    console.log('Listening on http:/localhost:' + PORT);
});