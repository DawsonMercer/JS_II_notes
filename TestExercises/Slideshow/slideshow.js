"use strict";

$(document).ready(()=>{
  
    let imageCache = [];
    $("#image_list a").each( (index, a) => {    
        const image = new Image();
        image.src = $(a).attr("href");
        imageCache[index] = image;
        console.log("Prelaoded" + image.src);
        console.log(image);
       });



    let imageCounter = 0;
    setInterval( ()=>{
        $("#image").animate({height: "toggle", width: "toggle"},1500,
        ()=>{
        
            imageCounter ++;
            imageCounter %= imageCache.length;
            const nextImage = imageCache[imageCounter];
            $("#image").attr("src", nextImage.src);
            $("#image").animate({height: "toggle", width: "toggle"},1500);
            console.log( nextImage.src);

        });
        


    }, 3000 );


});