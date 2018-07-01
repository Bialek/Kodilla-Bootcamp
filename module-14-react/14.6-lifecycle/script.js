var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    deccrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },  

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.deccrement}, '-')
        );
    },

	 componentWillMount: function() {
    console.log('Before mounting the component');
    },

    componentDidMount: function() {
    console.log('After mounting the component');
    },

    componentWillUpdate: function(nextProps, nextState) {
    console.log('Current meter status: ' + nextState.counter);
    },

    componentDidUpdate: function(prevProps, prevState) {
    console.log('The previous state of the counter: ' + prevState.counter);
    }

});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));