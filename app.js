
var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('index.html');

var app = http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});

    res.end(index);

});

var io = require('socket.io')(app);

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



app.listen(8000);
