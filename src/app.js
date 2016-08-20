const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('short'));

app.get('/', function (req, res) {
  res.send({ message: 'Hello world' });
});

module.exports = app;
