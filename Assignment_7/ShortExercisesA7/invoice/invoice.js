"use strict";

const calculateDiscount = (customer, subtotal) => {
    if (customer == "reg") {
        if (subtotal >= 100 && subtotal < 250) {
            return .1;
        } else if (subtotal >= 250 && subtotal < 500) {
            return  .25;
        } else if (subtotal >= 500) {
            return .3;
        } else {
            return 0;
        }        
    }
    else if (customer == "loyal") {
        return .3;        
    }
    else if (customer == "honored") {
        if (subtotal < 500) {
            return .4;
        }
        else {
            return .5;
        }    
    }
};

const formatDate = (day, month, year)=>{
    const date = new Date(`${month}/${day}/${year}`)
    console.log("date" +date)
    const us = new Intl.DateTimeFormat( "en-US" );
    let formattedInvoiceDate = us.format(date)
    console.log("formatted" + formattedInvoiceDate);
    return formattedInvoiceDate;
};

$( document ).ready( () => {

    $("#calculate").click( () => {
        const customerType = $("#type").val();
        let subtotal = $("#subtotal").val();
        subtotal = parseFloat(subtotal);
        if ( isNaN(subtotal) || subtotal <= 0) {
            alert("Subtotal must be a number greater than zero.");
            $("#clear").click();
            $("#subtotal").focus();
            return;
        }
        const invoiceDate = $("#invoice_date").val();
        console.log(invoiceDate);
        if (invoiceDate == ""){
            alert("Must enter date as MM/DD/YYYY");
            $("#clear").click();
            $("#invoice_date").focus();
            return;
        }

        const dateParts = invoiceDate.split("/");
        const day = dateParts[1];
        const month = dateParts[0];
        const year = dateParts[2];
        if (dateParts.length != 3) {   
            alert( "Please enter the date in MM/DD/YYYY format." );
            return;
        } 
        const formattedInvoiceDate = formatDate(day, month, year);

        if (formattedInvoiceDate == "" || formattedInvoiceDate == "Invalid Date"){
            const now = new Date();
            console.log(now)
            const day = now.getDay();
            const month = now.getMonth();
            const year = now.getFullYear();
            let currentDate = `${month}/${day}/${year}`;
            formattedInvoiceDate = formatDate(day, month, year);
        }
        console.log(formattedInvoiceDate);
        let dueDate = new Date(formattedInvoiceDate);
        dueDate.setDate(dueDate.getDate()+30);
        console.log("due day" + dueDate.getDate());
        console.log("due month"+ dueDate.getMonth());
        console.log("due year" + dueDate.getFullYear());
        let dueDateFormatted = formatDate(dueDate.getDate(), dueDate.getMonth()+1, dueDate.getFullYear());
        console.log(dueDateFormatted);
        $("#invoice_date").val(formattedInvoiceDate);
        $("#due_date").val(dueDateFormatted);

        
        const discountPercent = calculateDiscount(customerType, subtotal);
        const discountAmount = subtotal * discountPercent;
        const invoiceTotal = subtotal - discountAmount;
        
        $("#subtotal").val( subtotal.toFixed(2) );
        $("#percent").val( (discountPercent * 100).toFixed(2) );
        $("#discount").val( discountAmount.toFixed(2) );
        $("#total").val(  invoiceTotal.toFixed(2) );

        // set focus on type drop-down when done  
        $("#type").focus();

    });
    
    $("#clear").click( () => {

        $("#type").val("reg");
        $("#subtotal").val("");
        $("#invoice_date").val("");
        $("#percent").val("");
        $("#discount").val("");
        $("#total").val("");
        $("#due_date").val("");

        // set focus on type drop-down when done
        $("#type").focus();
    })

    // set focus on type drop-down on initial load
    $("#type").focus();
});

