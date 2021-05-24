// Make sure this uses Node.js, not vanilla Javascript

var http = require("http")
var fs = require('fs')

var hasNotification = false;
var index = fs.readFileSync('index.html');

http.createServer(function(req, res) {
  if (req.method == "GET") {
     if(req.url == '/trigger') {
       hasNotification = true;
       res.writeHead(200);
       res.end('');
     } else if(req.url == '/get') {
       res.setHeader("Content-Type", "application/json");
       res.writeHead(200);
       res.end(`{"hasNotification": ${hasNotification}}`);
       hasNotification = false;
     } else {
       res.writeHead(200, { 'content-type': 'text/html' })
       res.end(index);
     }
  } else {
    res.end('');
  }
}).listen(8080)
