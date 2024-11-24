// functions
$(document).ready(function() {
    // console.log("document ready");
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

    $("#blueB").on("click", function() {
        console.log("clicked!");
        $(".bg.red").animate({
            backgroundColor: jQuery.Color("rgb(193, 43, 43)")
        }, "slow");
    });
    
});

function animButtons(elem, {css}) {
    elem.animate({css}, 1000, "swing");
    return elem;
}