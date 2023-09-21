// const valid=require('validator')


// console.log(valid.isEmail("beso@gmail.com"))

const express = require('express');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');
var todorouter = require('./routes/todo.js');
//middelware
app.use(express.json());
app.use('/todo',todorouter)
app.use(function(req, res, next) {
    // console.log(req.body);
    next();
}); 
app.use(express.static('./static'))




mongoose.connect("mongodb://127.0.0.1/TodoDB").then(()=>{
console.log("Connected to Mongo");
})
var port=3333;
app.listen(port,()=>{
    console.log('listening on port is susses')  
})