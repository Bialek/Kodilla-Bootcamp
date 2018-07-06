const url = "https://restcountries.eu/rest/v2/";

async function countriesDataApi() {
    const countriesData = await fetch(url + "all").then(data => data.json());
    countriesDataApi = countriesData;
}
window.onload = countriesDataApi();

export default countriesDataApi;