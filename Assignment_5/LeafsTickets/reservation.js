$(document).ready(function() {

	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	/*
	calculate the price whenever the select buttons or radio buttons are pressed
	*/
	let calculatePrice = () =>{
		console.log("Triggered");
		//center ice adults 400
		//center ice kids 380

		// best value adult 300
		//best value kid 280

		//corporate adult 600
		//corporate kids 500
		console.log("Price function")
		const price = $("#price")
		const adults = $("#adults").val();
		console.log(adults)
		const kids = $("#children").val();
		let cost = 0;
		if($("input[name=location]:checked").val() == "center"){
			console.log("centre");
			cost = Math.round((400*adults) + (380*kids));
			console.log(cost);
			price.val(cost);
		}else if($("input[name=location]:checked").val() == "standard"){
			console.log("standard");
			cost = Math.round((300*adults) + (280*kids));
			console.log(cost);
			price.val(cost);

		}else if($("input[name=location]:checked").val() == "suite"){
			console.log("suite");
			cost = Math.round((600*adults) + (500*kids));
			console.log(cost);
			price.val(cost);

		}


	}
	calculatePrice();
	// selects all of the select buttons on the page
	$("select").change(calculatePrice);
	
	//selects the inputs on the page
	$("input[name=location]").click(calculatePrice);
	
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


		if (isValid == false) {
			event.preventDefault();                
		}
	});
	
}); // end ready