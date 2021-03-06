var http = require('http');
var fs = require('fs');
var path = require('path');
var config = require('../config/config');
var async = require('async');


module.exports = function() {

    var init = function() {
        if(!fs.exists(config.COVERS_DIR))
            fs.mkdir(config.COVERS_DIR)
    }

    init();

    var get = function(url, cb) {
        var filepath = path.join(config.COVERS_DIR, path.basename(url));
        var file = fs.createWriteStream(filepath);

        http.get(url, function(res) {
            res.on('data', function(data) {
                file.write(data);
            })
            .on('end', function() {
                file.end();
                cb();
            });
        });
    };

    return {
        all: function(urls, cb) {
            async.each(urls, function(url, callback) {
                if(typeof url != 'undefined' && url != '')
                    get(url, callback);    
                else
                    callback();
            },cb);
        }
    }
}();
