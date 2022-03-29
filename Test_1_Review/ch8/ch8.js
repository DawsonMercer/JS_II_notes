// Chapter 8

// -What is JQuery

//jQuery is a language that makes js easier
// What jQuery offers
// Dozens of selectors, methods, and event methods that make it 
// easier to add JavaScript features to your web pages
// A lightweight, compressed library that loads quickly so it doesn’t 
// degrade performance
// Cross-browser compatibility
// Selectors that are compliant with CSS3


// -Advantages of JQuery
//The advantage of using the show() and hide() 
//methods is that it allows an app to work without any extra CSS classes.
//jquery is quick

// -Selectors ex// $(#faqs h2").. there are many)
//I will focus mainly on selectors we used on the assignments
//$("li a") - Select all a elements in the list
//("#faqs li") select all li elements from the faqs id
//[attribute]:hidden - get the hidden 
//[:checked] or [:unchecked]

// -JQuery Methods ( ex// val, text, next.... 
//there are many) I will focus mainly on methods we used on the assignments
//.text() setting the text for an html element
//.val() get value of input
//.val("Words") set value of input
//.next() - next parent or sibling
//.find(selector) - find the html element
//.css("background-color", "red") 
//.css("background-color")
//.addClass(className)
//.removeClass(className)
//.toggleClass(className) - will add or remove class depending its state
//.hide(duration) .show(duration)


// -JQuery event methods ( ex// ready, click, .. 
//there are many) I will focus mainly on event methods we used on the assignments
// evt.currentTarget used in identifying the elem that caused the event
//evt.preventDefault() - preventing default action of something (like or form)
//.each( (index, element) =>{}); - example
/**
 * const links = $("a");
    links.each( (index, img) =>{
        let imageElem = new Image();

        imageElem.src = img.href;
        console.log("preloading img " + imageElem.src);

        $(img).click(evt =>{
            evt.preventDefault();
            $("#image").attr("src", $(img).attr("href"));

        });
    });
 */
//.click(evt) - example
/**
 * $("h2").click( evt =>{
 *  const h2 = evt.currentTarget;
 *  $(h2).toggleClass("minus");
    // $(h2).next().show();
    const classAttribute = $(h2).attr("class");
    if(classAttribute == "minus"){
        $(h2).next().show();
    }
    else{
        $(h2).next().hide();
    }
 * });
 */


    // set up event handlers for hovering over an image
        // $(img).hover(   // use jQuery syntax to access hover() method
        //     () => img.src = newURL,  // hover over
        //     () => img.src = oldURL   // hover out
        // ); 
        // $(img).mouseover( () => {
        //     img.src = newURL;
        //     console.log("Mouse over");
        // });
        // $(img).mouseout( () => {
        //     img.src = oldURL;
        //     console.log("Mouse out");

        // });
