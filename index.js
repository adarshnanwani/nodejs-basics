// EVENTS STUFF
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => {console.log('Called listener:',data)});

// logger.log("Hello world");

// HTTP STUFF
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url == '/'){
    res.end('<h1>Home</h1>')
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));


