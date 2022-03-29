"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");

    // process each img tag
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;
        console.log(image.src);
        console.log(image.id)

        // preload rollover image
        let newImage = new Image();
        newImage.src = image.id;
        
        // set up event handlers for hovering an image
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });

        let timer = setTimeout( () => {
            image.src = newURL;
            console.log("Old images now being displayed");
        }, 1000);
        setTimeout( () =>{
            image.src = oldURL;
            console.log("NEW images now being displayed");
        }, 2000);
    }
    

});