var path = require('path');
module.exports = function (app, express) {

    app.use('/', express.static(path.join(__dirname, '..', '..', 'client')));
    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap', 'dist')));
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/angular-ui-router', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-ui-router', 'release')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..', 'node_modules', 'jquery', 'dist')));
    app.use('/font-awesome', express.static(path.join(__dirname, '..', '..', 'node_modules', 'font-awesome')));
    app.use('/js', express.static(path.join(__dirname, '..', '..', 'client', 'include', 'js')));
    app.use('/css', express.static(path.join(__dirname, '..', '..', 'client', 'include', 'css')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'client', 'include', 'images')));
    app.use('/angular-animate', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-animate')));
    app.use('/angular-aria', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-aria')));
    app.use('/angular-material', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular-material')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'));
    })

    app.use('/api/todolist', require('./../resources/todolist/'));
}