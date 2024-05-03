//toggle effect
document.getElementById('themeToggle').addEventListener('click', function() {
    var body = document.body;
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        this.textContent = '🌜'; // Change to moon icon
    } else {
        body.classList.replace('dark', 'light');
        this.textContent = '🌞'; // Change to sun icon
    }
});

//clock
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;
   setRotation(secondHand, secondsRatio);
   setRotation(minuteHand, minutesRatio);
   setRotation(hourHand, hoursRatio);

}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360);
}

//calendar
document.addEventListener("DOMContentLoaded", function() {
    var dateInfo = document.getElementById('dateInfo');
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateInfo.textContent = date.toLocaleDateString('en-US', options);
});