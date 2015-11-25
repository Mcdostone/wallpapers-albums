var get = require('./cover-getter');

module.exports = function(albums) {

	var getAlbums = function(data) {
		return data.topalbums.album;
	};


	return {
		getCovers: function(albums) {
			var albums = getAlbums(albums);
			var results = [];
			for (var i = albums.length - 1; i >= 0; i--) {
            	var covers = albums[i].image;
				var last = covers.length -1;
				var cover = covers[last]['#text'];
				results.push(cover);
			};

			return results;
		}

	}
}();