const secStick = document.getElementById("sec");
const minStick = document.getElementById("min");
const hrStick = document.getElementById("hr");

function updateClock(){
    let date = new Date();
    let sec = date.getSeconds()/60;
    let min = (date.getMinutes() + sec)/60;
    let hour = (date.getHours() + min)/12;

    secStick.style.transform = "rotate("+ (sec*360) + "deg)";
    minStick.style.transform = "rotate("+ (min*360) + "deg)";
    hrStick.style.transform = "rotate("+ (hour*360) + "deg)";
}

updateClock();

setInterval(updateClock, 1000);