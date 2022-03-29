"use strict";

$(document).ready( () => {
	// preload images
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click( evt => {
		evt.preventDefault();
		
		$("#caption, #image").fadeOut(1000,
			()=> {
				console.log("FADEEE");
				const link = evt.currentTarget;
				//link.fadeOut(1000)
				const imageURL = $(link).attr("href");
				$("#image").attr("src", imageURL);
						
				const caption = $(link).attr("title");
				$("#caption").text(caption);

				// cancel the default action of the link	
			});
		$("#caption, #image").fadeIn(1000);
			
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready