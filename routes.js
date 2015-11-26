var finder = require('./modules/lastFM');
var albumParser = require('./modules/album-parser');

module.exports = function(router) {
	
	router.get('/', function(req, res) {
		res.render('home');
	});

	router.post('/generate', function(req, res) {
		var artist = req.body.artist;

	    var options = {
	        'artist': artist
	    }

	    finder.getAllAlbums(options, function(data) {
	    	console.log("GET '" + options.artist + "' => " + albumParser.numberAlbums(data) + " albums found");
	    	var covers = albumParser.getCovers(data);
	    	console.log(JSON.stringify(data, null, "\t"));
	    		res.render('results', {'covers': covers, 'data': JSON.stringify(data, null, 2)});
	    	});
		});

	return router;

}