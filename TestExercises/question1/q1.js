"use strict";
$(document).ready(()=>{
    $("a").click((evt)=>{
        let a = evt.currentTarget;
        //console.log(a.textContent);
        $("#book_info").text(a.textContent);
        
        evt.preventDefault();
    });

});