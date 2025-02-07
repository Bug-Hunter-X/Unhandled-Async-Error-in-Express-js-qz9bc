const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This error is not handled properly, causing the application to crash
    throw new Error('Something went wrong!');
  }, 100);
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});