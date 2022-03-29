document.ready = () => {
    $("#slides img:gt(0)").animate({opacity: 0}, 0)
    let images = $("#slides img");
    let currentIndex = 0;
    let leftPos = $(images[0]).position().left;

    $("#slides img").click( evt => {
        
       $(images[currentIndex]).animate({opacity: 0, marginLeft: "+=205px"}, 1000)
       currentIndex++;
       currentIndex %= images.length;
       $(images[currentIndex]).animate({opacity: 1, marginLeft: leftPos}, 1000)
    $("#header").text(images[currentIndex].alt);
       
    });

    //h1 something
}