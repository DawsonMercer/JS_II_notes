"use strict";

$( document ).ready( () => { 

    let checkDate = (day, month, year, date)=>{
        let isValid = false;
        let list31 = [1,3,5,7,10,12];
        let list30 = [4,6,9,11];
        for(let i = 0; i<list31.length; i++){
            if (list31[i] == month && 31>= day >=1){
                isValid = true;
                break;
            }
        }
        for(let i = 0; i<list30.length; i++){
            if (list30[i] == month && 30>=day>=1){
                isValid = true;
                break;
            }
        }
        if (month == 2 && 29>=day>=1){
            isValid = true;
            if(year % 4 != 0 && day==29){
                isValid = false;
            }
        }
        console.log(isValid);
        if(!isValid){
            $("#message").text("Incorrect day entry for given month");
            date = "Invalid Date";
            return [isValid, date];
        }else{
            return[isValid, date]
        }

    };

    $("#countdown").click( () => {
        const eventName = $("#event").val();
        const eventDate = $("#date").val();  
        const messageLbl = $("#message");  
        
        // make sure user entered task and event date 
        if (eventName.length == 0 || eventDate.length == 0) {
            messageLbl.text( "Please enter both a name and a date." );
            return;
        }  
      
        // make sure event date string has two slashes 
        const dateParts = eventDate.split("/");
        if (dateParts.length != 3) {   
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        } 
        // make sure event date string has a 4-digit year
        const year = eventDate.substring(eventDate.length - 4); 
        if (isNaN(year)) {
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }     

        console.log(dateParts)
        const day = dateParts[1]
        const month = dateParts[0]
        if(month < 1 || month > 12){
            messageLbl.text("Month must be between 1-12")
            return;

        }
        console.log(day);
        console.log(month);
        console.log(year);
        
        // convert event date string to Date object and check for validity
        let date = new Date(eventDate);
        let verify  = checkDate(day, month, year);
        let isValid = verify[0];

        if (!isValid && verify[1] == "Invalid Date"){
            messageLbl.text("Incorrect day entry for given month");
            return;
        }
        if (date == "Invalid Date") {
            messageLbl.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }

        // capitalize each word of event name
        let formattedName = "";
        const words = eventName.split(" ");
        for (const i in words) {
            const firstLetter = words[i].substring(0,1).toUpperCase();
            const word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length + 1);
        } 
        formattedName = formattedName.trimEnd();     

        // calculate days
        const today = new Date();
        const msFromToday = date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        let daysToDate = Math.ceil( msFromToday / msForOneDay ); 

        // create and display message 
        let msg = "";
        date = date.toDateString();
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${formattedName}! (${date})`;
        }
        else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${formattedName}! (${date})`;
        }
        else if (daysToDate < 0) {
            daysToDate = Math.abs(daysToDate);
            msg = `${formattedName} happened ${daysToDate} day(s) ago. 
                  (${date})`;
        }
        messageLbl.text(msg);
        if(month >12 && month < 1){
            $("#message").text("Month must be between 1-12");
            date = "Invalid Date"
        }

    });
    
    $("#event").focus();
});