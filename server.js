// COPYRIGHT 2016 EVOSUS, INC. ALL RIGHTS RESERVED

'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');

// CREATE EXPRESS APP
var app = express();

app.use(logger('dev'));

// APP DIRECTORY SETTINGS
app.set('trust proxy',true);
app.use(express.static(__dirname + '/src'));
app.use('/lib', express.static(__dirname + '/node_modules'));

app.listen(8001);
console.log('Tazulu Web App Ready on Port:8001');

module.exports = app;
