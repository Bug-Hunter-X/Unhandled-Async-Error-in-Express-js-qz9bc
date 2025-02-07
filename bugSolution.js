const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // Simulate an asynchronous operation that might throw an error
      throw new Error('Something went wrong!');
    } catch (error) {
      console.error('Caught error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 100);
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});