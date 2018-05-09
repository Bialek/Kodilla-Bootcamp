var url = 'https://restcountries.eu/rest/v2/name/',
	countriesList = $('#countriesList'),
	$div = $('<div class="countries"></div>');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#countryName').val();

	if (!countryName.length) countryName = 'Poland';

   $.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList,
  		error: showError
  	});
}
function showError(){
	countriesList.empty();
	$div.empty();
	$('<li>').text('Not Found').appendTo(countriesList);
	$('h3').addClass('hidden');
	$('h3').addClass('hidden');
}


function showCountriesList(resp) {
	countriesList.empty();
	$div.empty();
	$('h2').removeClass('hidden');
	$('body').append($div);

	resp.forEach(function(item) {


		$('<li>').text(item.name).appendTo(countriesList);

		function drawModel(data) {
			var modelHtml = $('#model').html();

			for (var item in data) {
				modelHtml = modelHtml.replace('{'+item+'}', data[item]);
			}

			var $modelHtml = $(modelHtml).removeClass('hidden');
			$('h3').removeClass('hidden');
		 		
			$('.countries').append($modelHtml);

		}

		drawModel({
		    Country: item.name,
		    Capital: item.capital,
		    Area:  item.area,
		    Population: item.population,
		    Language: item.languages[0].name,
		    Currency: item.currencies[0].name,
		    source: item.flag
		});

	});

}


