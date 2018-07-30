const express = require('express');
const app = require('./server.js');

app.listen(3001, () => {
  console.log('Server started on 3001');
});
