const express = require("express");
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const path = require('path');
const url = require('url');
const fs = require('fs');

app.use(express.static('public'));

app.listen(8080, () => {
    console.log(`Server running on port ${8080}`);
  });

app.get('/TDW', function(req, res) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.sendFile(__dirname + "/TDW/" + "playground.html");
    //res.end();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname + "/" + "main.html");
});
