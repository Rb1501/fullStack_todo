const mongoose = require("mongoose");

mongoose.connect("");

const todoSchemea = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Todo = mongoose.model("Todo", todoSchemea);
module.exports={
    Todo: Todo
};