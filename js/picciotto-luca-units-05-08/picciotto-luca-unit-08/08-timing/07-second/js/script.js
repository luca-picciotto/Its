function getSecondToday() {
    let date = new Date();
    let seconds = date.getSeconds() + 60 * (60* date.getHours());
    console.log(seconds);
    return seconds;
}

const getSecondToTomorrow = () => {
    let date = new Date();
    let seconds = 86400 - date.getSeconds() + 60 * date.getHours();
    console.log(seconds);
    return seconds;
}

getSecondToday();
getSecondToTomorrow();
