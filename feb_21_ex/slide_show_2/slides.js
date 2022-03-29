"use strict";

document.ready = () => {
    let images = $("img");
    $("img").hide();

    let currentIndex = 0;
    $(images[currentIndex]).show();
    setInterval(() =>{
        $(images[currentIndex]).fadeOut(1000);
        currentIndex +=1;
        currentIndex%=images.length;
        $(images[currentIndex]).fadeIn(1000);

    },2000)

};