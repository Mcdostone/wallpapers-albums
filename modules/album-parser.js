var uniq = require('./uniq-albums');

module.exports = function(albums) {

	var getAlbums = function(data) {
		return data.topalbums.album;
	};

	var shuffle = function (array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

	return {
		getCovers: function(albums) {
			var albums = getAlbums(albums);
			var results = [];
			var names = []

			albums = uniq.getUniqAlbums(albums);
//			albums = albums.sort(function(a, b){return a.name.localeCompare(b.name)});

			for (var i = 0; i < albums.length; i++) {
				var covers = albums[i].image;
				var last = covers.length -1;
				var cover = covers[last]['#text'];
				if(cover)
					results.push(cover);
			}

			//return shuffle(results);
			return shuffle(results);
		},

		numberAlbums: function(data) {
			return getAlbums(data).length;
		}

	}



}();