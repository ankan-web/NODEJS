//simple node server
const http = require('http');


//Anonymous function
const server = http.createServer((req, res)=> {
  console.log(req);
});
const port = 8080
server.listen(port , () => {
  console.log(`Server is running on adress http://localhost:${port}`);
});