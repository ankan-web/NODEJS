//simple node server
const http = require('http');
const fs = require('fs');

//Anonymous function
const server = http.createServer((req, res)=> {
  //this is a request loop
  // console.log(req); //prints all request 
  console.log(req.url, req.method, req.headers);

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Home Page</title></head>');
    res.write('<body><h1>You are on Home Page</h1>');
    res.write('<form action = "/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="female">female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
    fs.writeFileSync('message.txt', 'Dummy');
    res.statusCode = 302;
    res.setHeader('Location', '/');
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