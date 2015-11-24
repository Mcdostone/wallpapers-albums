var get = require('./cover-getter');

module.exports = function(albums) {

	var getAlbums = function(data) {
		return data.topalbums.album;
	};


	return {
		getCovers: function(albums) {
			albums = getAlbums(albums);
			var results = [];

			for (var i = 0; i < albums.length; i++) {
            	var covers = albums[i].image;
				var last = covers.length -1;
				results.push(covers[last]['#text']);
        		get(covers[last]['#text'], function() {
        			console.log("fkjjfjkgkj");
        		});
        	}

        	return results;
		}
	}
}();