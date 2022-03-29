"use strict"

$(document).ready( () => {
	$("#image_list a").each( (index, link) => {
		// get the image URL and caption for each image
		const imageURL = link.href;
		const caption = link.title;

		// preload the image for each link        
		const galleryImage = new Image();
		galleryImage.src = imageURL;
		
		
		// set up the event handlers for each link
		$(link).click( evt => {
			$("#image").slideUp(2000);
			$("#caption").slideUp(2000, 
				()=>{
					$("#image").attr("src", imageURL).slideDown(2000);
					$("#caption").text(caption).slideDown(2000);

			});
			$("#caption").slideDown(2000);
			// cancel the default action of each link
			evt.preventDefault();
		}); // end click 
	}); // end each
}); // end ready