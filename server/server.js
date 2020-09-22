require("dotenv").config()
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
console.log(req.params.id);
});

//Create a Restaurant
app.post("/api/v1/restaurants",(req,res)=>
{
console.log(req.body);
});

//Udate Restaurants
app.put("/api/v1/restaurants/:id",(req,res)=>{
console.log(req.params.id)
console.log(req.body);
}
)

const port=process.env.PORT||3001;
app.listen(port,()=>{
    console.log(`Server is up and listening on port ${port}`);
});