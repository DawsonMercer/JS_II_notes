"use strict";

$(() =>{
    $("a").click( event =>{
        event.preventDefault();
        const a = event.currentTarget;
        $(a).prev().toggleClass('hide');
        if($(a).prev().hasClass('hide') == false){
            $(a).text("Show less");
        }else{
            $(a).text("Show more");
        }
    });
});

