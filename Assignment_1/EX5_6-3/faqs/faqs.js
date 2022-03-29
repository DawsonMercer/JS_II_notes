"use strict";
const $ = selector => document.querySelector(selector);

// the event handler for the click event of each h2 element
const toggle = evt => {
	const arrayOfH2 = document.querySelectorAll("h2")
	for(let h2Element of arrayOfH2){
		const divElement = h2Element.nextElementSibling; 
		if(h2Element != evt.currentTarget){
			h2Element.removeAttribute("class");
			divElement.removeAttribute("class");
		}
		else{
			h2Element.classList.toggle("minus");
			divElement.classList.toggle("open");
		}

	}
		
	evt.preventDefault();           // cancel default action of h2's child <a>
};

document.addEventListener("DOMContentLoaded", () => {
	// get the h2 tags
	const h2Elements = document.querySelectorAll("#faqs h2");
	
	// attach event handler for each h2 tag
	for (let h2Element of h2Elements) {
		h2Element.addEventListener("click", toggle);
	}
	
	// set focus on first h2 tag's <a> tag
	h2Elements[0].firstChild.focus();
});
