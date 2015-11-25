window.onload = function() {
	console.log('ok');
	var input = document.getElementById('nb-covers');
	console.log(input);

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