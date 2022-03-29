"use strict";

const getMonthText = currentMonth => {
	if (currentMonth === 0) { return "January"; }
	else if (currentMonth === 1) { return "February"; }
	else if (currentMonth === 2) { return "March"; }
	else if (currentMonth === 3) { return "April"; }
	else if (currentMonth === 4) { return "May"; }
	else if (currentMonth === 5) { return "June"; }
	else if (currentMonth === 6) { return "July"; }
	else if (currentMonth === 7) { return "August"; }
	else if (currentMonth === 8) { return "September"; }
	else if (currentMonth === 9) { return "October"; }
	else if (currentMonth === 10) { return "November"; }
	else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = currentMonth => {
	//const endOfMonth = new Date();
	currentMonth.setMonth(currentMonth.getMonth() +1);
	//console.log(currentMonth)
	currentMonth.setDate(0);
	//console.log(currentMonth.getDate());
	return  currentMonth.getDate();

};

const printCalendar= (firstDay, lastDay, month, date)=>{
	let arrayDays = [];
	let day = 1;
	
	for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j <= firstDay) {
                let cell = document.createElement("td");
                let cellDay = document.createTextNode("");
                cell.append(cellDay);
                row.append(cell);
            }
			
            else if (day > lastDay) {
				console.log("day "+day);
				console.log("j"+j);
				console.log("i" + i);
				do{
					let cell = document.createElement("td");
					let cellDay = document.createTextNode("");
					cell.append(cellDay);
					row.append(cell);
					i++;

				}while(i < 6)
				break;
			}
            else {
                let cell = document.createElement("td");
                let cellDay = document.createTextNode(day);
                cell.append(cellDay);
                row.append(cell);
                day++;
            }
        }
        $("#calendar").append(row);
    }
	

	// $("#calendar").html(function(index, ){
	//$("#calendar").append(`<tr><td>${arrayDays[day]}</td><td>${arrayDays[day+1]}</td><td>${arrayDays[day+2]}</td><td>${arrayDays[day+3]}</td><td>${arrayDays[day+4]}</td><td>${arrayDays[day+5]}</td><td>${arrayDays[day+6]}</td></tr>`);
	// $("#calendar").append(`<tr><td>${arrayDays[day]}</td><td>${arrayDays[day+1]}</td><td>${arrayDays[day+2]}</td><td>${arrayDays[day+3]}</td><td>${arrayDays[day+4]}</td><td>${arrayDays[day+5]}</td><td>${arrayDays[day+6]}</td></tr>`);
	
	
	//$("#calendar").html(`<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>`);
	

	
};

$(document).ready(function(){
	let date = new Date();
	let currentMonth = date.getMonth();
	console.log(currentMonth);
	let month = getMonthText(currentMonth);
	console.log(month);
	let year = date.getFullYear();
	$("#month_year").text(month +" "+year);
	let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	firstDay = 1;
	console.log("first Day" +firstDay);
	let lastDay = getLastDayofMonth(date);
	console.log("first day"+firstDay);
	console.log("last day"+lastDay);

	printCalendar(firstDay, lastDay, month, date);
	

});