var os = require('os'),
	upTime = require('./UpTime'),
	colors = require('colors');

function getOSinfo() {
	var type = os.type(),
		release = os.release(),
		cpu = os.cpus()[0].model,
		userInfo = os.userInfo();

	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	console.log('System:'.gray, type);
	console.log('Release'.red, release);
	console.log('CPU model:'.america, cpu);
	upTime.print();
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home dir:'.rainbow, userInfo.homedir);
}

exports.print = getOSinfo;