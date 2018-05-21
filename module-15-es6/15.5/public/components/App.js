App = React.createClass({
	getInitialState() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		};
	},

	handleSearch: function(searchingText) {
		this.setState({
			loading: true
		});
		this.getGif(searchingText, function(gif) {
			this.setState({
				loading: false,
				gif: gif,
				searchingText: searchingText
			});
		}.bind(this));
	},

	getGif: function(searchingText, callback) {
		var GIPHY_API_URL = 'https://api.giphy.com';
		var GIPHY_PUB_KEY = 'Zo06Anmw3BLW6loJZvnm97LJHKeUGS2h';
		var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.onload = function() {
			if (xhr.status === 200) {
				var data = JSON.parse(xhr.responseText).data;
				var gif = {
					url: data.fixed_width_downsampled_url,
					sourceUrl: data.url
				};
				callback(gif);
			}
		};
		xhr.send();
	},

	render: function() {

		var style = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};

		return (
			<div style={style}>
				<h1>Gifs search engine!</h1> 
				<p>Find gifs on <a href='http://giphy.com'> giphy </a>. Press enter to get more gifs.</p>
				<Search onSearch={this.handleSearch}/>
				<Gif
	                loading={this.state.loading}
	                url={this.state.gif.url}
	                sourceUrl={this.state.gif.sourceUrl}
            	/>
			</div>
		);
	}
});
