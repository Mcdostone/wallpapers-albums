module.exports = function(options) {
	var widthScreen = parseInt(options.width_screen)
  	var heightScreen = parseInt(options.height_screen)
  	var width = parseInt(options.width_cover), height = parseInt(options.height_cover);

  	var total = 0
  	
  	var xMin = parseInt(widthScreen / width)
  	var yMin = parseInt(heightScreen / height)

  	if(heightScreen % height != 0) {
  		total = xMin * 2
  	}

  	if(widthScreen % width != 0) {
  		total += yMin * 2
  	}

  	total += xMin * yMin

	return total
}