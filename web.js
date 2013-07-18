var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

app.get('/', function(request, response) {
  var buffer = fs.readFileSync("index.html"); 
  var data = buffer.toString("utf8", 0, buffer.length);
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
