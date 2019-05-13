const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setTime() {
    const now = new Date();
    // set timezone to Cairo/Egypt
    now.setTime(now.getTime() + now.getTimezoneOffset() + 122);
    // seconds animation
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // minutes animation
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // hours animation 
    const hours = now.getHours();
    const hoursDegrees = ((hours / 24) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

}
setInterval(setTime, 1000);