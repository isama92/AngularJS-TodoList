var path = require('path');
module.exports = function (app, express) {

    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap', 'dist')));
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/angular-ui-router', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-ui-router', 'release')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..', 'node_modules', 'jquery', 'dist')));
    app.use('/js', express.static(path.join(__dirname, '..', '..', 'client', 'include', 'js')));
    app.use('/css', express.static(path.join(__dirname, '..', '..', 'client', 'include', 'css')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'client', 'include', 'images')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
    })

    app.use('/api/todolist', require('./../resources/todolist/'));
}