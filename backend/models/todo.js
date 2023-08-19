const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
   
});


let ToDoDATA = mongoose.model('todolist', TodoSchema);

module.exports = ToDoDATA;