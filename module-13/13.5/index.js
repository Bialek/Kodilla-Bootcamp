var	OSinfo = require('./modules/OSinfo'),
	EventEmitter = require('events').EventEmitter;
	emitter = new EventEmitter();

emitter.on('beforeCommand', function (instruction) {
	console.log('You wrote: ' + instruction + ', trying to run command');
});

emitter.on('afterCommand', function(){
	console.log('Finished command');
})

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		emitter.emit('beforeCommand', instruction);
		switch (instruction) {
			case '/exit':
				process.stdout.write('quitting app\n');
				process.exit();
			case '/ver':
				console.log(process.versions);
				break;
			case '/info':
				console.log(process.env);
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:
				process.stdout.write('wrong instruction\n');
		};
		emitter.emit('afterCommand');
	}
});





