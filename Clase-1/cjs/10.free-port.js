const net = require('node:net');

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer(); // Create a new server

    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    server.on('error', (err) => {
      // If the port is already in use
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then((port) => resolve(port)); // Will find a random available port
      } else {
        reject(err); // If another error occurs
      }
    });
  });
}

module.exports = { findAvailablePort };
