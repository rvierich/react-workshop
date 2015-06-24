'use strict';

var http = require('http'),
  fs = require('fs'),
  path = require('path'),
  url = require('url');

var mimeTypes = {
  'html': 'text/html',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'js': 'text/javascript',
  'css': 'text/css',
  'jsx': 'text/jsx'
};

http.createServer(function (req, res) {
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), uri);

    fs.exists(filename, function(exists) {
      if (!exists) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('404 Not Found\n');
        res.end();
        return;
      }

      var mimeType = mimeTypes[path.extname(filename).split('.')[1]];
      res.writeHead(200, {'Content-Type': mimeType});

      var fileStream = fs.createReadStream(filename);
      fileStream.pipe(res);
    });

}).listen(1337);
