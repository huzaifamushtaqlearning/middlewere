const express = require('express');
const fs = require('fs');
const app = express();

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
  fs.appendFileSync('logs.txt', `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  // res.send('Hacked by Middleware 1')
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
console.log('Server is running on port 3000');