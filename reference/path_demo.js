const path = require('path');

// Base file name
console.log(__filename); // gives absolute path of the file
console.log(path.basename(__filename)); // gives the filename

// Directory name
console.log(path.dirname(__filename)); // gives the directory

// File extension
console.log(path.extname(__filename)); // gives extension --> .js

// Create path object
console.log(path.parse(__filename));
// {
//   root: '/',
//   dir: '/Users/adarshnanwani/Desktop/Node/node_crash_course/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }

// Concatenate paths
// {currentDirectory}/test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
