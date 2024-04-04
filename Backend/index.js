const express = require("express");
const {createTodo} = require ("./types");
const {updateTodo} = require ("./types");
const {todo} = require("./db");
const zod = require ("zod");
const app = express();
const port = 3000;

app.use(express.json());


app.post("todo/", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success)
    {
        res.status(400).json(
            {
              msg : "you sent a wrong inputs",  
            }
        )
        return ;
    }
    //put it in mongo

   await todo.create(
        {
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        }
    )
    res.json({
        msg: "Todo created"
    })


})

app.get("todo/", async (req, res) => {
   const todos =  await todo.find({});

})

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success)
    {
        res.status(400).json(
            {
              msg : "you sent a wrong inputs",  
            }
        )
        return ;
    }
    await todo.update({
        _id:req.body.id},
        {completed:true}
        )

        res.json(
            {
                msg: "Todo marked as completed"
            }
        )

})

app.listen(port, () => {
    console.log("App is running on port. "+port);
})