var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Film List'),
		React.createElement('ul', {id:'ul'})
	);

ReactDOM.render(element, document.getElementById('app'));

var Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      	React.createElement('li', {key: this.props.movies.id},
        React.createElement('h2', {}, this.props.movies.title),
        React.createElement('p', {}, this.props.movies.desc),
        React.createElement('img', {src: this.props.movies.img})
      )
    )
  },
});
var movies = 
	{
		id: 1,
		title: 'Fight Club',
		desc: 	'1st RULE: You do not talk about FIGHT CLUB.',
		img: 'http://1.fwcdn.pl/po/08/37/837/7522091.3.jpg'
	};



var ReactElement = React.createElement(Movie, {movies: movies});

ReactDOM.render(ReactElement,document.getElementById('ul'));


