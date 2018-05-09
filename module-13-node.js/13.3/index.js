process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
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
			default:
				process.stdout.write('wrong instruction\n');
		}
	}
});

