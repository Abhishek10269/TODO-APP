const mongoose = require ("mongoose");
const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: boolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo
}