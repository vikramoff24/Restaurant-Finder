require("dotenv").config()
const express=require("express")
const app=express()

// Get all Restaurants
app.get("/api/v1/restaurants",(req,res)=>
{
    //changning the status code
    res.status(200).json({
        status:"success",
        data:{
        restaurant:["mcdonals","kfc"]
        }
    });
})


const port=process.env.PORT||3001;
app.listen(port,()=>{
    console.log(`Server is up and listening on port ${port}`);
});