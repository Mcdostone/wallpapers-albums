var lastFmNode = require('lastfm').LastFmNode;


/**
 * Module using the lastFM API.
 * It's enables to get all albums of an artist/band/group.
 *
 * @author Mcdostone
 */
module.exports = function() {

	var LIMIT_MAX = 80;

	var lastfm = new lastFmNode({
  		api_key: '57ee3318536b23ee81d6b27e36997cde'
	});

	var SECURITY = 10
		
	return {

		/**
		 * Gets top albums of an artist.
		 * @param artist Name of the artist
		 * @param limit Number of albums you want
		 * @return JSON results.
		 */
		getAllAlbums: function(options, cb) {
			options.limit = options.limit !== undefined ? parseInt(options.limit) + SECURITY : LIMIT_MAX;

    		var request = lastfm.request('artist.getTopAlbums', {
	        	artist: options.artist, 
	        	limit: options.limit,
	        
	        	handlers: {
	            	success: cb,
	            	error: function(err) { console.log(err); }
	        	}
    		});
		}
	};

}();