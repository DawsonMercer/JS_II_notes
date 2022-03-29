"use strict";

const $ = selector => document.querySelector(selector);


const submitForm = () => {
    const email = $("#email_address");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");

    let formIsComplete = true;
    if(email.value == ""){
        email.nextElementSibling.textContent = "Required section.";
        formIsComplete = false;
    }else{
        email.nextElementSibling.textContent = "*";
    }

    if (phone.value == ""){
        phone.nextElementSibling.textContent = "Required section.";
        formIsComplete = false;
    }else{
        phone.nextElementSibling.textContent = "*";
    }

    if (country.value == ""){
        country.nextElementSibling.textContent = "Select country.";
        formIsComplete = false;
    }else{
        country.nextElementSibling.textContent = "*";
    }

    if (terms.checked == false){
        terms.nextElementSibling.textContent = "Accept the Terms of Service";
        formIsComplete = false;
    }else{
        terms.nextElementSibling.textContent = "*";
    }
    
    if(formIsComplete == true){
        $("#registration_form").submit();
    }
    
}

const resetForm = () =>{
    $("#registration_form").reset();
    $("#email_address").nextElementSibling.textContent = "*";
    phone.nextElementSibling.textContent = "*";
    country.nextElementSibling.textContent = "*";
    terms.nextElementSibling.textContent = "*";
    $("#email_address").focus();
}

document.addEventListener("DOMContentLoaded", () =>{
    $("#email_address").focus();
    $("#register").addEventListener("click", submitForm);
    $("#reset_form").addEventListener("click", resetForm); 
});
