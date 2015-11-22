module.exports = function(albums) {

	var getAlbums = function(data) {
		return data.topalbums.album;
	};

	return {
		getCovers: function(albums) {
			albums = getAlbums(albums);
			for (var i = 0; i < albums.length; i++) {
            	var covers = albums[i].image;
            	//console.log(albums[i]);
            	//console.log(covers);
				//console.log(albums[i].name + " -> " + covers[covers.length - 1]);
				var last = covers.length -1;
				console.log(covers[last]['#text']);
        	}
        	console.log("\n# " + albums.length);
		}
	}
}();