const Hours = document.getElementById("Hour");
const Minutes = document.getElementById("Minutes");
const Secound = document.getElementById("Secound");
const amPmEl = document.getElementById("amPm");
const YearsEl = document.getElementById("Years");
const DayEl = document.getElementById("Days");
const MonthEl = document.getElementById("Month");
function UpdateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let y = new Date().getUTCFullYear();
    let d = new Date().getDay();
    let getMonth = new Date().getMonth();
    let ampm = "AM";


    if (h > 12){
        h = h- 12;
        ampm = "PM";
    };
    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;
    d = d < 10 ? "0" + d: d;
    getMonth = getMonth < 10 ? "0" + getMonth: getMonth;
    Hours.innerText = h;
    Minutes.innerText = m;
    Secound.innerText = s;
    amPmEl.innerText = ampm;
    YearsEl.innerText = y;
    DayEl.innerText = d;
    MonthEl.innerText = getMonth;

    setInterval(function(){ 
        UpdateClock()
    }, 1000);



};
UpdateClock()