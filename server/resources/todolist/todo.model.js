var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    done: {
        type: Boolean,
        default: false
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('todolist', todoSchema);