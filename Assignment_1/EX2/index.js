"use strict";

const $ = selector => document.querySelector(selector);

const processEntry = () =>{
    const email_1 = $("#email_address1");
    const email_2 = $("#email_address2");
    const first_name = $("#first_name");
    let confirm_string = "@cna.nl.ca";

//TODO: fix the error that shows the "fill out form" alert
    let formIsComplete = true;
    if (email_1.value == ""){
        formIsComplete = false;
    }
    if (email_2.value == ""){
        formIsComplete = false;
    }
    if (first_name.value == ""){
        formIsComplete = false;
    }
    if (formIsComplete == false){
        alert("Please fill out all fields.");
    }
    if(email_1.value != email_2.value || !email_1.value.includes(confirm_string) || !email_2.value.includes(confirm_string)){
        //this allows for only 1 alert to be shown at once. if the user doesnt have all of the info filled out only the "please fill all fields" alert will display
        if(formIsComplete != false){
            alert("Both email entries must match.\nBoth entries must include '@cna.nl.ca'");
            formIsComplete = false;
        }
        
    }
    if(email_1.value === email_2.value && email_1.value.includes(confirm_string) && email_2.value.includes(confirm_string) &&  first_name.value !=""){
        formIsComplete = true;
        $("#email_form").submit();
    }

};


document.addEventListener("DOMContentLoaded", () =>{
    $("#join_list").addEventListener("click", processEntry);

});