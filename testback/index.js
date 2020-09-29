const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => res.send('Home Page'));

app.get('/login', (req, res)=>res.send('Welcome to login page'));
app.get('/signup', (req, res)=>res.send('Welcome to signup page'));

app.get('/logout', (req, res)=>res.send('You have successfully logout'));

app.listen(port, ()=>console.log("server is up and running"))
