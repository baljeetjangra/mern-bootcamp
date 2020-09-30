const dotenv = require('dotenv')
dotenv.config();

const mongoose = require('mongoose');
const express = require('express');


mongoose.connect(process.env.DATABASE,
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
.then(()=>{
    console.log("DB CONNECTED")
})
.catch((err)=>{
    console.log(err)
})

const app = express();



const port = process.env.PORT || 8000;





app.listen(port, ()=> {
    console.log(`App is running at ${port}`);
})