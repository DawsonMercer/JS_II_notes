"use strict";

$(document).ready( () => {
    // Create an object literal named Weather
    // it will have 2 properties ( temperature, precipitation )
    // it will have 1 method ( Get Weather Report ), 
    // which will return a string that contains temperature and precip in a string descripbing the weather
    const Weather = {
        temperature: 30,
        precipitation: 22,
        getWeatherReport(){
            return `Temp: ${this.temperature}C\nPrecip: ${this.precipitation}mm`            

        }
    };
    //console.log each of the two properties
    //console.log the result of calling the method
    console.log(Weather.temperature);
    console.log(Weather.precipitation);
    console.log(Weather.getWeatherReport());
});