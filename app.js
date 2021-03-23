$(document).ready(function () {
	$('#form').submit(function () {
		var city = $('#location').val();
		$.get(
			'http://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'&units=imperial&appid=0948feca1ccc26b7ed8584fedaf1d7d4&',
			function (data) {
				$('#city').html('in' + ' ' + data.name);
				$('#temp').html(
					'is ' + Math.round(data.main.temp) + '˚' + ' ' + 'Fahrenheit'
				);
				$('#cloud').html('(' + ' ' + data.weather[0].main + ' ' + ')');
			}
		),
			'json';
		return false;
	});
});
