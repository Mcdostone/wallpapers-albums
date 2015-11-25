var fs = require('fs');
var Canvas = require('canvas');
var path = require('path');
var config = require('../config/config');

module.exports = function(covers, cb) {
  	var Image = Canvas.Image
	, canvas = new Canvas(200, 200)
  	, ctx = canvas.getContext('2d');

	//for (var i = 0; i < covers.length; i++) {
		
		var base = path.basename(covers[0]);
		var filepath = path.join(__dirname, '..', config.COVERS_DIR, base);
		console.log(filepath);

		fs.readFile(filepath, function(err, cover){
  			if (err) throw err;
  			img = new Image;
  			img.src = cover;
  			img.onload = function() {
  				ctx.drawImage(img, 0, 0, 50, 50);
  				console.log("gjkfkjgkj");
  			}
  			ctx.fillText("Awesome!", 50, 100);
  			
		});

		fs.writeFile('out.png', canvas.toBuffer());
}