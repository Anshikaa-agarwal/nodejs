//another stream method o read file and show data
const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream('textfile.txt');
    rstream.pipe(res);
});

server.listen(8500, '127.0.0.1');
