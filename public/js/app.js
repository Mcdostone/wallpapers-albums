window.onload = function() {

    // All HTML elements 
	var input = document.getElementById('nb-covers');
    var box_width = document.getElementById('width');
    var box_height = document.getElementById('height');


    var input_width = document.getElementById('input-width');
    var input_height = document.getElementById('input-height');

    var input_width_cover = document.getElementById('input-width-cover');
    var input_height_cover = document.getElementById('input-height-cover');

    


    var initResolution = function() {
        box_width.innerHTML = width();
        box_height.innerHTML = height();
        if(input_width) {
            input_width.value = width();
            input_height.value = height();    
        }
    }


    initResolution();

    var proportionnalListener = function() {
        var tmp = this.value;
        input_width_cover.value = tmp;
        input_height_cover.value = tmp;
    }

    if(input_width_cover) {
        input_height_cover.addEventListener('input', proportionnalListener);
        input_width_cover.addEventListener('input', proportionnalListener);    
    }
    
    
    if(input) {
        input.addEventListener('input', function() {
            var img = document.getElementsByClassName('cover');
            var width = "25%";
            
            if(input.value)
                width = 100 / input.value + "%";
            
            for (var i = img.length - 1; i >= 0; i--) {
                img[i].style.width = width;
            };
        });
    }
	

    console.log(width() +" X " + height())
}


var width = function() {
    return screen.width;
}


var height = function() {
    return screen.height;
}