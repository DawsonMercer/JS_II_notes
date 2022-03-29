// Chapter 9

// JQuery effect methods ( show, hide, slideup, fadeIn....etc) 
//I will focus mainly on effect methods used on the assignments
/**
 * The basic syntax for all of the methods except the fadeTo() method
    methodName([duration][, callback]) 
 * 
 */
//fadeTo(duration,opacity[, callback])

//.show(1000) or .hide(1000)
//.slideUp(1000) or .slideDown(1000);
//.fadeIn(1000) or fadeOut(1000);



// Creating a timer
//let timer1 = setInterval(runSlideShow, 3000)

// Cancel and restarting a timer
//clearInterval(timer1)

// Animate method
//.animate({properties}[, duration][, callback]})

/**
 * Animate without a callback function
    $("#faqs h1").animate( { fontSize: "275%", opacity: 1, left: 0 }, 2000);
 */

/**
 * With a callback function
$("#faqs h1").animate({ fontSize: "275%", opacity: 1, left: "+=175" },  2000,
    () => $("#faqs h2").next().fadeIn(1000).fadeOut(1000)
);

 */

// Chained animations
    // $("#faqs h1").click( evt => {
    //     $(evt.currentTarget)
    //         .animate({ fontSize: "650%", opacity: 1, left: "+=275" }, 2000)
    //         .animate({ fontSize: "175%", left: "-=275" }, 1000);
    // });
 
//.animate({properties}[, duration][, easing][, callback]);
//https://easings.net/


// Understand the queue for an element
/**
 * Queued animations
    $("#faqs h1").click( evt => {
        $(evt.currentTarget).animate(
            { fontSize: "650%", opacity: 1,
                left: "+=275" }, 2000);  
        $(evt.currentTarget).animate(
            { fontSize: "175%", left: "-=275" }, 1000);
});
 */

// Understand how to chain animation methods
//.delay(duration) -  Delay the start of the next animation in the queue
//.finish()
//.stop([clearQueue][,jumpToEnd]) stop(true,true), stop(true)


// Understand how to use a callback function for after a animation completes
//.animate({properties}[, duration][, easing][, callback]);
//TODO: review different animate layouts
//TODO: review FAQs
//TODO: do card example - feb 21st

