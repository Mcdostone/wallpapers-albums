var http = require('http');
var fs = require('fs');
var path = require('path');
var config = require('../config/config');

module.exports = function(url) {

	var filepath = path.join(config.COVERS_DIR, path.basename(url));
	
	var file = fs.createWriteStream(filepath);

	http.get(url, function(res) {
    	res.on('data', function(data) {
            file.write(data);
        }).on('end', function() {
            file.end();
        });
    });
};
