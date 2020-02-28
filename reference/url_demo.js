const url = require('url');

const myUrl = new URL('http://example.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href); // http://example.com/hello.html?id=100&status=active
console.log(myUrl.toString()); // http://example.com/hello.html?id=100&status=active

// Host (root domain) - gets port too
console.log(myUrl.host); // example.com

// Hostname - does not get port
console.log(myUrl.hostname); // example.com

// Path name
console.log(myUrl.pathname); // /hello.html

// Serialized query
console.log(myUrl.search); // ?id=100&status=active

// Params object
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', 'def');
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => 'def' }

// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(name + ':' + value);
});

// id: 100;
// status: active;
// abc: def;
