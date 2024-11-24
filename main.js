// functions
$(document).ready(function() {
    console.log("document ready");
    $("#curtain").fadeOut(500);
    

    $("#hdrBack").delay(1000).animate({
        fontSize: "42vw",
        marginLeft: "-20vw"}, 3800, "swing"
    );
    $("#hdrFront").delay(1000).animate({
        fontSize: "42vw",
        marginTop: "0",
        marginLeft: "-20vw"}, 3800, "swing"
    );
    
});