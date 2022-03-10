const http = require('http');

const server = http.createServer((req,res) =>{
if(req.url === '/') {
    
    res.end('Welcome to our homepage')
}

if (req.url == '/about') {

      res.end('Here is our short History')
}

res.end (`
<h1>OOs!</h>
<p>We can't seem to find the page you are looking fo </p>
<a href="/">back home</a>

`)
})

server.listen(8080)