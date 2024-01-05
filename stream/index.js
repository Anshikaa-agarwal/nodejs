const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {

    //in this method we read the file first and then printed. but in 
    //stream method we will print as much as we read.
    var fs = require('fs');
    fs.readFile("textfile.txt", (err, data) => {
        if(err)
        return console.error(err);

        res.end(data.toString());
    })
})

server.listen(8000, '127.0.0.1');