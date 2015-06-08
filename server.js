#!/usr/bin/env node

var port = process.env.PORT || 8080;


var debug = require('debug')('webapp');
var app = require('./app');

app.set('port', port);

var server = app.listen(app.get('port'), function() {
  console.log('DamnVulnerable.me listening on port ' + server.address().port);
});
