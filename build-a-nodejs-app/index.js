'use strict';
const process = require('process');
const http = require('http');

var server = http
  .createServer((req, res) => {
    console.log('Request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  })
  .listen(3000, '0.0.0.0');

  console.log('server started\n');
  // Confirm that this process is running with PID 1
  console.log('PID = ' + process.pid);

  var signals = {
    'SIGINT': 2,
    'SIGTERM': 15
  };

  function shutdown(signal, value) {
    server.close(() => {
      console.log('server stopped by ' + signal);
      process.exit(128 + value);
    });
  }

  Object.keys(signals).forEach((signal) => {
    process.on(signal, () => {
      shutdown(signal, signals[signal]);
    });
  });