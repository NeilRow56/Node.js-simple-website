var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end('<h1>Hello World! My name is Neil Rowland</h1>');
}).listen(8080);
