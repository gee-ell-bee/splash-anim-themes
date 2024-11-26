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

    $("#blue").on("click", function() {
        // console.log("clicked!");
        switchCurrent($(this));

        changeBgs($("#blue"), "rgb(193, 43, 43)", "rgb(20, 103, 176)", "rgb(20, 80, 208)")
        
        $(".hdrCol.red h1").animate({
            color: jQuery.Color("rgb(225, 17, 51)")
        }, "slow");

    });

    $("#mauve").on("click", function() {
        // console.log("clicked!");
        switchCurrent($(this));
        
        changeBgs($("#mauve"), "rgba(226, 135, 135, 0.851)", "rgba(115, 165, 209, 0.349)", "rgb(20, 80, 208)");
        
        $(".hdrCol.red h1").animate({
            color: jQuery.Color("rgb(225, 17, 51)")
        }, "slow");

    });

    $("#orig").on("click", function() {
        // console.log("clicked!");
        switchCurrent($(this));

        changeBgs($("#orig"), "transparent", "transparent", "transparent");

        $(".hdrCol.red h1").animate({
            color: jQuery.Color("rgb(221, 78, 102)")
        }, "slow");
        
    });
    
});

$("#replay").on("click", function() {
    // console.log("clicked replay");
    $("#hdrBack").animate({
        fontSize: "80vw",
        marginLeft: "-30vw"
    }, 1000, "swing").delay(1000).animate({
        fontSize: "42vw",
        marginLeft: "-20vw"}, 3800, "swing"
    );
    $("#hdrFront").animate({
        fontSize: "80vw",
        marginTop: "initial",
        marginLeft: "-30vw"
    }, 1000, "swing").delay(1000).animate({
        fontSize: "42vw",
        marginTop: "0",
        marginLeft: "-20vw"}, 3800, "swing"
    );
});


function switchCurrent(el) {
    $('[type="button"]').each(function () {
        if($(this).hasClass("current") == true && $(this) !== $(el)) {
            // console.log("to be removed, ", $(this));
            $(this).toggleClass("current");
            $(el).toggleClass("current");
            return false;
        }
         // find a way to propagate the return false into the function if this == el......
    });
}

function changeBgs(btn, red, pink, blue) {
    $(".bg").each(function () {
        ifDivBlue(btn, $(this), blue);
        ifBg($(this), "red", red);
        ifBg($(this), "pink", pink);
    });
}

function ifBg(item, cl, color) {
    if(item.hasClass(cl)) {
        // console.log("bg has class", cl);
        itemAnim(item, color);
        return false;
    };
}

function itemAnim(item, color) {
    item.animate({
        backgroundColor: jQuery.Color(color)
    }, "slow");
}

function ifDivBlue(btn, item, color) {
    // console.log("div blue f(x)", item, color);
    if(item.hasClass("blue")) { 
        // console.log("bg has class blue");
        if(btn.attr("id") == "blue") {
            // console.log("AND button clicked was #blue");
            $("#bg").fadeOut("slow");
            item.css({
                mixBlendMode: "hard-light"}); // then use hard light
        } else if(btn.attr("id") == "mauve") { // ..AND button clicked was #mauve
            // console.log("AND button clicked was #mauve")
            $("#bg").fadeIn("slow");
            item.css({
                mixBlendMode: "soft-light"}); // then use soft light
        };
        itemAnim(item, color);
        return false;
    };
};

function animButtons(elem, {css}) {
    elem.animate({css}, 1000, "swing");
    return elem;
}