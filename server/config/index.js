var mongoose = require('mongoose');
mongoose.connect('mongodb://isama92:12345@ds056559.mlab.com:56559/todolist', function (err) {
    if (err) console.log(err);
    else console.log('Connected to the DB');
});