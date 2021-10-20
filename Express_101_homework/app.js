const express = require('express');
const app = express();
const port = 3000;

// Hello World
app.get('/', (req,res)=>{
    res.send('Hello World')
})

// Routes
app.get('/cats', (req,res)=>{
    res.send('meow')
})
app.get('/dogs', (req,res)=>{
    res.send('woof')
})
app.get('/cats_dogs', (req,res)=>{
    res.send('Living Together')
})

// Route Parameters
app.get('/greet/:name-:age', (req,res)=>{
    let name = req.params.name
    let date = 2021 - parseInt(`${req.params.age}`)
    res.send(`Hello, ${name}. You were born in ${date}`)
})

app.listen(port, ()=>{
    console.log('Running on port 3000');
})