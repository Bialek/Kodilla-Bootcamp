'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stopWatch = function () {
	function stopWatch(display) {
		_classCallCheck(this, stopWatch);

		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
	}

	_createClass(stopWatch, [{
		key: 'reset',
		value: function reset() {
			this.running = false;
			this.times = {
				minutes: 0,
				seconds: 0,
				miliseconds: 0
			};
			this.print();
		}
	}, {
		key: 'print',
		value: function print() {
			this.display.innerText = this.format(this.times);
		}
	}, {
		key: 'format',
		value: function format(times) {
			return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
		}
	}, {
		key: 'start',
		value: function start() {
			var _this = this;

			if (!this.running) {
				this.running = true;
				this.watch = setInterval(function () {
					return _this.step();
				}, 10);
			}
		}
	}, {
		key: 'step',
		value: function step() {
			if (!this.running) return;
			this.calculate();
			this.print();
		}
	}, {
		key: 'calculate',
		value: function calculate() {
			this.times.miliseconds += 1;
			if (this.times.miliseconds >= 100) {
				this.times.seconds += 1;
				this.times.miliseconds = 0;
			}
			if (this.times.seconds >= 60) {
				this.times.minutes += 1;
				this.times.seconds = 0;
			}
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.running = false;
			clearInterval(this.watch);
		}
	}, {
		key: 'split',
		value: function split() {
			resultsList(this.format(this.times));
		}
	}, {
		key: 'cleanList',
		value: function cleanList() {
			document.querySelector('.results').innerHTML = "";
		}
	}]);

	return stopWatch;
}();

function pad0(value) {
	var result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}
function resultsList(time) {
	var li = document.createElement("li"),
	    ul = document.querySelector('.results'),
	    id = ul.children.length + 1;
	li.appendChild(document.createTextNode(id + '. ' + time));
	ul.appendChild(li);
}
var watch = new stopWatch(document.querySelector('.watch'));

var startButton = document.getElementById('start'),
    stopButton = document.getElementById('stop'),
    resetButton = document.getElementById('reset'),
    splitButton = document.getElementById('split'),
    cleanButton = document.getElementById('clean');

startButton.addEventListener('click', function () {
	watch.start();
	startButton.style.display = "none";
	stopButton.style.display = "block";
});
stopButton.addEventListener('click', function () {
	watch.stop();
	stopButton.style.display = "none";
	start.style.display = "block";
});
resetButton.addEventListener('click', function () {
	return watch.reset();
});
splitButton.addEventListener('click', function () {
	return watch.split();
});
cleanButton.addEventListener('click', function () {
	return watch.cleanList();
});