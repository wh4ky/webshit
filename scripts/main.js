function time() {
    const d = new Date();
    document.getElementById("second").innerHTML = d.getSeconds();
    document.getElementById("minute").innerHTML = d.getMinutes();
    document.getElementById("hour").innerHTML = d.getHours();
    document.getElementById("day").innerHTML = d.getDate();
    document.getElementById("month").innerHTML = d.getMonth();
    document.getElementById("year").innerHTML = d.getFullYear();

}

setInterval(time, 1000);