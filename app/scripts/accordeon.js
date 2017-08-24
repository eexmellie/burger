(function() {
	var accordions = Array.prototype.slice.call(document.querySelectorAll('.js-acco'));

	accordions.forEach(function(accordion){
		var activeClass = accordion.dataset.active;
		var items = accordion.querySelectorAll('.js-acco-item');
		var triggers = Array.prototype.slice.call(accordion.querySelectorAll('.js-acco-trigger'));

		triggers.forEach(function(trigger) {
			var item = trigger.closest('.js-acco-item');
			trigger.addEventListener('click', function(event) {
				event.preventDefault();
				if (item.classList.contains(activeClass)) {
					item.classList.remove(activeClass);
				} else {
					items.forEach(function(element) {
						element.classList.remove(activeClass);
					})
					item.classList.add(activeClass);
				}
			});
			var closeButton = item.querySelector('.js-acco-close');
			//checking if closeButton exists
			closeButton && closeButton.addEventListener('click', function() {
				item.classList.remove(activeClass);
			})
		})
	});
})();