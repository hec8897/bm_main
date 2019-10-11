var page2Section1AniCount = 1;//don't delet
$(window).scroll(function () {
    
    var offsets = $(document).scrollTop();
    if (offsets >= 1100 & offsets <= 1500) {
        //main_page_rotate animation to banner
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
    if (offsets >= 1000 & offsets <= 1300) {
        page1Section2Ani()
        page2Section2Ani()
        page3Section2Ani()
        page4Section2Ani()
    }
    if (offsets >= 600 & offsets <= 800) {
        page1Section1Ani();
        page2Section1Ani();
        page3Section1Ani1();
        page4Section1Ani();
        
        page3Section1Ani2(1,60,80,1,2)
        page3Section1Ani2(2,65,85,3,4)
        page3Section1Ani2(3,67,90,5,6)
        page3Section1Ani2(4,70,100,7,8)
        page3Section1Ani2(5,73,110,9,10)
        page3Section1Ani2(6,80,120,11,12)

    }
   

})
function page2Section1Ani(){
    $('.hide_box2').css({
        "animationName":'rotateBox'
    })
    setTimeout(function(){
        $('.pie_half1').css({"opacity":'1.0'})
        $('.hide_box2').hide()
        $('.hide_box1').css({
            "animationName":'rotateBox'
        })
    },600)
    setTimeout(function(){
        $(".center").animate({
            "opacity":"1.0"
        },500)
    },1200)
}

function page4Section1Ani(){
    $('.hide_box2').css({
        "animationName":'rotateBox'
    })
    setTimeout(function(){
        $('.pie_half1').css({"opacity":'1.0'})
        $('.hide_box2').hide()
        $('.hide_box1').css({
            "animationName":'rotateBox'
        })
    },600)
    setTimeout(function(){
        $(".center_h3").animate({
            "opacity":"1.0"
        },500)
        $(".center_h4").delay(200).animate({
            "opacity":"1.0"
        },500)
        $("#page4_line").delay(200).animate({
            "width":"120px"
        },600)
        $(".line_text").delay(800).animate({
            "opacity":"1.0"
        },500)
    },1200)
}

function page1Section1Ani(){
    $('.page1_circle1').animate({'opacity':1.0})
    $('.page1_circle2').delay(200).animate({'opacity':1.0})
    $('.page1_circle3').delay(400).animate({'opacity':1.0})
    $('.page1_circle4').delay(600).animate({'opacity':1.0})

}

function page3Section1Ani1(){
    $('.stick_l1').animate({
        "height":"40px"
    },200)
    $('.count_people1').delay(200).animate({
        "opacity":"1.0"
    })
    $('.stick_l2').animate({
        "height":"50px"
    },400)
    $('.count_people2').delay(400).animate({
        "opacity":"1.0"
    })
    $('.stick_l3').animate({
        "height":"65px"
    },600)
    $('.count_people3').delay(600).animate({
        "opacity":"1.0"
    })
    $('.stick_l4').animate({
        "height":"80px"
    },600)
    $('.count_people4').delay(600).animate({
        "opacity":"1.0"
    })
    $('.stick_l5').animate({
        "height":"95px"
    },800)
    $('.count_people5').delay(800).animate({
        "opacity":"1.0"
    })
    $('.stick_l6').animate({
        "height":"110px"
    },800)
    $('.count_people6').delay(800).animate({
        "opacity":"1.0"
    })



}

var page3Section1Ani2 = function(a,b,c,d,e){
    $("#stick_left_"+a).animate({
        "height":b+"px"
    })
    $("#stick_right_"+a).delay(300).animate({
        "height":c+"px"
    })
    
    $("#stick_count_"+d).delay(600).animate({
        "opacity":"1.0"
    })
    $("#stick_count_"+e).delay(600).animate({
        "opacity":"1.0"
    })



  
}

var page1Section2Ani = function(){
    $('#stick1').animate({
        "left":"0%"
    },1000)
    $('#stick2').delay(100).animate({
        "left":"0%"
    },900)

}

function page2Section2Ani(){
    $('.graph_1').animate({
        "width":"1.6%"
    },1000)
    $('.graph_2').animate({
        "width":"1.8%"
    },1000)
    $('.graph_3').animate({
        "width":"4.5%"
    },1000)
    $('.graph_4').animate({
        "width":"5.7%"
    },1000)
    $('.graph_5').animate({
        "width":"5.8%"
    },1000)
    $('.graph_6').animate({
        "width":"12.2%"
    },1000)
    $('.graph_7').animate({
        "width":"67.5%"
    },1000)
    $('.point').animate({
        "opacity":"1.0"
    },1000)
}

function page3Section2Ani(){
    $('#page3-s2-ani1').animate({
        "opacity":1.0
    })
    $('#page3-s2-ani2').delay(200).animate({
        "opacity":1.0
    })
    $('#page3-s2-ani3').delay(400).animate({
        "opacity":1.0
    })
    $('#page3-s2-ani4').delay(600).animate({
        "opacity":1.0
    })
}
function page4Section2Ani(){
    $('#page4_s2_graph_1').animate({
        "bottom":"00px"
    },500)
    $('#page4_s2_graph_2').animate({
        "bottom":"00px"
    },500)
}

$(window).on('load',function(){
    $('#popup_box').delay(5000).css({
        "display":"none"
    })
    
    $('#popup_box').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
})