var os = require('os'),
	upTime = require('./UpTime');

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
	console.log('System:', type);
	console.log('Release', release);
	console.log('CPU model:', cpu);
	upTime.print();
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;