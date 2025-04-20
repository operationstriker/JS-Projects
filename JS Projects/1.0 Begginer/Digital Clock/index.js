const body = document.body

function updateclock() {
    const DateID = document.getElementById("DateID");
    const date = new Date();
    
    let hours = date.getHours();

    if (hours >= 12) {
       DateID.textContent = "PM"
    } else if (hours <= 12) {
       DateID.textContent = "AM"
    }

    if(hours >= 18) {
        body.style.backgroundColor = "rgb(232, 180, 82);"
    }
  
    const HoursText = document.getElementById("HoursText");
    const MinutesText = document.getElementById("MinutesText");
    const SecondsText = document.getElementById("SecondsText");
    
    HoursText.textContent = date.getHours()
    MinutesText.textContent = date.getMinutes()
    SecondsText.textContent = date.getSeconds()
}

updateclock() // invoke it
setInterval(updateclock, 1000)  // setInterval method calls a function at specified intervals. basically updates the code every second