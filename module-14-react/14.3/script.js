
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

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', { src: movie.img, className: 'avatar' })
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Film List'),
		React.createElement('ul', {}, moviesElements)
	);


ReactDOM.render(element, document.getElementById('app'));