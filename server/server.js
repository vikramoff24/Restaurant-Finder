const db = require('./db');
require("dotenv").config();
const express=require("express");
const morgan=require("morgan");
const app=express();

//Middleware-should be placed top //we can have any number of middleware
// app.use(morgan("tiny")); //third party middle ware. //next function is already passed

// app.use((req,res,next)=>
// {
// console.log("1st middleware");
// // next();//tell to send the flow to next middleware or final route handler 
// });
//app.use((req,res,next)=>
// {
// console.log(2nd middleware);
// next();//tell to send the flow to next middleware or final route handler 
// })

app.use(express.json());


// Get all Restaurants
app.get("/api/v1/restaurants",async(req,res)=>
{
const result= await db.query("select * from restaurants");

    console.log(result);
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
console.log(req.params.id);
res.status(200).json({
    status:"success",
    data:{
    restaurant:["kfc"]
    }
})
});

//Create a Restaurant
app.post("/api/v1/restaurants",(req,res)=>
{
console.log(req.body);
res.status(201).json(
    {
        status:"success",
        data:{
        restaurant:["kfc"]
    }

});
});


//Udate Restaurants
app.put("/api/v1/restaurants/:id",(req,res)=>{
console.log(req.params.id)
console.log(req.body)
res.status(200).json({
        status:"success",
        data:{
        restaurant:["kfc"]
        }
    }
    )
}
)

//Delete Restaurant
app.delete("/api/v1/restaurants/:id",(req,res)=>{

res.status(204).json({
            status:"success"
            }
        )
    });
    

const port=process.env.PORT||3001;
app.listen(port,()=>{
    console.log(`Server is up and listening on port ${port}`);
});