var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const PORT = 3000;
app.use(bodyParser.json());

require('./config/');
require('./routes/')(app, express);

app.listen(PORT, function () {
    console.log('Listening on http:/localhost:' + PORT);
});