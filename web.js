var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // Output direct string
  // response.send('Hello World 2!');
  
  // Output from file : readFileSync returns Buffer
  bufferIndex = fs.readFileSync("index.html", "UTF-8");
  response.send(bufferIndex.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
