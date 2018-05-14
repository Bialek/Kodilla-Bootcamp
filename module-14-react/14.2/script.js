
var movies = [
	{
		id: 1,
		title: 'Fight Club',
		desc: 	'1st RULE: You do not talk about FIGHT CLUB.'
	},
	{
		id: 2,
		title: 'Star Wars',
		desc:  'May the Force be with you.'
	},
	{
		id: 3, 
		title: 'Pulp Fiction',
		desc:
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc)
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Film List'),
		React.createElement('ul', {}, moviesElements)
	);


ReactDOM.render(element, document.getElementById('app'));