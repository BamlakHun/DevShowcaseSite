// Require path (simplifies handling file paths)
const path = require('path');

// Require Express (a web server framework)
const express = require('express');

// Create a server
const app = express();

// Serve the files in the frontend folder
app.use(express.static('frontend'));

// Start the server on port 3000
app.listen(5000, () => console.log('Listening on http://localhost:5000'));

// Answer with the 404 partial if the frontend looks for a non-existant partial
app.all('/components/*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'frontend', 'components', '404.html'));
});

// Answer with the start page on all routes
// (since our actual routing is done in frontend/as an SPA)
app.all('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});