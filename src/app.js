const express = require('express');
const server = express();
const start = () => console.log('Starting server');
const port = process.env.PORT || 3001;
server.listen( port,start());

const path = require('path');
const public = path.join(__dirname, '../public')
const statics = express.static(public)
server.use(statics)

server.get('/home', function(req,res){
    let file = path.join(__dirname , '/views/home.html')
    res.sendFile(file)
});
server.get('/login', function(req,res){
    let file = path.join(__dirname , '/views/login.html')
    res.sendFile(file)
})
server.get('/register', function(req,res){
    let file = path.join(__dirname , '/views/register.html')
    res.sendFile(file)
})