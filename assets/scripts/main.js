$.fn.descendantOf = function(element) {
    element = $(element)[0];
    var current = this;
    var body    = document.body;
    while (current && current != element && current != document.body) {
        current = $(current).parent()[0];
    }
    if (typeof(current) == "undefined" || typeof(current) == "null") {
        return false;
    } else if (current == element) {
        return true;
    } else if (current == document.body) {
        return false;
    }
}

$(document).ready(function(){

    // For main menu
    $("#dropdown-btn").click(function(e){
        e.preventDefault();
        $("#dropdown-menu").slideToggle(100);
    });
    $(document).click(function(e) {
        if (!$(e.target).descendantOf("#dropdown-wrapper")) {
            $("#dropdown-menu").fadeOut(100);      
        }
    });

    

});
