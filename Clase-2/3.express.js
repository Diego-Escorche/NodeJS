const express = require('express');
const charizardJSON = require('./Pokemon/charizard.json');
const app = express();
const PORT = process.env.PORT || 1234;

// Disable the x-powered-by header
app.disable('x-powered-by');

// Middleware that will check every request
app.use((req, res, next) => {
  if (req.method !== 'POST') return next();
  if (req.headers['content-type'] !== 'application/json') return next();
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    // Mutate the request object to include the parsed body
    req.body = data;
    next();
  });
});

// Middleware that will check only the '/pokemon/charizard' request
app.use('/pokemon/charizard', (req, res, next) => {
  console.log('Middleware for get');
  next();
});

// With express we can define routes using the app object
app.get('/pokemon/charizard', (req, res) => {
  res.json(charizardJSON);
});

app.post('/pokemon', (req, res) => {
  // Because a Middleware was created, we can access the body of the request with all the data.
  res.status(201).json(req.body);
});

// We can also define a catch-all route for the 404 status code.
// Because it will only be reached if no other route matches the request.
app.use((req, res) => {
  res.status(404).send('<h1>404</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
