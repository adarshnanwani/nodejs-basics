// EVENTS STUFF
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => {console.log('Called listener:',data)});

// logger.log("Hello world");

// HTTP STUFF
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // if(req.url === '/'){
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
  //     if(err) console.log(err);
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     });
  //     res.end(content);
  //   })
  // }
  //   if(req.url === '/about'){
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content) => {
  //     if(err) console.log(err);
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     });
  //     res.end(content);
  //   })
  // }
  // if(req.url === '/api/users'){
  //     const users = [{name: 'John Doe', age: 30}, {name: 'Bob Smith', age: 40}];
  //     res.writeHead(200, {
  //       'Content-Type': 'application/json'
  //     });
  //     res.end(JSON.stringify(users));

  // }

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  let extension = path.extname(filePath);

  // Set initial Content-Type
  let contentType = "text/html";

  // Check ext and set Content-Type
  switch (extension) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".json":
      contentType = "application/json";
      break;
  }

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, errPage) => {
            res.writeHead(404, {
              "Content-Type": "text/html"
            });
            res.end(errPage, "utf8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end("server error: " + err.code);
      }
    } else {
      // SUCCESS
      res.writeHead(200, {
        "Content-Type": contentType
      });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on ${PORT}`));
