var express = require('express');
var app = express();
 
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
 
app.post('/submit-student-data', function (req, res) {
    var name = req.body.fname + ' ' + req.body.lname;
    res.send(name + ' Submitted Successfully!');
});
 
var server = app.listen(3000, function () {
    console.log('Node server is running..');
});