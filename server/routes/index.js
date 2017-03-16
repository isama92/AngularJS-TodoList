module.exports = function (app, express) {
    app.use('/api/todolist', require('./../resources/todolist/'));
}