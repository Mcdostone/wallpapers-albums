var fs = require('fs');
var Canvas = require('canvas');
var path = require('path');
var config = require('../config/config');

module.exports = function(covers, cb) {
  	var Image = Canvas.Image
	, canvas = new Canvas(200, 200)
  	, ctx = canvas.getContext('2d');

	for (var i = 0; i < covers.length; i++) {
		var base = path.basename(covers[i]);

		console.log(path.join(__dirname, '..', config.COVERS_DIR, base));
		fs.readFile(path.join(config.COVERS_DIR, base) , function(err, cover){
  			if (err) throw err;
			img = new Image;
			//img.onload = function() {};
  			img.src = cover;
  			ctx.drawImage(img, 0, 0, 100, 100);
		});
	}

	cb("out.png", canvas.toBuffer());
}