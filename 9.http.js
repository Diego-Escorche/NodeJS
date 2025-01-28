const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log('Request received');
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
