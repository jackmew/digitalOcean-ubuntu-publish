$(function() {

    // var borderPath = document.querySelector('#z-border');
    // $("#borlder-length").text(borderPath.getTotalLength()); 

    // var circlePath = document.querySelector('#z-circle');
    // $("#circle-length").text(circlePath.getTotalLength());

    // var letterPath = document.querySelector('#z-letter');
    // $("#letter-length").text(letterPath.getTotalLength());


    // var z_border_element = document.getElementById("z-border");
    // z_border_element.setAttribute("class", "z-border-showing");

    // var z_letter_element = document.getElementById("z-letter");
    // z_letter_element.setAttribute("class", "z-letter-showing");

    $("#z-border").addClass("z-border-showing");
    $("#z-letter").addClass("z-letter-showing");


    function rotate() {
        z_border_element.setAttribute("class", "z-border-showing z-border-spin");
        z_letter_element.setAttribute("class", "z-letter-showing z-letter-pulse");

        // $("#z-border").removeClass("z-border-showing");
        // $("#z-border").addClass("z-border-spin");


        // $("#z-letter").removeClass("z-letter-showing");
        // $("#z-letter").addClass("z-letter-pulse");
    }

    setTimeout(function() {
    
        $("#circleDiv").removeClass("hideCircleDiv");
        $("#circleDiv").addClass("popShow");

        rotate();

        // pulse 
        // $('.jke-ecgChart').ecgChart({
        //     // height equal to footer height
        //     height: 65,
        //     width: 400
        // });
        // startPulse();
    }, 4000);

    var isZLetterVisible = true ;

    $('#z-letter').click(function() {
        alert("z-letter");
        if(isZLetterVisible) {
            $("#circleDiv").removeClass("popShow");
            $("#circleDiv").addClass("popHide");

            $("#z-circle").removeClass("z-circle-Anim");
            $("#z-circle").addClass("animPopHidden");
        } 
        else {
            $("#circleDiv").removeClass("popHide");
            $("#circleDiv").addClass("popShow");

            $("#z-circle").removeClass("popHide");
            $("#z-circle").addClass("z-circle-Anim");
        }
        isZLetterVisible = !isZLetterVisible ;
    });

});