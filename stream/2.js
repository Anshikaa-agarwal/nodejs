//stream method o read file and show data

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream('textfile.txt');

    rstream.on('data', (chunkdata) => {
        res.write(chunkdata);
    })

    rstream.on('data', () => {
        res.end();
    });
});

server.listen(8000, '127.0.0.1');