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
    let ampm = "AM";
    const month_a = [1,2,3,4,5,6,7,8,9,10,11,12];
    const Month_Computer = new Date();
    let getMonth = month_a[Month_Computer.getMonth()];
    MonthEl.innerHTML = getMonth;
    let day_a = new Date();
    DayEl.innerHTML = day_a.getDate();
    
    if (h > 12){
        h = h- 12;
        ampm = "PM";
    };
    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;
    Hours.innerText = h;
    Minutes.innerText = m;
    Secound.innerText = s;
    amPmEl.innerText = ampm;
    YearsEl.innerText = y;
    
   

    



    
};
UpdateClock()
