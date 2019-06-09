//1

function setAlarm(time, callback) {  
    return function() {
        (time == arguments[0]) ? callback() : false;
    }
}

function setDailyRhythm(wakeUpTime, bedTime) {
    wakeUpCall = setAlarm(wakeUpTime, goodMorning);
    bedTimeCall = setAlarm(bedTime, goodNight);

    function checkDate(i) {
        return (i < 10) ? '0' + i : i;
    }

    setInterval(() => {
        let currentTime = checkDate(new Date().getHours()) + ':' + checkDate(new Date().getMinutes());
        wakeUpCall(currentTime);
        bedTimeCall(currentTime);
    }, 1000);
}

const goodMorning = () => alert('Доброе утро!');
const goodNight = () => alert('Спокойной ночи!');

setDailyRhythm('07:00', '23:14');