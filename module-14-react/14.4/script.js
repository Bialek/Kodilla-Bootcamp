var movies = [
	{
		id: 1,
		title: 'Fight Club',
		desc: 	'1st RULE: You do not talk about FIGHT CLUB.',
		img: 'http://1.fwcdn.pl/po/08/37/837/7522091.3.jpg'
	},
	{
		id: 2,
		title: 'Star Wars',
		desc:  'May the Force be with you.',
		img: 'https://eplakaty.pl/img/towary/1/2016_10/pp33337-star-wars-a-new-hope-one-sheet-plakat.jpg'
	},
	{
		id: 3, 
		title: 'Pulp Fiction',
		desc: 'golden briefcase',
		img: 'https://cache2.artprintimages.com/LRG/69/6956/LM8K100Z.jpg'
	},
	{
		id: 4, 
		title: 'Gladiator',
		desc: 'His Name Is Maximus!',
		img: 'http://www.efilmy.tv/images/thumbs/big/f8f86fc1281f218fad266e4e24946904.jpg'
	},
	{
		id: 5,
		title: 'Intouchables',
		desc: 'together they are intouchables',
		img: 'http://www.efilmy.tv/images/thumbs/big/dfd79d5c0936f3438fcf4c7e2bf6f1bb.jpg'
	}
];

var Movie = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
		},

		render: function() {
			return (
				React.createElement('li', {},		
					React.createElement('h2', {}, this.props.item.title),
					React.createElement('p', {}, this.props.item.desc),
					React.createElement('img', {
						src: this.props.item.img
					})		
			)
		)
	},
});

var Movies = React.createClass({
	propTypes: {
		items: React.PropTypes.array.isRequired,
	},

	render: function() {
		var movies = this.props.items.map(function(movie) {
			return React.createElement(Movie, {item: movie, key: movie.id});
	});

	return (
		React.createElement('ul', {}, movies)
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'My favorite movies list'),
				React.createElement(Movies, {items: movies}, {})
			)
		);
	}
});	

var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));