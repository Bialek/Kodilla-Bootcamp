const formatDate = timeInSeconds => {
    if (isNaN(timeInSeconds)) timeInSeconds = 0;
    const uptime = timeInSeconds;
    const hours = Math.floor((uptime / 60) / 60);
    const minutes = Math.floor((uptime / 60) - (hours * 60));
    const seconds = Math.floor(uptime - ((minutes * 60) + ((hours * 60) * 60)));
    const time = `${hours === 0 ? '' : hours +'h '}${minutes === 0 ? '' : minutes + 'm '}${hours !== 0 && seconds === 0 || minutes !== 0 && seconds === 0 ? '' : seconds + 's'}`
    return `${time.trim()}` ;
}

module.exports = formatDate;