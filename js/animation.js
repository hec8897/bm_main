$(window).on('scroll',function () {
    // $(document).ready(function(){
    var offsets = $(document).scrollTop();


    if (offsets >= 1100 & offsets <= 1500) {
        $(".circle_gradation").css({
            "animationName": 'rotategraph'
        })
        $(".graph_arrow").css({
            "animationName": 'rotategraph'
        })
        $('.counter').each(function () { //main-arrow-counter
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
        });
    }
    if (offsets >= 600 & offsets <= 620) {
        var i = 1;
        var func1 = setInterval(function () {
            if (i < 53) {
                color1(i);
                i++;
            } else if (i < 61) {
                color2(i);
                i++;
            } else if (i < 71) {
                color3(i);
                i++;
            } else if (i < 101) {
                color4(i);
                i++;
            } else {
                clearInterval(func1);
            }
        },10);
    }
})


//한번만실행시키기


function color1(i) {
    $(".pie-chart1").css({
        "background": "conic-gradient(#e0e0e0 0% " + i + "%, #f0f0f0 " + i + "% 100%)"
    });

}

function color2(i) {
    $(".pie-chart1").css({
        "background": "conic-gradient(#e0e0e0 0% 53%, #cacc1a 25% " + i + "%, #f0f0f0 " + i + "% 100%)"
    });

}

function color3(i) {
    $(".pie-chart1").css({
        "background": "conic-gradient(#e0e0e0 0% 53%, #cacc1a 0% 61%, #fe9a38 60% " + i + "%, #f0f0f0 " + i + "% 100%)"
    });
}

function color4(i) {
    $(".pie-chart1").css({
        "background": "conic-gradient(#e0e0e0 0% 53%, #cacc1a 0% 61%, #fe9a38 0% 71% , #ec6647 0% " + i + "%, #f0f0f0 " + i + "% 100%)"
    });
    if(i==100){
    $(".pie-chart1").attr('class','off_ani')

    }

}