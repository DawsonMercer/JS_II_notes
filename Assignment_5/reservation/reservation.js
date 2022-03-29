"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$("#arrival_date").focus();

	$("#reservation_form").submit( event =>{
		let isValid = true;
		

		//validate arrival date
		const arrivalDate = $("#arrival_date").val().trim();

		const isDate = (date) => {
			return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
		}
		console.log(isDate(arrivalDate));
		if(isDate(arrivalDate) == false || arrivalDate == ""){
			$("#arrival_date").next().text("Must be valid date (MM-DD-YYYY)");
			isValid = false;

		}else{
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);

		//validate nights
		const nights = $("#nights").val().trim();
		if(nights == "" || isNaN(nights)){
			$("#nights").next().text("Nights must be numeric");
			isValid = false;
		}else{
			$("#nights").next().text("");
		}
		$("#nights").val(nights)

		//validate name
		const name = $("#name").val().trim();
		if(name == ""){
			$("#name").next().text("Please include name");
			isValid =false
		}else{
			$("#name").next().text("");
		}
		$("#name").val(name);


		//validate email
		const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
		
		
		//validate phone
		const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phone = $("#phone").val().trim();
        if (phone == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false; 
        } else if ( !phonePattern.test(phone) ) {
            $("#phone").next().text("Use 999-999-9999 format.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone);

		// if form is invalid will not submit
		if (isValid == false) {
            event.preventDefault();                
        }

	});	
}); // end ready