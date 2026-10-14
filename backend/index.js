const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());




app.post("/todo", async function(req, res){
    const createpayLoad = req.body
    const parsePayload = createTodo.safeParse(createpayLoad);
    if(!parsePayload.success){
        res.status(400).json({
            msg: "you sent the wrong input"
        })
        return;
    } 
     await Todo.create({
        title:createpayLoad.title,
        description: createpayLoad.description,
        completed: false
     })
     res.json({
        msg: "todo created"
     })

})

app.get("/todos", async function(req, res){
   const todos = await Todo.find({});
   res.json({
    todos
   })
    

})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(400).json({
            msg:"you sent the  wrong input"
        })
        return;


    }
     await Todo.updateOne({
        _id: req.body.id},
       {$set:{ completed: req.body.completed } })
     res.json({
      msg:"todo marked as completed"
})


})

app.listen(3000, function(){
    console.log("server is running successfully")
})