window.onload = function() {

    // All HTML elements 
	var input = document.getElementById('nb-covers');
    var box_width = document.getElementById('width');
    var box_height = document.getElementById('height');

    var input_width = document.getElementById('input-width');
    var input_height = document.getElementById('input-height');


    var initResolution = function() {
        box_width.innerHTML = width();
        box_height.innerHTML = height();

        input_width.value = width();
        input_height.value = height();
    }


    initResolution();

	input.addEventListener('input', function() {
    	var img = document.getElementsByClassName('cover');
    	var width = "25%";
    	
    	if(input.value)
			width = 100 / input.value + "%";
    	
    	for (var i = img.length - 1; i >= 0; i--) {
    		img[i].style.width = width;
    	};
    	
	});

    console.log(w_screen +" X " + h_screen)
}


var width = function() {
    return screen.width;
}


var height = function() {
    return screen.height;
}