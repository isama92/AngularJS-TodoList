module.exports = function (app, express, path) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'))
    });
}