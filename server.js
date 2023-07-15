const http = require('http');
const fs = require('fs')
const url = require('url');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const q = url.parse(req.url, true);
  if (q.pathname === '/') {
    fs.readFile("./index.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if (q.pathname === '/about-me') {
    fs.readFile("./about-me.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if (q.pathname === '/contact') {
    fs.readFile("./contact.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else  {
    fs.readFile("./404.html", function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log('');
});