import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './styles.css';

class App extends React.Component {
  constructor(display) {
    super()
    this.state = {
      running : false,
      display : display 
    }
    this.reset();
    this.print(this.times);
  }

  reset(e) {
    this.state.running = false;
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
    this.print();
  }
  print() {
    console.log(this.state.running);
    return this.display = this.format(this.times);
  }
  

  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
  }

  start() {
    if (!this.state.running) {
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


  render() {
    return (
      <div className="stopWatch">

        <nav className="controls">
          <a href="#" className="button" id="start" onClick={this.start}>
            <i className="fas fa-play"></i>
          </a>
          <a href="#" className="button" id="stop" onClick={this.stop}>
            <i className="fas fa-pause"></i>
          </a>
          <a href="#" className="button" id="reset" onClick={this.reset}>
            <i className="fas fa-redo"></i>
          </a>
          <a href="#" className="button" id="split" onClick={this.split}>
            <i className="far fa-save"></i>
          </a>
          <a href="#" className="button" id="clean" onClick={this.clean}>
            <i className="far fa-trash-alt"></i>
          </a>
        </nav>

        <div className="watch">{this.display}</div>

        <ul className="results"></ul>
      
      </div>
    )
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
// const watch = new App(document.querySelector('.watch'));

// let startButton = document.getElementById('start'),
//   stopButton = document.getElementById('stop'),
//   resetButton = document.getElementById('reset'),
//   splitButton = document.getElementById('split'),
//   cleanButton = document.getElementById('clean');

// startButton.addEventListener('click', () => {
//   watch.start();
//   startButton.style.display = "none";
//   stopButton.style.display = "block"
// });
// stopButton.addEventListener('click', () => {
//   watch.stop();
//   stopButton.style.display = "none";
//   startButton.style.display = "block"
// }); 
// resetButton.addEventListener('click', () => watch.reset());
// splitButton.addEventListener('click', () => watch.split());
// cleanButton.addEventListener('click', () => watch.cleanList());



export default App;
