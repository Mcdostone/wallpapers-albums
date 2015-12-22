var finder = require('./modules/lastFM');
var albumParser = require('./modules/album-parser');
var getter = require('./modules/cover-getter');
var builder = require('./modules/builder-wallpaper');
var min = require('./modules/minimum-covers');

module.exports = function(router) {
	
	router.get('/', function(req, res) {
		res.render('home');
	});

	router.post('/generate', function(req, res) {
		var artist = req.body.artist;
		console.log(req.body);

	    var options = {
	        'artist': artist,
	        'limit': min(req.body)
	    }
	    
	    finder.getAllAlbums(options, function(data) {

	    	console.log("GET '" + options.artist + "' => " + albumParser.numberAlbums(data) + " albums found");

	    	var covers = albumParser.getCovers(data);

	    	getter.all(covers, function() {
	    		//console.log("# All downloaded");

	    		builder(covers, req.body, function() {
	    			console.log("ok");
	    		})

	    	});

	    	

			//console.log(JSON.stringify(data, null, 1));
	    	res.render('results', {'covers': covers});//'data': JSON.stringify(data, null, 2)});

	    	});
		});

	return router;

}