//jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    //callback function tells what to do when it gets "/"
    //request is the type of request we did for the server
    //response is what we give when we request the server
    console.log('you did it');
    res.sendFile(__dirname+'/index.html')
});

app.post("/", function(req, res){
    console.log(req.body.num1);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send('The result of the calculation is ' + result);
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
