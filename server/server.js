var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var livereload = require('livereload');
const PORT = 3000;
var server = livereload.createServer();
server.watch(__dirname + './../client');
app.use(bodyParser.json());

require('./config/');
require('./routes/')(app, express);

app.listen(PORT, function () {
    console.log('Listening on http:/localhost:' + PORT);
});