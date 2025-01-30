const http = require('node:http');
const fs = require('node:fs');
const port = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.url === '/') {
    // By default the status code is 200
    res.end('A continuación vamos a probar las tíldes: áéíóú');
    console.log('Request received');
  } else if (req.url === '/contacto') {
    res.end('Estamos en contacto');
  } else if (req.url === '/imagen') {
    fs.readFile('../Media/Equipo-7.png', (err, data) => {
      if (err) {
        // If an error occurs, it needs to be handled
        res.statusCode = 500;
        res.end('Internal server error');
      } else {
        res.setHeader('Content-Type', 'image/png');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Página no encontrada');
  }
};

const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
