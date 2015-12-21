var fs = require('fs');
var Canvas = require('canvas');
var path = require('path');
var config = require('../config/config');

module.exports = function(covers, options, cb) {
  var Image = Canvas.Image
	, canvas = new Canvas(parseInt(options.width_screen), parseInt(options.height_screen))
  , ctx = canvas.getContext('2d');


  var width = 200, height = 200;
  var y = 0, x = 0;

	for (var i = 0; i < covers.length; i++) {
		
		var base = path.basename(covers[i]);
		var filepath = path.join(__dirname, '..', config.COVERS_DIR, base);
		
    img = new Image;
    img.onload = function() {
      if(x * width >= canvas.width) {
        y++;
        x = 0;
      }
      ctx.drawImage(img, width * x, y * height, width, height);
      x++;
    }

    img.src = filepath;
  }

  fs.writeFile('out.png', canvas.toBuffer());
};