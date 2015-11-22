var lastFmNode = require('lastfm').LastFmNode;

module.exports = function() {

	var lastfm = new lastFmNode({
  		api_key: '57ee3318536b23ee81d6b27e36997cde'
	});
		
	return {
		getAllAlbums: function(artist, cb, err) {
    		var request = lastfm.request('artist.getTopAlbums', {
	        	artist: artist,
	        
	        	handlers: {
	            	success: cb,
	            	error: err
	        	}
    		});
		}
	};
}();