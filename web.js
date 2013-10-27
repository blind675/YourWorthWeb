var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(request, response) {
  response.send(readFileToString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var readFileToString = function() {
    var buffer = new Buffer(32);
    buffer = fs.readFileSync('index.html');
    return buffer.toString();
};