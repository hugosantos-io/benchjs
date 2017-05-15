module.exports.mark = function(start, comment) {

    if (start) {
        // Get total time
        var total = process.hrtime(start);
        var seconds = total[0];
        var nanoseconds = total[1];

        // Calculate time
        var microseconds = parseInt(nanoseconds / 1000);
        var milliseconds = parseInt(microseconds / 1000);
        var sec_num = parseInt(seconds, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        // Format time	    
        var hours = (10 > hours) ? "0" + hours : hours;
        var minutes = (10 > minutes) ? "0" + minutes : minutes;
        var seconds = (10 > seconds) ? "0" + seconds : seconds;
        var time = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

        // Format comment
        comment = (comment) ? " - " + comment : "";

        return {
            "nanoseconds": nanoseconds,
            "microseconds": microseconds,
            "milliseconds": milliseconds,
            "seconds": seconds,
            "minutes": minutes,
            "hours": hours,
            "time": time,
            "message": "[" + time + "]" + comment
        };
    } else {
        // Start the timer
        return process.hrtime();
    }
}