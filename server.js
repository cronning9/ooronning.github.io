'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

const listener = app.listen(process.env.PORT, () => {
  console.log(`now listening on ${listener.address().port}`)
});