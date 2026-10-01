const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello ! I am a simple Express server running on Node.js.');
});

module.exports = app;
