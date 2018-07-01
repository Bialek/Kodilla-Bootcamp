function uptime() {
var os = require('os'),
	uptime = os.uptime(),
	hours = Math.floor((uptime / 60) / 60),
	minute = Math.floor((uptime / 60) - (hours * 60)),
	seconds = Math.floor(uptime - ((minute * 60) + ((hours * 60) * 60)));

console.log('Uptime:', hours, 'hours', minute, 'min', seconds, 'seconds');
}
 
exports.print = uptime;