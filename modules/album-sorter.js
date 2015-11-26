module.exports = function(data) {


	var cleanNameALbum = function(name) {
		return name;
	}

	return {

		getUniqAlbums : function(data) {
			var uniqs = [];
			var names = [];
			for (var i = 0; i < albums.length; i++) {
				if(names[cleanNameALbum(albums[i].name)] == 0) 
				var names = [];
				names[cleanNameALbum(albums[i].name)] = 1;
			}
		}
	}
}();