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
    try{
const results= await db.query("select * from restaurants");
console.log(results);
    //changning the status code
    res.status(200).json({
        status:"success",
        result:results.rows.length,
        data:{
        restaurant:results.rows,
        },
    });
}catch(err)
{
    console.log(err);
}
});

//Get a Restaurant
app.get("/api/v1/restaurants/:id",async(req,res)=>
{
    try{
        const results=await db.query("select * from restaurants where id = $1",[req.params.id]);
res.status(200).json({
    status:"success",
    data:{
    restaurant:results.rows[0],
    }
})
    }catch(err)
    {
        console.log(err);
    }

});

//Create a Restaurant
app.post("/api/v1/restaurants",async(req,res)=>
{
    try{
const results=await db.query("insert into restaurants (name,location,price_range) values($1,$2,$3) returning * ",[req.body.name,req.body.location,req.body.price_range] );

console.log(req.body);
res.status(201).json(
    {
        status:"success",
        data:{
        restaurant:results.rows[0]
    }
});
}
    catch(err)
    {
console.log(err)
    }});


//Udate Restaurants
app.put("/api/v1/restaurants/:id",async (req,res)=>{

    try{
const results= await db.query("update restaurants set name= $1,location=$2,price_range=$3 where id=$4 returning *",[req.body.name,req.body.location,req.body.price_range,req.params.id]);
res.status(200).json({
        status:"success",
        data:{
        restaurant:results.rows[0],
        }
    }
    )   


}
    catch(err)
    {
        console.log(err);
    }

}
)

//Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req,res)=>{
    try{
        const results= await db.query("delete from restaurants where id=$1",[req.params.id]);
      res.status(204).json({
            status:"success"
            })
    }
catch(err)
{
    console.log(err);
}
});
    

const port=process.env.PORT||3001;
app.listen(port,()=>{
    console.log(`Server is up and listening on port ${port}`);
});