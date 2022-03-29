document.ready = () => {
    $("img").animate({opacity: 0},0);

    let counter = 5;
    timer = setInterval(()=>{
        counter--
        console.log(counter);
        if(counter == 0){
            $("#header").text("0");
            $('img').animate({opacity:1, width: "500px", height: "500px"},700).animate({width: "255px", height: "225px"}, 300);
            console.log("animiate");
            clearInterval(timer);
            

        }else{
            $("#header").text(counter);
        }
    }
        ,1000);
    
    
}