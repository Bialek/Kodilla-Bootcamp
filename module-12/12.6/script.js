var url = 'https://restcountries.eu/rest/v2/name/',
	countriesList = $('#countries');

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
	$('<li>').text('Not Found').appendTo(countriesList);
}

function showCountriesList(resp) {
	countriesList.empty();

	resp.forEach(function(item) {

		$('<li>').text(item.name).appendTo(countriesList);

	});
}