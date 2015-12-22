var finder = require('./modules/lastFM');
var albumParser = require('./modules/album-parser');
var getter = require('./modules/cover-getter');
var builder = require('./modules/builder-wallpaper');

module.exports = function(router) {
	
	router.get('/', function(req, res) {
		res.render('home');
	});

	router.post('/generate', function(req, res) {
		var artist = req.body.artist;
		console.log(req.body);

	    var options = {
	        'artist': artist,
	        limit: req.body.min_covers
	    }

	    
	    finder.getAllAlbums(options, function(data) {
	    	console.log("GET '" + options.artist + "' => " + albumParser.numberAlbums(data) + " albums found");
	    	var covers = albumParser.getCovers(data);

	    	getter.all(covers, function() {
	    		builder(covers, req.body, function() {
	    			console.log("ok");
	    		})
	    	});

	    	res.render('results', {'covers': covers});
		});
	});

	return router;

}