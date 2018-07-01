class stopWatch {
	constructor(display) {
		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
	}

	reset() {
		this.running = false;
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
		this.print();
	}

	print() {
		this.display.innerText = this.format(this.times);
	}

	format(times) {
		return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
		if (!this.running) {
			this.running = true;
			this.watch = setInterval(() => this.step(), 10);
		}
	}

	step() {
		if (!this.running) return;
		this.calculate();
		this.print();
	}

	calculate() {
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

	stop() {
		this.running = false;
		clearInterval(this.watch);
	}

	split() {
		resultsList(this.format(this.times));
	}

	cleanList() {
		document.querySelector('.results').innerHTML = "";
	}


}
function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}
function resultsList(time) {
	let li = document.createElement("li"),
		ul = document.querySelector('.results'),
		id = ul.children.length + 1;
    li.appendChild(document.createTextNode(`${id}. ${time}`));
    ul.appendChild(li);
}
const watch = new stopWatch(document.querySelector('.watch'));

let startButton = document.getElementById('start'),
	stopButton = document.getElementById('stop'),
	resetButton = document.getElementById('reset'),
	splitButton = document.getElementById('split'),
	cleanButton = document.getElementById('clean');

startButton.addEventListener('click', () => {
	watch.start();
	startButton.style.display = "none";
	stopButton.style.display = "block"
});
stopButton.addEventListener('click', () => {
	watch.stop();
	stopButton.style.display = "none";
	start.style.display = "block"
}); 
resetButton.addEventListener('click', () => watch.reset());
splitButton.addEventListener('click', () => watch.split());
cleanButton.addEventListener('click', () => watch.cleanList());

