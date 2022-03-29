"use strict"

$(document).ready( () => {
	console.log("DOCUment ready")
	$("#investment").focus();
	$("#calculate").click( () => {
		$("#investment").focus();
		const investment = parseFloat($("#investment").val());
		const rate = parseFloat($("#rate").val());
		const years = parseFloat($("#years").val());

		if ( isNaN(investment) || $("#investment").val() == ""|| investment <= 0){
			alert("Investment must be a valid number greater than zero.");
		}
		else if(isNaN(rate) || $("#rate").val() == "" || rate <= 0){
			alert("Annual rate must be a valid number greater than zero.");
		}
		else if(isNaN(years) || $("#years").val() == "" || years<=0){
			alert("Years must be a valid number and greater than zero.");
		}
		else{ 
			let futureValue = investment;
    		for (let i = 1; i <= years; i++ ) {
        		futureValue += futureValue * rate / 100;
    		}
    		$("#future_value").val(futureValue.toFixed(2));
		}

	});

	
});
