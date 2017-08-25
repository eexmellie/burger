(function() {
	
	//opening modal window
	var openButtons = document.querySelectorAll('.js-dialog-open');
	for (var i = 0; i < openButtons.length; i++) {
		var openButton = openButtons[i];

		openButton.addEventListener('click', function(event) {
			event.preventDefault();
			var dialogId = this.dataset.dialogId;
			document.querySelector('#' + dialogId).showModal();
		});
	}

	//closing modal window
	var closeButtons = document.querySelectorAll('.js-dialog-close');
	for (var j = 0; j < closeButtons.length; j++) {
		var closeButton = closeButtons[j];

		closeButton.addEventListener('click', function(event) {
			this.closest('dialog').close();
		})
	}
})();