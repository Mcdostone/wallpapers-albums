var Levenshtein = require('levenshtein');

module.exports = function() {

	var THRESHOLD = 4

	var cleanAlbums = function(albums) {		
		for (var i = 0; i < albums.length; i++) {
			albums[i].name = albums[i].name.replace(/ *\([^)]*\) */g, "");
			albums[i].name = albums[i].name.replace(/ *soundtrack */gi, " ");
			albums[i].name = albums[i].name.replace(/ *\[[^)]*\] */g, " ");
		}

		return albums;
	};


	return {
		getUniqAlbums: function(albums) {
			albums = cleanAlbums(albums)
			
			var uniq = {};
			var res = [];
	    	for (var i=0, l= albums.length; i<l; i++) {

	    		var similar = false;
	    		var j = 0

	    		if (uniq[albums[i].name] === undefined && albums[i].name !== '') {
	    			
	    			while(!similar && j < res.length) {
	    				var test = new Levenshtein(albums[i].name, res[j].name)
	    				similar = test.distance < 4 ? true : false
	    				j++;
	    			}

	    			if(!similar) {
						res.push(albums[i])
	            		uniq[albums[i].name] = 1
	    			}
	    		}
	    	}
			return res;
		}
	}

}();