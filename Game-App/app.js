const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
	res.render("index");
});

app.get("/ttt",function(req,res){
    res.render("tictactoe");
})

app.get("/single",function(req,res){
    res.render("tictactoesingle");
})

app.get("/rps",function(req,res){
    res.render("rps");
})

app.listen(process.env.PORT || 3000,function(){
    console.log("successfully running on port ");
});

