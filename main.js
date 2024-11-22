// continue (cont) btn fx
var openFctn = $("#contBtn").one("click", function() {
    // console.log("open f(x)");
    // make .buttons height variable
    $(".buttons").css({height: "max-content"});
    // show content via roll-down
    $("#content").animate({height: "20vh"}, "slow", function() {
        // removing the cont btn
        // first: fade out
        $("#contBtn").animate({
            opacity: "0"
        }, 500, function() {
            // second: roll-up
            $("#contBtn").animate({
                height: "0"
            }, 250, "swing", function() {
                // third: hide object
                $("#contBtn").toggle();
            });
        });
    });
});

// functions
$(document).ready(function() {
    console.log("document ready");
    
    // add fx to contBtn
    openFctn;

    // add fx to replay btn
    $("#replayBtn").on("click", function() {
        console.log("resetAnim", $("#contBtn"));
        // only change contBtn if it's hidden
        if($("#contBtn").css("display") === "none") {
            console.log("cont anim, openBtn display = none");
            // replacing contBtn
            // first: roll-down
            $("#contBtn").toggle().animate({
                height: "55px"
            }, 250, function() {
                // second: fade-in
                $("#contBtn").animate({
                    opacity: "1"
                }, 500, "swing", function() {
                    // third: roll-up content
                    $("#content").animate({height: "0vh"}, "slow");
                    $(".buttons").css({height: "calc((1.25rem + 35px) * 2 + 1.5rem)"});
                });
            });
            // place contBtn fx back
            openFctn;
            // console.log($("#contBtn"));
        } // else {
            //console.log("cont anim, openBtn display =/= none");
        //}
        ;
        
    });
    $('[type="button"]').each(function(i, el) {
        $(this).hide();
        // console.log("hide", $(this));
    });
    $("#hdrFront").delay(1000).animate({
        fontSize: "42vw",
        marginTop: "0",
        marginLeft: "-7rem"}, 3800, "swing"
        // scale(1) tX(0) tY(0)

        //result
        // scale(0.49) tX(-9.5rem) tY(-7rem)
    );

    // $("#hdrBack").animate({
    //     fontSize: "15.1rem",
    // });


    $("#replayBtn").delay(1500).fadeIn(500);

    $("#contBtn").delay(2250).fadeIn(2000, "swing");

    
    
    // $("#hdrBack").animate({
    //     fontSize: "15.3rem"}, 2800, "swing");
    // orig font size 30rem
    // result scale(0.51) tY(-7rem)
    
});