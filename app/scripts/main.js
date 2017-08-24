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

	//Onepage scroll
	$(".main-content").onepage_scroll({
		sectionContainer: "section",
		easing: "ease",
		animationTime: 500,
		pagination: true,
		updateURL: false,
		loop: false,
		keyboard: true,
		responsiveFallback: false,
		direction: "vertical"
	});

	//Anchor links scroll
	var anchorLinks = document.querySelectorAll('.js-goto');
	for (var i = 0; i < anchorLinks.length; i++) {
		var anchorLink = anchorLinks[i];

		anchorLink.addEventListener('click', function(event) {
			event.preventDefault();
			var address = this.dataset.goto;
			$(this).moveTo(address);
		});
	};

	//Buttons class toggle
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