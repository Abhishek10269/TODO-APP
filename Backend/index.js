const express = require("express");
const {createTodo,updatedTodo} = require ("./types");
const Todo = require("./db");
const zod = require ("zod");    
const app = express();
const port = 3000;

app.use(express.json());


app.post('/todo', async function (req, res)  {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success)
    {
        res.status(400).json(
            {
              msg : "you sent a wrong inputs whyyy",  
            }
        )
        return ;
    }
    //put it in mongo

   await Todo.create(
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

app.get("/todo", async function (req, res)  {
   const todos =  await Todo.find({});
   res.json(todos);
});

app.listen(port, function ()  {
    console.log("App is running on port. "+port);
})