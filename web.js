var express = require('express');
var fs = require('fs');
var fileName = "index.html";

var index = fs.readFileSync(fileName);

var string = index.toString("utf8",0, index.length);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
