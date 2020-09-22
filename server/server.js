require("dotenv").config()
const express=require("express");
const morgan=require("morgan");
const app=express();

//Middleware-should be placed top //we can have any number of middleware
// app.use(morgan("tiny"));

// app.use((req,res,next)=>
// {
// console.log(something);
// next();
// });

// Get all Restaurants
app.get("/api/v1/restaurants",(req,res)=>
{
    console.log("route handler");
    //changning the status code
    res.status(200).json({
        status:"success",
        data:{
        restaurant:["mcdonals","kfc"]
        }
    });
});

//Get a Restaurant
app.get("/api/v1/restaurants/:id",(req,res)=>
{
console.log(req.params);
});

//Create a Restaurant
app.post("/api/v1/restaurants",(req,res)=>
{
console.log(req);
});

const port=process.env.PORT||3001;
app.listen(port,()=>{
    console.log(`Server is up and listening on port ${port}`);
});