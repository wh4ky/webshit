const d = new Date();

function time() {
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    document.getElementById("second").innerHTML = second;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;

}

setInterval(time, 1000);