
$("#openBtn").one("click", function() {
    console.log("open f(x)");
    // $("main").css({height: "max-content", maxHeight: "max-content"});
    openActivte; // << NOT WORKING CURRENTLY **
// $("#content").animate({opacity: "1"}, "slow");
    // $("#openBtn").fadeOut(2000, "linear");
    
    // console.log("ending", $("main"));
});

/* FOR SCSS TO JS REF
ELEM----
scale(1) tX(0) tY(0)

result
scale(0.49) tX(-9.5rem) tY(-7rem)

font-size 259.55px = 42vw
width = 618px 

SHAD -----------  
//orig font size 30rem
//result scale(0.51) tY(-7rem)
*/

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


// put hdr back
$("#hdrBack").addClass("return");
$("#hdrFront").delay(1000).animate({
    fontSize: "80vw",
    marginTop: "0.7rem",
    marginLeft: "-15rem"}, 3800, "swing"
    // scale(1) tX(0) tY(0)

    //result
    // scale(0.49) tX(-9.5rem) tY(-7rem)

    // font-size 259.55px = 42vw
    // width = 618px
);

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