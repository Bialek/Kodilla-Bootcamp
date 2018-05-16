var Counter = React.createClass({
	getInitialState: function() {
		return {
			Counter: 0 
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	render: function() {
		return React.createElement('div', {},
			React.createElement('span', {}, 'Licznik ' + this.state.counter)
		);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));