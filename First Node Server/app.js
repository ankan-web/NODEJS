//simple node server
const http = require('http');


//Anonymous function
const server = http.createServer((req, res)=> {
  //this is a request loop
  // console.log(req); //prints all request 
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Home Page</title></head>');
    res.write('<body><h1>You are on Home Page</h1></body>');
    res.write('</html>');
    return res.end();
  }else if(req.url === '/products'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Products Page</title></head>');
    res.write('<body><h1>You are currently on Products page</h1></body>');
    res.write('</html>');
    return res.end();
  }
  // process.exit() //stops event loop
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
});
const port = 8080
server.listen(port , () => {
  console.log(`Server is running on adress http://localhost:${port}`);
});