"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");

    
    // preload images
    var links = $("#image_list").querySelectorAll("a");
    for (let link in links){
        let image = new Image();
        image.src = link.href;
        console.log("Caching Image " +image.src);
    }
    
    //loop through and reload the image
    // attach mouseover and mouseout events for each image
   
    image1.addEventListener("mouseover", () => {
        //release
        image1.src = "images/release.jpg";
    });
    image1.addEventListener("mouseout", () => {
        //hero
        image1.src = "images/hero.jpg";
    });
    image2.addEventListener("mouseover", () => {
        //deer
        image2.src = "images/deer.jpg";

    });
    image2.addEventListener("mouseout", () => {
        //bison
        image2.src = "images/bison.jpg";

    });           
    

});
