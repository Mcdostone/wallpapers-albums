module.exports = function(albums) {

	var getAlbums = function(data) {
		return data.topalbums.album;
	};


	return {
		getCovers: function(albums, cb) {
			albums = getAlbums(albums);
			var results = [];

			for (var i = 0; i < albums.length; i++) {
            	var covers = albums[i].image;
				var last = covers.length -1;
				results.push(covers[last]['#text']);
        	}

        	cb(results);
		}
	}
}();