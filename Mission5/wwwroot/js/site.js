// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(document).ready(function() {
    $("#calculate").click(function() {
        let hours = $("#hours").val(); // Get hours input
        let rate = $("#rate").val(); // Hourly rate

        // Validation: Check if the input is a positive number
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid positive number of hours.");
            $("#hours").val(""); // Clear input if invalid
            return;
        }
        
        // Calculate total
        let total = hours * rate;
        
        $("#total").val(`$${total.toFixed(2)}`); // Display result
    });
});