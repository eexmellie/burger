$('#form').on('submit', function() {
	event.preventDefault();
	var form = $(event.target);
	var url = form.attr('action'),
	data = form.serialize();

	var request = $.ajax({
		type: 'POST',
		url: url,
		data: data
	});

	request.done(function(message) {
		var msg = JSON.parse(message);
		var mes = msg.mes;
		var status = msg.status;
		alert(mes);
	});

	request.fail(function(jqXHR, textStatus) {
		alert("Request failed: " + textStatus);
	});
});