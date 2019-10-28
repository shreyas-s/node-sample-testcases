console.log("initialising Tests with different use cases...");
var sumFn = require('./sum');
console.log(sumFn.sum(19,2));
const routes = require('./routes');
const express =require('express');
var app = express();
app.use('/user',routes);

app.listen(3000);
module.exports = app;