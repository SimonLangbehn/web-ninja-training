var http = require('http');
var fs = require('fs');
var path = require('path');
var sleep = require('sleep');

http.createServer(function (req, res) {
  	var url = req.url;
  	console.log(url);
  	var newPath = path.join('../css', url);
  	console.log(newPath);
  	if(url === '/'){
		res.writeHead(200);
	  	fs.readFile(path.join('../css','timetracker.html'), function (err, data) {
	  		res.end(data);
		});
  	}else if(url === '/wait'){
  		sleep.sleep(5);
  		res.writeHead(200);
  		res.end('sleep 5');
  	}else if(fs.existsSync(newPath)){
  		console.log('exists');
  		res.writeHead(200);
	  	fs.readFile(newPath, function (err, data) {
	  		res.end(data);
		});
	}else{
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('File not found:' + url);
	}
}).listen(12345, '127.0.0.1');

console.log('Server running at http://127.0.0.1:12345/');