const express = require("express");
const app = express();
const port =8080;

app.use(express.urlencoded({extended:true}));// middle wayer
app.use(express.json());

app.get("/register",(req,res)=>{
    let{user,password}=req.query;
    res.send(`standaard get response ${user}`)
})
app.post("/register",(req,res)=>{
    let {user,password}=(req.body);
    
    res.send(`standaard post response, welcome ${user}`)
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});