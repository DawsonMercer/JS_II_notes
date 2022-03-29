"use strict";

//a) Use the files in the slide_show_2 folder. 
//Add a script which will fade out and fade in each image as a slide show.  
//(You will need to hide all of the images except the first one before beginning the slide show)

document.ready = () => {
    $("img").hide();
    let images = $("img");
    let currentIndex = 0;
    $(images[currentIndex]).show();

    let timer = setInterval(()=>{
        $(images[currentIndex]).fadeOut(1000);
        currentIndex++;
        $(images[currentIndex]).fadeIn(1000);
    }, 3000);


};