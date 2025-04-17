// index.js

const http = require('http');

const PORT = 8080;

const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from your Jenkins-deployed Node.js app!');
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
