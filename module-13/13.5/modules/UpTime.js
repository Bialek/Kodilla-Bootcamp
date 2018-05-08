function uptime() {
var os = require('os'),
	colors = require('colors');
	uptime = os.uptime(),
	hours = Math.floor((uptime / 60) / 60),
	minutes = Math.floor((uptime / 60) - (hours * 60)),
	seconds = Math.floor(uptime - ((minutes * 60) + ((hours * 60) * 60)));

console.log('Uptime:'.green, hours, 'hours', minutes, 'minutes', seconds, 'seconds');
}
 
exports.print = uptime;