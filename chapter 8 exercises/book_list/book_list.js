"use strict";
//addready event

$(document).ready( ()=> {

    $("h2").click( evt =>{
        $("#image").attr("src", "");
        const h2 = evt.currentTarget;
        $(h2).toggleClass("minus");
        // $(h2).next().show();
        const classAttribute = $(h2).attr("class");
        if(classAttribute == "minus"){
            $(h2).next().show();
        }
        else{
            $(h2).next().hide();
        }


    });
    
    const links = $("a");
    links.each( (index, img) =>{
        let imageElem = new Image();

        imageElem.src = img.href;
        console.log("preloading img " + imageElem.src);

        $(img).click(evt =>{
            evt.preventDefault();
            $("#image").attr("src", $(img).attr("href"));

        });


    });
    // for (let i = 0; i<links.length; i++){
    //     let img = new Image();
    //     img.src = $(links[i]).attr("href");
    //     console.log("preloading image " + img.src);

    //     $(links[i]).click( evt =>{
    //         evt.preventDefault();

    //         $("img").src = links[i].href;

    //         $("#image").attr("src", links[i].href);


    //     });
    // }

});

//insdie ready event, do a selector for all of the h2 elements and add a clcik handler for them to 
// to maje their sibling <div> visible

//for every <a> yoi will need to preload the image and add a click hjandlker which:
//setup the <img> to use the url link, and cancels the default action

//if one of the h2 elemtns is clicekd, you newed ot ohide the image 


