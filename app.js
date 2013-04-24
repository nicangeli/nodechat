var app = require('express').createServer()
var io = require('socket.io').listen(app);

app.listen(8080);

// routing

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

var usernames = {};

io.sockets.on('connection', function(socket) {
	// when the client emits sendchat, this listens and executes
	socket.on('sendchat', function(data) {
		// tell the client to execute updatechar with 2 paramaters
	})
});
