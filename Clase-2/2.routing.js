const http = require('node:http');
const charizardJSON = require('./Pokemon/charizard.json');
const processRequest = (req, res) => {
  const { url, method } = req;
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/charizard':
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          return res.end(JSON.stringify(charizardJSON));
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404');
      }

    case 'POST':
      switch (url) {
        case '/pokemon':
          let body = '';

          req.on('data', (chunk) => {
            body += chunk.toString(); // convert Buffer to string
          });

          req.on('end', () => {
            const data = JSON.parse(body);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
        //
        default:
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          return res.end('404');
      }
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log('Server running on port 1234');
});
