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
    }
    /*,    CAMPO DATA PER IL COMMENTO DEL PRE SAVE, VALUE DI DEFAULT DI DATA
        data: {
            type: Date,
        }*/
});

/*
    default value:
    todoSchema.pre('save', function(next){
        if(!this.data)
            this.data = new Date();
        next();
    })
*/
module.exports = mongoose.model('todolist', todoSchema);