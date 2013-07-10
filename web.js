var express = require('express');
var fs = require('fs');
var buf = require('buffer');
var index = fs.readFileSync('/index.html', encoding);
//var text = buf.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
