const fs = require('fs');
const path = require('path');

// Create folder
// create a folder 'test' in the current directory
// fs.mkdir(path.join(__dirname,'/test'), {}, err=>{
//   if(err){
//     throw err;
//   }
//   console.log("Folder created");
// });

// Create and write to file
// fs.open is to just create the file
fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), 'Hello world!', err=>{
  if(err){
    throw err;
  }
  console.log("File created and written...");
  // Append to file
  fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), ' I love NodeJS!', err=>{
  if(err){
    throw err;
  }
  console.log("File appended to...");
});
});

// Below code will override the file
// fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), ' I love NodeJS!', err=>{
//   if(err){
//     throw err;
//   }
//   console.log("File created and written...");
// });

// Read file
fs.readFile(path.join(__dirname, '/test','hello.txt'), 'utf8', (err,data) => {
  if(err) throw err;
  console.log(data);
});

// Rename file
fs.rename(path.join(__dirname, '/test','hello.txt'),
  path.join(__dirname, '/test','helloworld.txt'),
  (err) => {
    if(err) throw err;
    console.log('File renamed...');
});
