$(document).ready(() => {
    
    $("#faq_rollovers h2").each( (index, elem)=>{
        $(elem).hover(
            () => $(elem).next().toggleClass('hidden'),
            () => $(elem).next().toggleClass('hidden')
        );
    });
    
}); // end ready