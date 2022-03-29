"use strict";


const makeChange = (cents)=>{
    let quarters = Math.floor(cents / 25);
    let dimes = Math.floor((cents - (quarters*25))/10);
    let nickels = Math.floor(((cents - (quarters*25))-(dimes*10))/5);
    let pennies = Math.floor((((cents - (quarters*25))-(dimes*10))-((nickels*5)))/1);
    $("#quarters").val(quarters);
    $("#dimes").val(dimes);
    $("#nickels").val(nickels);
    $("#pennies").val(pennies);
    $("#cents").focus();

      
};

const processEntry = () => {
    const cents = $("#cents").val();
    if (isNaN(cents) || cents < 0|| cents > 99 || cents == ""){
        alert("Cents must be a number between 0-99");
        $("#cents").focus();
    }else{
        makeChange(cents);
    }  
};

$(document).ready( () => {
    $("#calculate").click( () => {
        processEntry();
        
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method