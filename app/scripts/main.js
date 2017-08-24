(function() {

	// Google map init
	if (document.getElementById('map')) {
  		google.maps.event.addDomListener(window, 'load', mapGoogle.init);
	}

	//Slider
    document.addEventListener('DOMContentLoaded', function () {
        var percentage = document.querySelector('.js_slider');

        lory(percentage, {
        	infinite: 1
        });
    });

	var buttons = document.querySelectorAll('.js-toggle');
	for (var i = 0; i < buttons.length; i++) {
		var button = buttons[i];

		button.addEventListener('click', function(event) {
			var togglePairs = this.dataset.toggle.split(';');
			for (var j = 0; j < togglePairs.length; j++) {
				var togglePair = togglePairs[j].split('|');
				var targetClass = togglePair[0].trim();
				var toggleClass = togglePair[1].trim();
				document.querySelector('.' + targetClass).classList.toggle(toggleClass);
			}
		});
	}
})();