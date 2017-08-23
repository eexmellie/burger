var mapGoogle = (function() {
	var init = function() {

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: {lat: 53.905337, lng: 27.560507},
			scrollwheel: false
		});

		var logo = {
			url: '../images/logo/map-marker.svg',
			size: new google.maps.Size(46, 57),
			scaledSize: new google.maps.Size(46, 57)
		};

		var places = [
			{
				position: new google.maps.LatLng(53.900768, 27.561586),
				contentString: 'Энгельса, 12',
				content: 'г. Минск, ул. Энгельса, 12'
			},
			{
				position: new google.maps.LatLng(53.906978, 27.573851),
				contentString: 'Независимости, 34',
				content: 'г. Минск, пр-т Независимости, 34'
			},
			{
				position: new google.maps.LatLng(53.903467, 27.554593),
				contentString: 'Свободы, 11',
				content: 'г. Минск, пл. Свободы, 11'
			}
		];

		var infoWindow = new google.maps.InfoWindow();
		places.forEach(function(place) {
			var marker = new google.maps.Marker({
				position: place.position,
				icon: logo,
				map: map,
				title: place.contentString,
				animation: google.maps.Animation.DROP
			});
			marker.addListener('click', function() {
				infoWindow.setContent(place.content);
				infoWindow.open(map, marker);
				marker.setAnimation(google.maps.Animation.BOUNCE);
				setTimeout(function() {
					marker.setAnimation(null);
				}, 1400);
			});
		});
	}

	return {
		init: init
	}
})();