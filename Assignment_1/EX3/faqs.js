"use strict";

var $ = function(id) { 
    return document.getElementById(id); 
};

/* 
    the event handler for the click event of each h2 green element
*/
var toggle1 = function() {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");

    } else { 
        h2.setAttribute("class", "minus");
    }
    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
        $("title").setAttribute("style", "color: black");
    } else { 
        div.setAttribute("class", "open");
        $("title").setAttribute("style", "color: green");
    }
};

/* 
    the event handler for the click event of each h2 waffles element
*/
var toggle2 = function() {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");

    } else { 
        h2.setAttribute("class", "minus");
    }
    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
        $("waffles_img").setAttribute("style", "display: none");
    } else { 
        div.setAttribute("class", "open");
        $("waffles_img").setAttribute("style", "display: block");


    }
};

/*
    the event handler for the click event of each h2 traitor element
*/
var toggle3 = function() {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");

    } else { 
        h2.setAttribute("class", "minus");
    }
    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
        $("survivor").setAttribute("style", "display: none");

    } else { 
        div.setAttribute("class", "open");
        $("survivor").setAttribute("style", "display: block");

    }
};

/*
assigns the h2 elements to an array called h2Elements
based on which h2 element is clicked, a different function is called
*/
window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[0].onclick = toggle1;
        h2Elements[1].onclick = toggle2;
        h2Elements[2].onclick = toggle3;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
};
