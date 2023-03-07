function isMorning() {
    const timeNow = new Date(Date.now());
    const nowHour = timeNow.getHours();
    const nowMin = timeNow.getMinutes();
    if (nowHour >= 5 && nowHour <= 10) {
        if (nowHour === 10 && nowMin > 30) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export default isMorning;
