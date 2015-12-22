var fs = require('fs');
var Canvas = require('canvas');
var path = require('path');
var config = require('../config/config');

module.exports = function(covers, options, cb) {

  var Image = Canvas.Image
  var widthScreen = parseInt(options.width_screen)
  var heightScreen = parseInt(options.height_screen)
	, canvas = new Canvas(widthScreen, heightScreen)
  , ctx = canvas.getContext('2d');

  var width = parseInt(options.width_cover), height = parseInt(options.height_cover);

  var heightDec = heightScreen % height == 0 ? 0 : height - ((heightScreen % height) / 2)
  var widthDec = widthScreen % width == 0 ? 0 : width - ((widthScreen % width) / 2)

  var y = 0, x = 0;

	for (var i = 0; i < covers.length; i++) {
		
		var base = path.basename(covers[i]);
		var filepath = path.join(__dirname, '..', config.COVERS_DIR, base);
		
    img = new Image;
    img.onload = function() {
      if(x * width - widthDec >= canvas.width) {
        y++;
        x = 0;
      }
      ctx.drawImage(img, width * x - widthDec, y * height - heightDec, width, height);
      x++;
    }

    img.src = filepath;
  }

  fs.writeFile('out.png', canvas.toBuffer());
  console.log("ok!");
};