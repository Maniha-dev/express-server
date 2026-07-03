const express = require ("express");

const app = express();

app.get('/', (req, res) => {
    return res.send(`Hello, ${req.query.name}`)
});
app.get('/about', (req, res) =>{
    return res.send("/Hello from about!")
});
app.get('/services', (req, res) =>{
    return res.send("/Our service!")
});
app.get('/Joinus', (req, res) =>{
    return res.send("Wanna Join Us!")
});

app.listen (8000,() => console.log("Sab set chal raa!"));