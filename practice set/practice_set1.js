const http = require('http');


const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url.toLowerCase() === '/navbar') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Practice Set - Myntra Navbar</title></head>');
    res.write('<body>');
    res.write('<nav>');
    res.write('<div class="logo">');
    res.write('<img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png" alt="Myntra Logo" width="50"></img>');
    res.write('</div>');
    res.write('<ul>');
    res.write('<li><a href="/">Home</a></li>');
    res.write('<li><a href="/men">Men</a></li>');
    res.write('<li><a href="/women">Women</a></li>');
    res.write('<li><a href="/kids">Kids</a></li>');
    res.write('<li><a href="/cart">Cart</a></li>');
    res.write('</ul>');
    res.write('<div class="search-bar">');
    res.write('<input type="text" placeholder="Search for products, brands and more">');
    res.write('</div>');
    res.write('</nav>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home setion</title></head>');
    res.write('<body>');
    res.write('<h1>Home Section</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/men') {
    res.write('<html>');
    res.write('<head><title>Men setion</title></head>');
    res.write('<body>');
    res.write('<h1>Men Section</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/women') {
    res.write('<html>');
    res.write('<head><title>Women setion</title></head>');
    res.write('<body>');
    res.write('<h1>Women Section</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/kids') {
    res.write('<html>');
    res.write('<head><title>kids setion</title></head>');
    res.write('<body>');
    res.write('<h1>Kids Section</h1>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  } else if (req.url.toLowerCase() === '/cart') {
    res.write('<html>');
    res.write('<head><title>Cart setion</title></head>');
    res.write('<body>');
    res.write('<h1>Cart Section</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`server is running at "http://localhost:${port}"`);
});