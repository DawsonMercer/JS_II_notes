"use strict";

let date = new Date();
let month = date.getMonth();
let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


document.write(`<h3>Today's date is ${months[month]} ${date.getDate()}, ${date.getFullYear()}.<h3>`);