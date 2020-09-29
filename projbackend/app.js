const mongoose = require('mongoose');
const express = require('express');


mongoose.connect("mongodb://localhost:27017/test",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})

const app = express();



const port = 8000;





app.listen(port, ()=> {
    console.log(`App is running at ${port}`);
})