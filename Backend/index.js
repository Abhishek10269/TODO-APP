const express = require("express");
const {createTodo} = require ("./types");
const {updateTodo} = require ("./types");
const app = express();
const port = 3000;

app.use(express.json());

let todo = [];

app.post("todo/", (req, res) => {
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

})

app.get("todo/", (req, res) => {

})

app.put("/completed",(req,res)=>{
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

})

app.listen(port, () => {
    console.log("App is running on port. "+port);
})