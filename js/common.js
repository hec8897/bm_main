$(window).on('load',function(){
    $(".disable_li").mouseover(function(){
        var listNode = $(this).children()[0].className
        var listImgNode = $("header  ."+listNode).children()[0]
        var changeImg = "img/common/active-"+$(listImgNode).attr("src").substring(11);
        $(listImgNode).attr("src",changeImg)
        var linerNode = $(this).children()[1].className
        $('.'+linerNode).stop().animate({
            "width":"100%"
        },300)
    })
    $(".footer_li").mouseover(function(){
        var listNode = $(this).children()[0].className
        var listImgNode = $("footer ."+listNode).children()[0]
        var changeImg = "img/common/active-"+$(listImgNode).attr("src").substring(11);
        $(listImgNode).attr("src",changeImg)
        var linerNode = $(this).children()[1].className
        $('.'+linerNode).stop().animate({
            "width":"100%"
        },300)
    })
    $(".disable_li").mouseout(function(){
        var listNode = $(this).children()[0].className
        var listImgNode = $("."+listNode).children()[0]
        var changeImg = "img/common/"+$(listImgNode).attr("src").substring(18);
        $(listImgNode).attr("src",changeImg)
        var linerNode = $(this).children()[1].className
        $('.'+linerNode).stop().animate({
            "width":"0%"
        },300)
    })
    $(".footer_li").mouseout(function(){
        var listNode = $(this).children()[0].className
        var listImgNode = $("footer ."+listNode).children()[0]
        var changeImg = "img/common/"+$(listImgNode).attr("src").substring(18);
        $(listImgNode).attr("src",changeImg)
        var linerNode = $(this).children()[1].className
        $('.'+linerNode).stop().animate({
            "width":"0%"
        },300)
    })
})
$(document).ready(function(){
   
    $(".btn,.btns").mouseover(function(){
        var ArowImgNode = $(this).children()[0].className
        $("."+ArowImgNode).animate({
            "opacity":"1.0",
            "marginLeft":"10px"
        },50)
        $(this).css({
            "background":"#e04a28"
        })
    })
    $(".btn,.btns").mouseout(function(){
        var ArowImgNode = $(this).children()[0].className
        $(this).css({
            "background":"#ec6647"
        })
        $("."+ArowImgNode).animate({
            "opacity":"0.0",
            "marginLeft":"0px"
        },80)
    })

    var Media = window.matchMedia('( max-width: 1200px )');
    var floatPosition = parseInt($("#floatMenu").css('top'));
    // 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if(Media.matches == true){
            $("#floatMenu").css({
                "display":"none",
                "animationName":"hide"
            });

        }
        else{
           
            if (scrollTop >= 600) {
                $("#floatMenu").css({
                    "display":"block",
                    "animationName":"show"
                });
            }
            else {
                $("#floatMenu").css({
                    "animationName":"hide",
                });
            }
        }
        // 현재 스크롤 위치를 가져온다.
    
        var newPosition = scrollTop + floatPosition + "px";

        /* 애니메이션 없이 바로 따라감
         $("#floatMenu").css('top', newPosition);
         */

        $("#floatMenu").stop().animate({
            "top": newPosition
        }, 300);
    }).scroll();
})

var Media = window.matchMedia('( max-width: 1200px )');

$(window).resize(function(){

    if(Media.matches == true){
        $("#floatMenu").css({
            "display":"none",
            "animationName":"hide"
        });

    }
})
function activeList(){
    var listNode = $(".nav_li .active").children()[0].className
    var listImgNode = $("."+listNode).children()[0]
    var changeImg = "img/common/active-"+$(listImgNode).attr("src").substring(11);
    $(listImgNode).attr("src",changeImg)
}//active list img
var floatPosition = parseInt($("#floatMenu").css('top'));

$(window).scroll(function(){
    
    var offsets = $(document).scrollTop();
    if(offsets >= 200){
        $(".gnb_line").hide()
        $(".gnb_nav").css({
            "position":"fixed"
        })
    }
    else{
        $(".gnb_line").show();
        $(".gnb_nav").css({
            "position":"relative"
        })
    }
})

function checkBoxEvent() {
    // var checkbox = document.getElementById("check_label");
    var checkedbox = document.getElementById("agree_check");
    var checkLabel = document.getElementById("check_label");
    var checkBox = document.getElementById("check_box");


    if (checkedbox.checked == true) {
        checkLabel.style.color = '#ec6647'
        checkBox.style.backgroundColor = '#ec6647'
        checkBox.style.borderColor = '#ec6647';
    }
    else {
        checkLabel.style.color = '#222222'
        checkBox.style.borderColor = 'lightgray';
        checkBox.style.backgroundColor = 'white'
    }
}

function checkBoxEvents() {
    // var checkbox = document.getElementById("check_label");
    var checkedbox = document.getElementById("agree_checks");
    var checkLabel = document.getElementById("check_labels");
    var checkBox = document.getElementById("check_boxs");


    if (checkedbox.checked == true) {
        checkLabel.style.color = '#ec6647'
        checkBox.style.backgroundColor = '#ec6647'
        checkBox.style.borderColor = '#ec6647';
    }
    else {
        checkLabel.style.color = '#222222'
        checkBox.style.borderColor = 'lightgray';
        checkBox.style.backgroundColor = 'white'
    }
}

function checkBoxEvent5() {
    // var checkbox = document.getElementById("check_label");
    var checkedbox = document.getElementById("agree_check_page5");
    var checkLabel = document.getElementById("check_label_page5");
    var checkBox = document.getElementById("check_box_page5");


    if (checkedbox.checked == true) {
        checkLabel.style.color = '#ec6647'
        checkBox.style.backgroundColor = '#ec6647'
        checkBox.style.borderColor = '#ec6647';
    }
    else {
        checkLabel.style.color = '#222222'
        checkBox.style.borderColor = 'lightgray';
        checkBox.style.backgroundColor = 'white'
    }
}

function checkBoxEvent6() {
    // var checkbox = document.getElementById("check_label");
    var checkedbox = document.getElementById("agree_check_page6");
    var checkLabel = document.getElementById("check_label_page6");
    var checkBox = document.getElementById("check_box_page6");


    if (checkedbox.checked == true) {
        checkLabel.style.color = '#ec6647'
        checkBox.style.backgroundColor = '#ec6647'
        checkBox.style.borderColor = '#ec6647';
    }
    else {
        checkLabel.style.color = '#222222'
        checkBox.style.borderColor = 'lightgray';
        checkBox.style.backgroundColor = 'white'
    }
}

function moNavRender(thistag){
    
    var child = $(thistag).children();
    var Popup = $('#popup_box')

    $('html,body').animate({
        scrollTop: 0
      }, 500); // }

   
        
    Popup.hide()
    $(child[0]).css({
        "-webkit-transform": "rotate(45deg)",
        "-moz-transform": "rotate(45deg)",
        "transform": "rotate(45deg)",
        "top":"5.6px",
    })
    $(child[1]).css({
        "opacity":0.0
    })
    $(child[2]).css({
        "width":"20px",
        "-webkit-transform": "rotate(-45deg)",
        "-moz-transform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "bottom":"8.5px"
    })
    $(thistag).attr('onclick',"closeMoNav(this)")
    $("#mo_nav_box").fadeIn()

    $('#mo_nav_box').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    
    
    
}


function closeMoNav(thistag){
    var child = $(thistag).children();
    $(child[0]).css({
        "-webkit-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        "transform": "rotate(0deg)",
        "top":"0px",
    })
    $(child[1]).css({
        "opacity":1.0
    })
    $(child[2]).css({
        "width":"20px",
        "-webkit-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        "transform": "rotate(0deg)",
        "bottom":"0px"
    })
    $(thistag).attr('onclick',"moNavRender(this)")
    $("#mo_nav_box").fadeOut()
    $('html, body').css({
        'overflow-y': 'auto'
    });
    $('*').off('scroll touchmove mousewheel');



}