"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let amPm = null;
    if(hour > 12){
        hour = hour - 12;
        amPm = "PM";
    } else if(hour == 0){
        hour = 12;
        amPm = "AM";
    } else if(hour < 12){
        amPm = "AM";
    } else if(hour == 12){
        amPm = "PM";
    }
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds();
    

    $("#hours").textContent = hour;
    $("#minutes").textContent = padSingleDigit(minutes);
    $("#seconds").textContent = padSingleDigit(seconds); //+" : " + padSingleDigit(date.getMilliseconds());
    $("#ampm").textContent = amPm;

};

document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);    
    
      
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
});