var http = require('http');
var fs = require('fs');
var path = require('path');
var sleep = require('sleep');

http.createServer(function (req, res) {
  	var url = req.url;
  	console.log(url);
  	
  	if(url === '/'){
		  res.writeHead(200);
	  	fs.readFile('index.html', function (err, data) {
	  		res.end(data);
		  });
    }else if(url === '/jquery.js' || url === '/ajax-notification.js'){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      fs.readFile(url.replace('/', ''), function (err, data) {
        res.end(data);
      });
  	}else if(url === '/wait'){
  		sleep.sleep(5);
  		res.writeHead(200);
  		res.end('sleep 5');
  	}else{
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('File not found:' + url);
	}
}).listen(12345, '127.0.0.1');

console.log('Server running at http://127.0.0.1:12345/');