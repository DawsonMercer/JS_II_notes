"use strict";

$(document).ready( () => {
	
	const slider = $("#image_list");                     // slider = ul element
	let leftProperty = 0;
	let newLeftProperty = 0;


	$("#image_list a").click( (event) =>{
		$("#image")
		.animate({opacity: 0, marginLeft: "-=205" }, 1000, ()=>{
			const link = event.currentTarget;
			const imageURL = $(link).attr("href");
			$("#image").attr("src", imageURL);

		})  
		.animate({ opacity: 1, marginLeft: "+=205" }, 1000);  
		event.preventDefault();

	});
		
	// the click event handler for the right button						
	$("#right_button").click( () => { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 300; 
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	

	// the click event handler for the left button
	$("#left_button").click( () => {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		} else {
			newLeftProperty = 0;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click	
	
}); // end ready