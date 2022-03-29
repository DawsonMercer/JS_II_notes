/**
 * Use the files in the card_deck folder.

The javascirpt / jquery code loops through each card
when the card is clicked


Enhance the code to use the animate method to show the card moving to the right and fading
out over 1 second when it is clicked


Add code to change the h1 element to use the text of the alt attribute of the currently displayed
card
 */
"use strict";
$(document).ready(()=>{
    $("#slides img:gt(0)").animate({opacity: 0}, 0);
    let images = $("#slides img");
    let currentIndex = 0;
    let leftPos = $(images[0]).position().left;

    $("#slides img").click((event)=>{
        $(images[currentIndex]).animate({opacity: 0, marginLeft: "+=205px"}, 1000);
        currentIndex ++;
        currentIndex %= images.length;
        $(images[currentIndex]).animate({opacity: 1, marginLeft: leftPos}, 1000);
        $("#header").text(images[currentIndex].alt);

    })


});