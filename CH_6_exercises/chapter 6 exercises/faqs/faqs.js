"use strict";

// the event handler for the click event of each h2 element
const toggle = evt => {
    console.log("clicked");
    const linkElement = evt.currentTarget;                 // get the clicked h2 element
    const divElement = linkElement.parentElement.nextElementSibling;     // get h2's sibling div

    const h2Element = linkElement.parentElement;
    if(h2Element.hasAttribute("class")){
        h2Element.removeAttribute("class");

    }else{
        h2Element.setAttribute("class", "minus");
    }
    if(div.hasAttribute("class")){
        div.removeAttribute("class");
    }else{
        div.setAttribute("class", "open");
    }

    evt.preventDefault();   // cancel default action of h2 tag's <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const linkElements = faqs.querySelectorAll("#faqs a");
    
    // attach event handler for each h2 tag	    
    for (let link of linkElements) {
        link.addEventListener("click", toggle);
    }
    // set focus on first h2 tag's <a> tag
    linkElements[0].focus();       
});