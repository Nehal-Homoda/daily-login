



export default {
    /*||
    *| Convert any number to short number 
    *| Like (1k, 1m, 1b, 1t) 
    **/
    shortNumber(num) {
        num = typeof num == 'number' ? parseInt(num) : 0;
        /*==| K CONVERTER (1,000 / 1,000,000) |==*/
        if (num >= 1000 && num < 1000000) {

            if (num < 10000) {
                return num.toString()[0] + "k"
            }
            if (num < 100000) {
                return num.toString().slice(0, 2) + "k"
            }
            return num.toString().slice(0, 3) + "k"
        }
        /*==| M CONVERTER (1,000,000 / 1,000,000,000)|==*/
        if (num >= 1000000 && num < 1000000000) {

            if (num < 10000000) {
                return num.toString()[0] + "M"
            }
            if (num < 100000000) {
                return num.toString().slice(0, 2) + "M"
            }
            return num.toString().slice(0, 3) + "M"
        }
        /*==| B CONVERTER (1,000,000,000 / 1,000,000,000,000)|==*/
        if (num >= 1000000000 && num < 1000000000000) {

            if (num < 10000000000) {
                return num.toString()[0] + "B"
            }
            if (num < 100000000000) {
                return num.toString().slice(0, 2) + "B"
            }
            return num.toString().slice(0, 3) + "B"
        }
        /*==| B CONVERTER (1,000,000,000,000 / 1,000,000,000,000,000)|==*/
        if (num >= 1000000000000 && num < 1000000000000000) {

            if (num < 10000000000000) {
                return num.toString()[0] + "T"
            }
            if (num < 100000000000000) {
                return num.toString().slice(0, 2) + "T"
            }
            return num.toString().slice(0, 3) + "T"
        }
        return num;
    },
    countDownTimerBySeconds(seconds) {
        if (!seconds) return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        }

        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const remainingSeconds = seconds % 60;

        let d = days < 0 ? 0 : days;
        let h = hours < 0 ? 0 : hours;
        let m = minutes < 0 ? 0 : minutes;
        let s = remainingSeconds < 0 ? 0 : remainingSeconds;


        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        return {
            days: d.toString(),
            hours: h.toString(),
            minutes: m.toString(),
            seconds: s.toString(),
        }

    }
}