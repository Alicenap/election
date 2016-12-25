'use strict';

// Imports
const express = require('express');
const config = require('../common/env').config(); 

// App
const app = express();
app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(config.app.port);
console.log('Running in ' + config.app.mode + ' mode');
console.log('Waiting for connections on port ' + config.app.port);