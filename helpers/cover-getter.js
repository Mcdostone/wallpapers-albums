var http = require('http');
var fs = require('fs');
var path = require('path');
var config = require('../config/config');

module.exports = function(url, cb) {
	var file = fs.createWriteStream(path.join(config.COVERS_DIR, path.basename(url)));
  	http.get(url, function(res) {
    	res.on('data', function(data) {
            file.write(data);
        }).on('end', cb);
    });
};
