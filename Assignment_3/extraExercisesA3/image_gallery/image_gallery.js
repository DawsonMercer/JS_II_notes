"use strict";
$(document).ready( ()=>{
    $("li a").first().focus();
    
    $("#image_list a").each( (index, a)=>{
        const url = a.href;
        const title = a.title;
             

        // preload rollover image		
        const rolloverImage = new Image();
        rolloverImage.src = a;

        $(a).click( evt =>{
            //evt.preventDefault();
            const a = evt.currentTarget;
            console.log(title);
            $("#caption").text(title);           
            $("img").src = url;
            // console.log($("img").src);
            $("#image").attr("src", url);            
            evt.preventDefault();
        });

    });

});