"use strict";
$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	let calculatePrice= ()=>{
		const price = $("#price")
		const adults = $("#adults").val();
		const kids = $("#children").val();
		let cost = 0;
		let adultPrice = 500;
		let kidsPrice = 350;
		cost = (adultPrice*adults)+(kidsPrice*kids);
		price.val(cost);
		if($("#code").val() == "Eric"){
			cost = cost * 0.7
			price.val(cost);
			console.log(cost)

		}

	};
	calculatePrice();
	$("select").change(calculatePrice);
	let code = $("#code").val();
	$("#code").on("input", calculatePrice);
	$(code).change(calculatePrice);


	$("#reservation_form").submit( event =>{
		calculatePrice();

		let isValid = true;
		
		//validate arrival date
		const arrivalDate = $("#arrival_date").val().trim();

		if(arrivalDate == ""){
			$("#arrival_date").next().text("Must be valid date (MM-DD-YYYY)");
			isValid = false;

		}else{
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);
		
		 
		
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


		if (isValid == false) {
			event.preventDefault();                
		}
	});


}); // end ready