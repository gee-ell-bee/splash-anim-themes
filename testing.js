
$("#openBtn").one("click", function() {
    console.log("open f(x)");
    // $("main").css({height: "max-content", maxHeight: "max-content"});
    openActivte; // << NOT WORKING CURRENTLY **
// $("#content").animate({opacity: "1"}, "slow");
    // $("#openBtn").fadeOut(2000, "linear");
    
    // console.log("ending", $("main"));
});

function animate(elem, css, t, sty, callback) {
console.log("animate f(x)", elem, css, t, sty, callback);
if (callback !== false && t !== false) {
    console.log("callback true, t true");
    elem.animate(
        css
    , t, sty, function() {callback});
} else if (callback !== false && t == false) {
    console.log("callback true, t false");
    elem.animate(
        css
    , sty, function() {callback});
} else if (callback == false && t !== false) {
    console.log("callback false, t true");
    elem.animate({
        css
    }, t, sty);
} else if (callback == false && t == false) {
    console.log("callback false, t false");
    elem.animate({
        css
    }, sty);
};
};

//==============================
$(".buttons").css({height: "calc((1.25rem + 35px) * 2 + 1.5rem)"});
$("#contBtn").one("click", function() {
    // console.log("open f(x)");
    $(".buttons").css({height: "max-content"});
    // $("main").css({height: "max-content", maxHeight: "max-content"});
    $("#content").animate({height: "20vh"}, "slow", function() {
        $("#contBtn").animate({
            opacity: "0"
        }, 500, function() {
            $("#contBtn").animate({
                height: "0"
            }, 250, "swing", function() {
                $("#contBtn").toggle();
            });
        });
    });
});