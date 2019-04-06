const express = require('express');
const app = express();


 app.use(require('./inputServices'));


 module.exports = app;