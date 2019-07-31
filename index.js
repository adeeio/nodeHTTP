var http = require('http');
var fs = require('fs');







var server = http.createServer(function (request, response) {
    response.setHeader("Content-type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
      fs.readFile('./index.html', 'utf-8', function(err ,data){
          if (err) throw err;
        response.write(data);
        response.end();
      });
        
    } else {
  
        fs.readFile('./404.jpg', function(err, data) {
            if (err) throw err;
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(data);
            response.end();
        } );
        
    }

});
server.listen(7777);

