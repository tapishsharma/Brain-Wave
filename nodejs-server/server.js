const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Add middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Define a route to handle HTTP GET requests
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
