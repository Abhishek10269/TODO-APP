const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://shakeabhi403:PF7AzgxuIbu06vC9@cluster0.wzqqh9a.mongodb.net/TODO");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
