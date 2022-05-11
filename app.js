var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
// var index = fs.readFileSync('index.html');
var server = http.createServer(app);
var port = 8000;
const { SerialPort } = require('serialport');


const port = new SerialPort({
  path: '/dev/ttyUSB0',
  baudRate: 9600,
})


server.listen(port, () => {
    console.log("Server is listening at port %d", port);
});

app.use(express.static(path.join(__dirname, "public")));


// var server = http.createServer(function(req, res){

//     res.writeHead(200, {'Content-Type':'text/html'});

//     res.end(index);

// });

var io = require('socket.io')(server);

io.on('connection', function(socket){

    console.log('Node.js is listening!!');
    socket.on("hello", (arg, callback) => {
    console.log("hellohelo"); // "world"
    io.emit('world');

    }); 

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    }); 

});



// app.listen(5501);
