const http = require("http");

const server = http.createServer((req, res) => {
    //handling http requests.
    if(req.url == "/") {
        res.end('hello yayy, nothing');
    }
    else if(req.url == '/about') {
        res.end("hello it's about");
    }
    else if(req.url == '/contact') {
        res.end("hello it's contact");
    } 
    else {
        res.writeHead(404);
        res.end("page does not exist.");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("listening");
});