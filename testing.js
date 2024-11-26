
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

// orig iteration for #BLUE
$(".bg.red").animate({
    backgroundColor: jQuery.Color("rgba(226, 135, 135, 0.851)")
}, "slow");
$(".bg.pink").animate({
    backgroundColor: jQuery.Color("rgba(115, 165, 209, 0.349)")
}, "slow");
$(".bg.blue").css({
    mixBlendMode: "soft-light"}).animate({
    backgroundColor: jQuery.Color("rgb(20, 80, 208)")
}, "slow");

// orig if then for #MAUVE

$("#mauve").on("click", function() {
    // console.log("clicked!");
    $(".bg").each(function () {
        if($(this).hasClass("red")) {
            $(this).animate({
                backgroundColor: jQuery.Color("rgba(226, 135, 135, 0.851)")
            }, "slow");
            return false;
        } else if($(this).hasClass("pink")) {
            $(this).animate({
                backgroundColor: jQuery.Color("rgba(115, 165, 209, 0.349)")
            }, "slow");
            return false;
        } else if($(this).hasClass("blue")) {
            $(this).css({
            mixBlendMode: "soft-light"})
            .animate({
            backgroundColor: jQuery.Color("rgb(20, 80, 208)")
            }, "slow");
        };
    });
    $(".hdrCol.red h1").animate({
        color: jQuery.Color("rgb(225, 17, 51)")
    }, "slow");

    switchCurrent($(this));
});


    // ifDivBlue function, fully typed
    // const ret = return false;
    const animDivBlue = itemAnim(item, color);
    if(item.hasClass("blue") && btn.attr("id") == "blue") { 
        console.log("if button was #blue");
        item.css({
            mixBlendMode: "hard-light"}); // then use hard light
            
            itemAnim(item, color);
            return false;
    } else if(item.hasClass("blue") && btn.attr("id") == "mauve") { // ..AND button clicked was #mauve
        console.log("if button was #mauve");
        item.css({
            mixBlendMode: "soft-light"}); // then use soft light
            
        itemAnim(item, color);
        return false;
    } else if(item.hasClass("blue")) {
        console.log("item is just blue");
        itemAnim(item, color);
        return false;
    };