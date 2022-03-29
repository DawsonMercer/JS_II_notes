"use strict";

const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};

$(document).ready( () => {
    $("#generate").click( () => {
        $("#password").val( "" ); // clear previous entry
        const number = $("#num").val();
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        if(isNaN(number)){
            alert("Please enter a valid number");
            $("#num").focus();
            $("#clear").click();
        }else{
            let password = "";
            for (let i = 0; i <parseInt(number); i++){
                let randomChar = getRandomNumber(chars.length);
                //console.log(randomChar);
                password += chars[randomChar-1];
                //console.log(chars[randomChar]);
            }         
            $("#password").val(password);
            console.log(password);

        }

        
    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()