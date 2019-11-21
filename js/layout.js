String.prototype.replaceAll = function (org, dest) {
    //array fillter prototype
    return this.split(org).join(dest);
}
var returnJson = [{
    //returnJson Default
    no: "0",
}]
var layoutRender = {
    //Common Tag Render Object (Header,footer,floating Memu)
    params: '',
    //QueryString Default
    getQueryString: function () {
        //Get QueryString
        params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
            params[key] = value;
        });
        return params;
    },
    HeaderRender: function () {
        var uAgent = navigator.userAgent.toLowerCase();
        var mobilePhones = new Array('iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows ce', 'nokia', 'webos', 'opera mini', 'sonyericsson', 'opera mobi', 'iemobile');
        for (var i = 0; i < mobilePhones.length; i++) {
            if (uAgent.indexOf(mobilePhones[i]) != -1) {
            }
        }

        var PcMedia = window.matchMedia('( max-width: 1200px )');
        var TabletMedia = window.matchMedia('( max-width: 1024px ) and (min-width: 768px)');
        var MobileMedia = window.matchMedia('(max-width:767px)');
        //Header Rendering
        this.getQueryString();
        console.log(TabletMedia.matches)
        if(TabletMedia.matches == true){
            var mobileLink = 'mo_';
        }
        else if (MobileMedia.matches == true){
            var mobileLink = 'mo_';
        }
        else{
            var mobileLink = '';
        }
        // const mobileLink = params.device!=undefined ?'mo_':'';

        var acitveList = ['disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li'];
        if (params.listNo != undefined) {
            acitveList.splice(Number(params.listNo - 1), 1, "active")
        } else {
            var acitveList = ['disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li'];
        }
        document.querySelector("header").innerHTML = `<div class='gnb gnb_line'>
        <div class='wrap'>
            <h1><a href='${mobileLink}index.html'><img src="img/common/header-h1-BI.png" alt="BM_BI"></a></h1>
                <ul class='sns_bar'>
                    <li><a href='https://www.youtube.com/channel/UCsgs4ibSA_J4q5FC2IE5Gpw' target="_blank"><img src='img/common/header-sns-icon-youtube.png' alt="youtube_icon">유튜브</a></li>
                    <li><a href='https://www.facebook.com/bm9351' target="_blank"><img src='img/common/header-sns-icon-fb.png' alt="youtube_icon"alt="facebook_icon">페이스북</a></li>
                    <li><a href='https://www.instagram.com/bmconsulting9351' target="_blank"><img src='img/common/header-sns-icon-ins.png' alt="instar_icon">인스타그램</a></li>
                    <li><a href='https://blog.naver.com/bm9351' target="_blank"><img src='img/common/header-sns-icon-blog.png' alt="instar_blog">블로그</a></li>
                </ul>
            <div class='tel_bar'> 
                <img src="img/common/header-sns-icon-tel.png" alt="tel_icon">
                <span>02&middot;1670&middot;5208</span>
            </div>
        </div>
    </div>
    <div class='gnb gnb_nav'>
        <div class='wrap'>
            <nav>
                <ul class='nav_li'> 
                    <!-- className acitve/disalbe_li -->
                    <li class='${acitveList[0]}'><a href='${mobileLink}main.html?id=page1&listNo=1' class='nav_li1'><img src='img/common/header-nav-icon1.png'>어린이 보험</a><p class='liner1'></p></li>
                    <li class='${acitveList[1]}'><a href='${mobileLink}main.html?id=page2&listNo=2' class='nav_li2'><img src='img/common/header-nav-icon2.png'>암보험</a><p class='liner2'></p></li>
                    <li class='${acitveList[2]}'><a href='${mobileLink}main.html?id=page3&listNo=3' class='nav_li3'><img src='img/common/header-nav-icon3.png'>2대중대질병</a><p class='liner3'></p></li>
                    <li class='${acitveList[3]}'><a href='${mobileLink}main.html?id=page4&listNo=4' class='nav_li4'><img src='img/common/header-nav-icon4.png'>치매보험</a><p class='liner4'></p></li>
                    <li class='${acitveList[4]}'><a href='${mobileLink}main.html?id=page5&listNo=5' class='nav_li5'><img src='img/common/header-nav-icon5.png'>고객센터</a><p class='liner5'></p></li>
                    <li class='${acitveList[5]}'><a href='${mobileLink}main.html?id=page6&listNo=6' class='nav_li6'><img src='img/common/header-nav-icon6.png'>보험금청구</a><p class='liner6'></p></li>
                </ul>
            </nav>
        </div>
    </div>`
    },
    footerRender: function () {
        //footer Rendering
        this.getQueryString()
        var acitveList = ['disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li'];
        if (params.listNo != undefined) {
            acitveList.splice(Number(params.listNo), 1, "active")
        } else {
            var acitveList = ['disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li'];
        }
        document.querySelector("footer").innerHTML = `
        <div class='company_list'>
        <div class='wrap'>
            <ul>
                <li><img src="img/common/company_list_db.png" alt="DB 손해보험 회사로고"></li>
                <li><img src="img/common/company_list_mg.png" alt="mg 새마을 금고 회사로고"></li>
                <li><img src="img/common/company_list_hd.png" alt="현대 해상 회사로고"></li>
                <li><img src="img/common/company_list_hh.png" alt="한화 손해보험 회사로고"></li>
                <li><img src="img/common/company_list_hk.png" alt="흥국생명 회사로고"></li>
                <li><img src="img/common/company_list_rt.png" alt="롯데 손해보험 회사로고"></li>
                <li><img src="img/common/company_list_mr.png" alt="메리츠 회사로고"></li>
            </ul>
        </div>
    </div>
    <div class='footer_nav'>
        <div class='wrap'>
            <nav>
                <ul class='nav_li'>
                    <!-- className acitve/disalbe_li -->
                    <li class='footer_li'><a href='main.html?id=page1&listNo=1' class='nav_li1'><img
                                src='img/common/header-nav-icon1.png' attr='어린이 보험 아이콘'>어린이 보험</a>
                        <p class='f_liner1'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page2&listNo=2' class='nav_li2'><img
                                src='img/common/header-nav-icon2.png' attr='암 보험 아이콘'>암보험</a>
                        <p class='f_liner2'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page3&listNo=3' class='nav_li3'><img
                                src='img/common/header-nav-icon3.png' attr='2대중대질병 보험 아이콘'>2대중대질병</a>
                        <p class='f_liner3'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page4&listNo=4' class='nav_li4'><img
                                src='img/common/header-nav-icon4.png' attr='치매 보험 아이콘'>치매보험</a>
                        <p class='f_liner4'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page5&listNo=5' class='nav_li5'><img
                                src='img/common/header-nav-icon5.png' attr='고객센터 아이콘'>고객센터</a>
                        <p class='f_liner5'></p>
                    </li>
                 
                    <li class='footer_li'><a href='main.html?id=page6&listNo=6' class='nav_li6'><img
                                src='img/common/header-nav-icon6.png' attr='어린이 보험 아이콘'>보험금청구</a>
                        <p class='f_liner6'></p>
                    </li>
            
                </ul>
            </nav>
        </div>

    </div>
    <div class='company_info'>
        <div class="wrap">
            <h2><img src="img/common/header-h1-BI.png" alt=""></h2>
            <div class='info_box'>
                <ul class="footer_nav">
                    <li><a href=''>회사소개</a></li>
                    <li><a href=''>개인정보처리방침</a></li>
                    <li><a href=''>이용약관</a></li>
                    <li><a href=''>제휴안내</a></li>
                    <li><a href=''>고객센터</a></li>
                </ul>
                <p class="address">
                    보험친구들 | 대표:방진수 | 이메일:bm9351@naver.com | 사업자등록번호:612-24-18240</br>
                    전화 : 02-1670-5208 팩스 : 070-4369-1010 주소 : 서울시 구로구 디지털로 31길 38-21 이엔씨벤처드림타워3차 6층 606호</br>
                    Copyright © 비엠컴퍼니 All rights reserved.</p>
            </div>
        </div>
    </div>`
    },
    floatMenuRender: function () {
        //floating Menu Rendering
        var rendingPoing = document.getElementById('floatMenu');
        rendingPoing.innerHTML = `  <div class='icon'>
        <img src="img/common/widget_img.png" alt="위젯 아이콘">
        <p>02</p>
        <p>1670</p>
        <p>5208</p>
    </div>
    <ul class='widget_menu'>
        <li>
            <img src="img/common/widget-call.png" alt="웨젯 콜 이미지">
            <b>전화상담</b>
        </li>
        <li onclick='popupRender.insertTapRender("widget","subNode")'>
            <img src="img/common/widget-msg.png" alt="웨젯 콜 이미지">
            <b>상담예약</b>
        </li>
        <li>
            <img src="img/common/widget-kakao.png" alt="카카오톡 이미지">
            <b>카톡상담</b>
        </li>
    </ul>`
    }
}
var subLayoutRender = {
    //main.html(subpage) Render Object
    subSectionRender: function () {
        //sub_wrap give class 
        var mainPage = document.getElementById('sub_page_main');
        mainPage.className = 'main_page ' + params.id
    },
    subMainbannerRender: function () {
        //main banner_img,text
        var pageNo = params.listNo;
        var ThisBanner = document.getElementById('top_banner');
        ThisBanner.innerHTML = `<div class='wrap page${pageNo}'>
                                    <h2><img src="img/sub_page/page${pageNo}_banner_h1.png" alt=""></h2>
                                    <h3><img src="img/sub_page/page${pageNo}_banner_h2.png" alt=""></h3></div>`
    },
    section1Render: function () {
        //mains section1 Render no function(only animation)
        var pageNo = Number(params.listNo);
        var pageID = params.id;
        var Section1Data = [{
                h2: "태아보험",
                p1: "출산 시 발생할 수 있는 선천성 질환과",
                p2: "산모 건강까지 책임집니다.",
                SectionAnimaitionHtml: `<div class='ani_section page1-section1-ani'>
                                        <h2>신생아 질환 특약</h2>
                                        <ul>
                                            <li class='page1_circle1'><div class='circle_box'></div>
                                                <p>다양한 선천기형,</p>
                                                <p class='p_two'>변형 및 염색체 이상 보장</p>
                                            </li>
                                            <li class='page1_circle2'>
                                            <div class='circle_box'></div>
                                            <p>희귀난치성 질환 보장</p>
                                            </li>
                                            <li class='page1_circle3'>
                                            <div class='circle_box'></div>
                                            <p>인큐베이터 사용비 및</p>
                                            <p class='p_two'>입원비 보장내역 확인!</p>
                                            </li>
                                            <li class='page1_circle4'>
                                            <div class='circle_box'></div>
                                            <p>커서 겪을 수 있는 아토피,</p>
                                            <p class='p_two'>성조숙증, ADHD 특약도</p>
                                            <p class='p_three'>꼼꼼하게 확인!</p>
                                            </li>
                                        </ul>
                                        <p class='ani_line'></p>
                                        </div>`
            },
            {
                h2: "당신의 암보험은 든든합니까?",
                p1: "여러 개의 암 보험을 가입했지만 <span>보장내역과 지급조건을</span>",
                p2: "자세히 알고 있는 분은 많지 않습니다.",
                SectionAnimaitionHtml: `<div class='ani_section page2-section1-ani'>
                                       <h2><span>연간 약 21만여 명의 신규 암 환자</span>가 발생하고 있습니다.</h2>
                                       <div class="pie-chart1">
                                       <div class='pie_half1'>
                                       <div class='hide_box1'></div>
                                       </div>
                                       <div class='pie_half2'>
                                       <div class='hide_box2'></div>
                                       </div>
                                       <div class='center'></div>
                                       </div>
                                       <p>자료 : 통계청 2017 사망원인</p>
                                       </div>`
            },
            {

                h2: "높은 발병률과 사망률을 기록하고 있는 심&middot;뇌혈관질환",
                p: "암보험만큼 든든하게 준비하셔야 합니다",
                SectionAnimaitionHtml: `<div class='ani_section page3-section1-ani'>
                                            <div class='left_tab tabs'>
                                            <h3>연도별 심혈관질환 환자수 추이</h3>
                                            <p>성인의 심혈관질환 발병률은 꾸준하게 증가하고 있습니다.</p>
                                            <div class='graph_tab'>
                                            <div class='hide_bar'></div>
                                                <ul>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people1'>905,936명</p>
                                                    <div class='stick stick_l1'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people2'>935,990명</p>
                                                    <div class='stick stick_l2'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people3'>959,490명</p>
                                                    <div class='stick stick_l3'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people4'>1,004,056명</p>
                                                    <div class='stick stick_l4'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people5'>1,038,720명</p>
                                                    <div class='stick stick_l5'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people6'>1,089,861명</p>
                                                    <div class='stick stick_l6'></div>
                                                    </div>
                                                    </li>
                                                </ul>
                                                <ul class='count'>
                                                    <li>2013</li>
                                                    <li>2014</li>
                                                    <li>2015</li>
                                                    <li>2016</li>
                                                    <li>2017</li>
                                                    <li>2018</li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div class='right_tab tabs'>
                                            <h3>연도별 심혈관질환 성별 환자수 추이</h3>
                                            <p>남성 환자수가 매년 증가하고 있어 이에 대한 대비가 필요합니다.</p>
                                            <div class='graph_tab'>
                                            <p class='gender_tab'><b><span></span>남자</b> <b><span></span>여자</b>(단위: 1000명)</p>
                                            <div class='hide_bar'></div>
                                            <ul class='graph_tab'>
                                            <li>
                                                <div class='stick_wrap'>
                                                    <div class='left_stick' id='stick_left_1'>
                                                    <p id='stick_count_1'>406</p>
                                                    <div class='stick1_l'></div>
                                                    </div>
                                                    <div class='right_stick' id='stick_right_1'>
                                                    <p id='stick_count_2'>499</p>
                                                    <div class='stick1_r'></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                            <div class='stick_wrap'>
                                                <div class='left_stick' id='stick_left_2'>
                                                <p id='stick_count_3'>413</p>
                                                <div class='stick1_l'></div>
                                                </div>
                                                <div class='right_stick' id='stick_right_2'>
                                                <p id='stick_count_4'>522</p>
                                                <div class='stick1_r'></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                        <div class='stick_wrap'>
                                            <div class='left_stick' id='stick_left_3'>
                                            <p id='stick_count_5'>417</p>
                                            <div class='stick1_l'></div>
                                            </div>
                                            <div class='right_stick' id='stick_right_3'>
                                            <p id='stick_count_6'>541</p>
                                            <div class='stick1_r'></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                    <div class='stick_wrap'>
                                        <div class='left_stick' id='stick_left_4'>
                                        <p id='stick_count_7'>431</p>
                                        <div class='stick1_l'></div>
                                        </div>
                                        <div class='right_stick' id='stick_right_4'>
                                        <p id='stick_count_8'>572</p>
                                        <div class='stick1_r'></div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                <div class='stick_wrap'>
                                    <div class='left_stick' id='stick_left_5'>
                                    <p id='stick_count_9'>439</p>
                                    <div class='stick1_l'></div>
                                    </div>
                                    <div class='right_stick' id='stick_right_5'>
                                    <p id='stick_count_10'>599</p>
                                    <div class='stick1_r'></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div class='stick_wrap'>
                                <div class='left_stick' id='stick_left_6'>
                                <p id='stick_count_11'>453</p>
                                <div class='stick1_l'></div>
                                </div> 
                                <div class='right_stick' id='stick_right_6'>
                                <p id='stick_count_12'><b>636</b></p>
                                <div class='stick1_r'></div>
                                </div>
                            </div>
                        </li>
                        </ul>
                            <ul class='count r_count'>
                                <li>2013</li>
                                <li>2014</li>
                                <li>2015</li>
                                <li>2016</li>
                                <li>2017</li>
                                <li>2018</li>
                            </ul>
                        </div>
                        </div>
                    </div>`
            },
            {

                h2: "건강한 100세 시대를 위한 당신의 <span>치매보험을 점검해드립니다.</span>",
                p: "경도, 중도, 중증치매까지 단계별 보장, 간병비, 생활자금까지 빠짐없이 보장되는지 확인하세요.",
                SectionAnimaitionHtml: `<div class='ani_section page4-section1-ani'>
                                            <div class='left_tab  tabs'>
                                            <h3>연도별 치매 환자수 추이</h3>
                                            <p>꾸준하게 늘어나고 있는 치매환자, 미리 준비하지 않으면</br>함께 하는 가족도 고통받습니다.</p>
                                            <div class='graph_tab'>
                                            <div class='hide_bar'></div>
                                                <ul>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people1'>315,219명</p>
                                                    <div class='stick stick_l1'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people2'>348,652명</p>
                                                    <div class='stick stick_l2'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people3'>386,607명</p>
                                                    <div class='stick stick_l3'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people4'>424,239명</p>
                                                    <div class='stick stick_l4'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people5'>459,421명</p>
                                                    <div class='stick stick_l5'></div>
                                                    </div>
                                                    </li>
                                                    <li>
                                                    <div class='graph_wrap'>
                                                    <p class='count_people6'>511,931명</p>
                                                    <div class='stick stick_l6'></div>
                                                    </div>
                                                    </li>
                                                </ul>
                                                <ul class='count'>
                                                    <li>2013</li>
                                                    <li>2014</li>
                                                    <li>2015</li>
                                                    <li>2016</li>
                                                    <li>2017</li>
                                                    <li>2018</li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div class='right_tab  tabs'>
                                            <div class='tab_left'>
                                            <h3>치매환자 입원 외래별 요양급여비용총액 비율</h3>
                                            <p>요양급여비용이 외래비용보다 월등히 <span>높게 나타나 이에 대한 단계별 대비가 필요합니다</p>
                                            <p class='count_sticker'><b><span></span>입원</b><b><span></span>외래</b> (단위:%)</p>
                                            </div>
                                                <div class='tab_right'>
                                                <p class='line_text'>외래: 5.9%</p>

                                                <div class='line' id='page4_line'>
                                                </div>
                                                <div class="pie-chart1">
                                                <div class='pie_half1'>
                                                <div class='hide_box1'></div>
                                                </div>
                                                <div class='pie_half2'>
                                                <div class='hide_box2'></div>
                                                </div>
                                                <div class='center'>
                                                <h3 class='center_h3'>입원</h3>
                                                <h2 class='center_h4'>94.1%</h2>
                                                </div>
                                                </div>
                                                </div>
                                            </div>
                                       </div>`
            },

        ]
        var Section = document.getElementById('section1');
        if (pageNo <= 2) {
            Section.className = `section1 ${pageID}`
            Section.innerHTML = `<div class='wrap tab2_mode ${pageID}'>
            <div class="left_tab tabs" id='section_left'><h2>${Section1Data[pageNo-1].h2}</h2><p>${Section1Data[pageNo-1].p1}</p><p>${Section1Data[pageNo-1].p2}</p></div>
            <div class="right_tab tabs" id='section_right'>${Section1Data[pageNo-1].SectionAnimaitionHtml}</div>
        </div>`
        } else if (pageNo <= 4) {
            Section.innerHTML = `<div class='wrap tab3_mode'>
                <h2>${Section1Data[pageNo-1].h2}</h2>
                <p>${Section1Data[pageNo-1].p}</p>
                ${Section1Data[pageNo-1].SectionAnimaitionHtml}
            </div>`
        }
    },
    section2Render: function () {
        //mains section2 Render no function(only animation)
        var pageNo = params.listNo;
        var Section = document.getElementById('section2');
        var Section2Data = [{
                h2: '어린이보험',
                p: '내 아이 성장 과정에 따라</br>보장내역과 만기를 다르게 설정해야합니다.',
                SectionAnimaitionHtml: `<div class='animation_tab_page1'>
                                           <p>큰 병 아니더라도 입원할 일이 많은 영유아기</p> 
                                           <p>입원일당 특약은 최대로! <span>어른이 되면 불필요한 내역은 30세 만기로!</span></p>
                                           <div class='animation_area'>
                                           <div class='center_line'></div>

                                           <div class='stick_1 stick' id='stick1'></div>
                                           <div class='stick_2 stick' id='stick2'></div>
                                           <div class='text_area'>
                                           <span class='text-ani-1 text-box'>30세 만기</span>
                                           <span class='text-ani-2 text-box'>특약 최대</span>
                                           <span class='text-ani-3'>깁스 치료비 등 상해 보장 꼼꼼 확인</span></div>
                                           </div>
                                           </div>`
            },
            {
                h2: '가입한 암보험!</br><span>이제는 한 번쯤 점검해봐야 할 때입니다.</span>',
                p: '흩어진 암보험을 하나로 모아</br>보장은 든든하게 바로잡아 드립니다.',
                SectionAnimaitionHtml: `<div class='animation_tab_page2'>
                                           <div class='tit_box'>
                                           <h3>가족력, 성별, 치료비가 많이 들어가는 암에 따라</h3> 
                                           <h3>당신의 암보험 설계는 달라져야 합니다.</h3>
                                           </div> 
                                           <div class='graph_box'>
                                           <ul>
                                             <li>
                                             <div class='graph_1'></div><span class='point'>간병 1.6%</span>
                                             </li>
                                             <li>
                                             <div class='graph_2'></div><span class='point'>입원, 수술의 지연 1.8%</span>
                                             </li>
                                             <li>
                                             <div class='graph_3'></div><span class='point'>직업상실등 경제활동 저하 4.5%</span>
                                             </li>
                                             <li>
                                             <div class='graph_4'></div><span class='point'>임에 대한 정확한 지식부재 5.7%</span>
                                             </li>
                                             <li>
                                             <div class='graph_5'></div><span class='point point1'>의료기관에 대한 세부적인 정보부족 5.8%</span>
                                             </li>
                                             <li>
                                             <div class='graph_6'></div><span class='point point2'>죽음에 대한 두려움 12.2%</span>
                                             </li>
                                             <li>
                                             <div class='graph_7'></div><span class='point point3'>치료비 <b>67.5%</b></span>
                                             </li>
                                           </ul>
                                           </div>

                                           </div>`


            },
            {
                h2: '더 저렴한 보험으로 <span>미래를 대비하세요</span>',
                p1: '변화된 생활패턴으로 꾸준하게 증가하고 있는 <span>2대 질병에 대한 대비!</span>',
                p2: '같은 보장, 더 저렴한 보험으로 미래를 대비하세요',
                SectionAnimaitionHtml: ''
            },
            {
                h2: '치매는 오랜 시간동안 소요되는 <span>간병비와의 싸움!</span>',
                h3: '고령자, 유병자라면</br><span>치매보험은 더욱 필수입니다.</span>',
                p: '기존에 가입한 보험을 꼼꼼하게 <span>비교분석하고 부족한 보장을 채워줍니다.</span>'
            }


        ]
        if (pageNo == 3) {
            Section.innerHTML = `<div class='wrap page3'>
                                         <h2>${Section2Data[pageNo-1].h2}</h2>
                                         <p>${Section2Data[pageNo-1].p1}</p>
                                         <p>${Section2Data[pageNo-1].p2}</p>
                                         <div class='page3-animation-tab'>
                                             <div class='page3-circle page3-ani1' id='page3-s2-ani1'>
                                                 <div class='inner_circle'>
                                                     <p class='text_area'>뇌출혈</p>
                                                 </div>
                                             </div>
                                             <div class='page3-circle page3-ani2' id='page3-s2-ani2'>
                                                <div class='inner_circle'>
                                                <p class='text_area'>급성심근경색증</p>

                                                </div>

                                             </div>
                                             <div class='page3-circle page3-ani3' id='page3-s2-ani3'>
                                             <div class='inner_circle'>
                                             <p class='text_area'>뇌경색</p>

                                             </div>

                                             </div>
                                             <div class='page3-circle page3-ani4' id='page3-s2-ani4'>
                                             <div class='inner_circle'>
                                             <p class='text_area'>뇌졸증</p>

                                             </div>

                                             </div>
                                         </div>
                                     </div>`


        } else if (pageNo == 4) {

            Section.innerHTML = `<div class='wrap page4'>
                                             <div class='left_tab'>
                                                 <h4>${Section2Data[pageNo-1].h2}</h4>
                                                 <h3>${Section2Data[pageNo-1].h3}</h3>
                                                 <p>${Section2Data[pageNo-1].p}</p>
                                                </div>
                                            <div class='right_tab'>
                                                <div class='top_line'>
                                                    2018년
                                                </div>
                                                <div class='ani_section'>
                                                    <div class='page4_s2_graph page4_s2_graph_1'>
                                                        <div class='inner_box' id='page4_s2_graph_1'>
                                                            <h4>
                                                                치매 환자수
                                                                <span>꾸준한 증가!</span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div class='page4_s2_graph page4_s2_graph_2'>
                                                    <div class='inner_box'  id='page4_s2_graph_2'>
                                                            <h4>
                                                                요양급여비용
                                                                <span>2배 이상 증가!</span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <span class='bottom_text'>2013년</span>

                                                </div>
                                                <p>출처:국민관심질병통계</p>
                                            </div>
                                         </div>`

        } else {
            Section.innerHTML = `<div class='wrap'>
                                            <div class='left_tab'><h2>${Section2Data[pageNo-1].h2}</h2><p>${Section2Data[pageNo-1].p}</p></div>
                                            <div class='right_tab'>${Section2Data[pageNo-1].SectionAnimaitionHtml}</div>
                                        </div>`



        }


    },
    section3Render: function () {
        //mains section3 Render no function(no animation)

        var pageNo = params.listNo;
        var Section = document.getElementById('section3');

        var data = [{
                h2: '태아보험과 어린이보험은!',
                h31: '어릴때 가입할수록 도움 되는 <span>태아보험과 어린이보험</span>',
                h32: '비교도 안 해보고 가입 하실 건가요?',
                textbox: '우리 아이',
            },
            {
                h2: '암보험은!',
                h31: '지인권유로 인한 가입이나 대기업 보험이라',
                h32: '묻지도 따지지도 않고 가입하셨다면 <span>보험보장분석은 필수입니다.</span>',
                textbox: '당신',
            },
            {
                h2: '2대 중대 질병,성인병 보험',
                h31: '꾸준하게 증가하고 있는 2대질병',
                h32: '<span>뇌출혈, 급성심근경색증, 뇌경색, 뇌졸중까지</span>',
                textbox: '당신',
            },
            {
                h2: '치매보험은!',
                h31: '건강한 100세 시대!',
                h32: '<span>비교도 안 해보고 가입 하실 건가요?</span>',
                textbox: '당신',
            }
        ]
        Section.innerHTML = `<h2>${data[pageNo-1].h2}</h2>
                                    <div class='sub_tit'>
                                     <h3>${data[pageNo-1].h31}</span></h3>
                                     <h3>${data[pageNo-1].h32}</h3>
                                    </div>
                                     <div class='text_box'>
                                         <h4>국내 32개 보험사의 모든 보험상품을 꼼꼼하게 분석해</h4>
                                         <h4>${data[pageNo-1].textbox}에게 딱 맞는 보험을 찾아주는 <span>1:1 맞춤 보장분석서비스!</span></h4>
                                     </div>
                                     <img class='figure figure_left' src='img/sub_page/section3_left.png'>
                                     <img class='figure figure_right' src='img/sub_page/section3_right.png'>

                                     `

    },
    section4Render: function () {
        //mains section4 Render no function popupRender.ajax(ins_data.json) subPage, popupRender.moreData subLayoutRender.tabListActive
        var pageIndex = Number(params.listNo) - 1;
        var key = ["baby", "cancer", "disease", "dementia"];
        var Section = document.getElementById('section4');
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                returnJson = JSON.parse(this.responseText)
                result1 = returnJson.filter((x) => {
                    return x.catekey == key[pageIndex];
                })

                var resultArray = [];
                for (var i = 0; i < result1.length; i++) {
                    resultArray.push(` <div class='fn_box fn_box${i}' onclick='subLayoutRender.tabListActive(this|${result1[i].no})'>
                                        <img src="img/sub_page/section4_bedge.png" class='bedge' alt="bedge">
                                        <div class="fn_icon" style="background-image:url(${result1[i].logo})"></div>
                                        <p>${result1[i].product}<span>${result1[i].type}</span></p>
                                        <div class="more_btn" onclick='popupRender.moreData(${result1[i].no})'>자세히 보기</div>
                                    </div>`)

                }
                var resultArrayHtml = resultArray.toString();
                var replaceAll1 = resultArrayHtml.replaceAll(',', '');
                var replaceAll2 = replaceAll1.replaceAll('|', ',');
                var replaceAll3 = replaceAll2.replaceAll(null, ' ');

                Section.innerHTML = `
                            <div class="wrap">
                            <h2>스피드 보험비교</h2>
                            <p>보험친구들에서 추천하는 상품을 비교해보세요.<span>(최대 2개의 상품을 비교해보실 수 있습니다.)</span></p>
                            <div class="fn_boxs">                                
                                ${replaceAll3}
                            </div>
                            <div class="fn_btn" onclick='popupRender.subPage("sub-${pageIndex}")'>보험 비교하기</div>
                        </div>`
            }
        }
        xhttp.open('POST', 'data/ins_data.json', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=0")
    },
    insZoom:function(){
        if(params.mode == 'ins_zoom'){

            var result = returnJson.filter((x) => {
                return x.no == params.datakey;
            })
            var ThisCate = [];

            for(var i = 0; i<returnJson.length; i++){
                if(returnJson[i].catekey == result[0].catekey){
                    ThisCate.push(returnJson[i])
                }
            }
            var Section1 = document.getElementById('section1');
            var Section2 = document.getElementById('section2');
            var Section3 = document.getElementById('section3');
            var Section4 = document.getElementById('section4');
            var topInput = document.getElementById('top_inputs');
            var ThisBanner = document.getElementById('top_banner');


            ThisBanner.style.background='#dbe4e7'             
            ThisBanner.className='mode_ins_zoom'
            ThisBanner.innerHTML=`${params.datakey}
                                    <div class="wrap">
                                    <ul>
                                    <li><img src='${ThisCate[0].logo}'>
                                    <p>${ThisCate[0].product}</p></li>
                                    <li><img src='${ThisCate[1].logo}'>
                                    <p>${ThisCate[1].product}</p></li>
                                    <li><img src='${ThisCate[2].logo}'>
                                    <p>${ThisCate[2].product}</p></li>
                                    <li><img src='${ThisCate[3].logo}'>
                                    <p>${ThisCate[3].product}</p></li>
                                    <li><img src='${ThisCate[4].logo}'>
                                    <p>${ThisCate[4].product}</p></li>
                                    <li><img src='${ThisCate[5].logo}'>
                                    <p>${ThisCate[5].product}</p></li>
                                    </ul>
                                  </div>`   
            topInput.style.display ='none'
            Section1.innerHTML=`${params.mode,params.listNo}`
            Section2.style.display='none'
            Section3.style.display='none'
            Section4.style.display='none'
        }
       
    },
    arrayDish: [],//list Array
    tabListActive: function (thisdata, Dataindex) {
        //sub1-sub4 section4 select tab Fn
        if (popupRender.arrayDish.length < 2) {
            if (thisdata.id == '') {
                thisdata.id = 'active'
                popupRender.arrayDish.push(Dataindex)
            } else {
                thisdata.id = ''
                popupRender.arrayDish.splice(popupRender.arrayDish.indexOf(Dataindex), 1)
            }
        } else {
            if (thisdata.id == 'active') {
                thisdata.id = ''
                popupRender.arrayDish.splice(popupRender.arrayDish.indexOf(Dataindex), 1)
            } else if (thisdata.id == '') {
                alert("목록은 두개만 선택할 수 있습니다")
            }
        }
    },
    page5Layout: function () {
        //page5 Layout top
        layoutRender.getQueryString()
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2');
        var Section3 = document.getElementById('section3');
        var Section4 = document.getElementById('section4');
        var pageNo = params.listNo;
        var topInput = document.getElementById('top_inputs')

        if (pageNo == "5") {
            Section1.style.height = '100%'
            Section2.style.display = 'none'
            Section3.style.display = 'none'
            Section4.style.display = 'none'
            topInput.style.display = 'none'
        }
        Section1.innerHTML = `<div class='page5-nav'>
            <div class='navs' id='active' onclick='subLayoutRender.page5LayOutRender("consult",this)'>무료 상담 예약 신청</div>
            <div class='navs' onclick='subLayoutRender.page5LayOutRender("faq",this)'>자주하는 질문</div>
        </div>
        <div class='main_con' id='page5-main'></div>
        `
    },
    page5LayOutRender: function (division, thisTag, mode) {
        //page5LayoutRender tabs
        var NavsClass = document.querySelectorAll('.navs')
        var mainCon = document.getElementById('page5-main')
        NavsClass[0].id = "";
        NavsClass[1].id = "";
        if (mode == 'firstrednig') {
            NavsClass[0].id = "active";
        } else {
            thisTag.id = "active"
        }
        if (division == 'consult') {
            var MainHtml = `<h2>무료상담 예약신청</h2>
                            <div class='input_tb'>
                            <div class='row'>
                            <div class='row_tit'>이름</div>
                            <div class='row_desc'>
                            <input type='text' id='reqname_page5' placeholder='이름을 입력하세요'>
                            </div>
                            </div>
                            <div class='row'>
                            <div class='row_tit'>생년월일</div>
                            <div class='row_desc'>
                            <input type='text' id='reqbirth_page5'' placeholder='생년월일을 입력하세요(예:20190101)'>
                            </div>
                            </div>
                            <div class='row row-3'>
                            <div class='row_tit'>전화번호</div>
                            <div class='row_desc'>
                            <select id='reqphone-front'>
                            <option value='010'>010</option>
                            <option value='011'>011</option>
                            <option value='012'>012</option>
                            <option value='013'>013</option>
                            <option value='014'>014</option>
                            <option value='015'>015</option>
                            <option value='016'>016</option>
                            <option value='017'>017</option>
                            <option value='018'>018</option>
                            <option value='019'>019</option>
                            </select>
                            <input type='text' id='reqphone-end' placeholder='전화번호를 입력하세요'>
                            </div>
                            </div>
                            <div class='row row-4'>
                            <div class='row_tit'>문의내용(선택)</div>
                            <div class='row_desc'>
                            <textarea id='reqmemo'></textarea>
                            </div>
                            </div>
                            <div class='row row-5'>
                            <div class='row_tit'>개인정보 취급 방침 동의</div>
                            <div class='row_desc'>
                            <label class="container" id='check_label_page5' onclick="checkBoxEvent5()">개인정보 수집 및 이용 동의 합니다.
                            <input type="checkbox" id='agree_check_page5'>
                            <span class="checkmark" id='check_box_page5'></span>
                            </label>
                            <div class='agree_desc'>
                            <p>당사는 [개인정보보호법] 및 [신용정보의 이용 및 보호에 관한 법률]에 따라</p>
                            <p class='margin_point'>보험 상품소개 및 홍보등을 위하여 귀하의 개인(신용)정보를 다음과 같이 수집 및 이용하고자 함을 알려드립니다.
                            </p>
                            <p>1. 개인(신용)정보의 수입 및 이용 목적</p>
                            <p class='margin_point'>-보험보장분석, 보험리모델링, 보험상담, 상품소개, 가입권유를 위한 안내 및 서비스제공</p>
                            <p>2. 개인(신용)정보 수집 및 이용 대상</p>
                            <p class='margin_point'>- 이름, 생년월일, 성별, 연락처, 지역 외</p>
                            <p>
                            3.  개인(신용)정보의 보유 및 이용기간
                            </p>
                            <p class='margin_point'>
                            - 동의일로부터 3년
                            </p>
                            <p>
                            * 본 동의를 거부하시는 경우 보장분석서비스(보험리모델링) 및 보험상담 등의 서비스를 받으실 수 없습니다.
                            </p>
                            <p>
                            *동의하신 후에도 당사 홈페이지 고객센터(02-1670-5208)을 통해 철회하거나 상담 및 가입권유 목적의 연락에 </br>대한 중단을 요청하실 수 있습니다.
                            </p>

                            </div>
                            </div>
                            </div>
                            </div>
                            <div class='insert_btn' onclick='dataInsertFn("page5_consult")'>무료상담 신청하기</div>
                            `
            mainCon.innerHTML = `${MainHtml}`

        } else {

            var MobileMedia = window.matchMedia('(max-width:767px)');

            if(MobileMedia.matches == true){
                
                var NavFna = `<select class='select_nav_fna' onchange='subLayoutRender.mobileFnaNav(this.value)'>
                              <option class='fna_navs fna_nav1' value="all">전체</option>
                              <option class='fna_navs fna_nav2' value="baby">어린이보험</option>
                              <option class='fna_navs fna_nav3' value="cancer">암보험</option>
                              <option class='fna_navs fna_nav4' value="disease">2대중대질병</option>
                              <option class='fna_navs fna_nav5' value="dementia">치매보험</option>
                              </select>
                              `
                        }
            else{
                var NavFna = `
                <div class='fna_navs fna_nav1' onclick='subLayoutRender.FnaRender(this,"all",0,10), subLayoutRender.DataNumbering()' id='active'>전체</div>
                <div class='fna_navs fna_nav2' onclick='subLayoutRender.FnaRender(this,"baby")' >어린이보험</div>
                <div class='fna_navs fna_nav3' onclick='subLayoutRender.FnaRender(this,"cancer")' >암보험</div>
                <div class='fna_navs fna_nav4' onclick='subLayoutRender.FnaRender(this,"disease")' >2대중대질병</div>
                <div class='fna_navs fna_nav5' onclick='subLayoutRender.FnaRender(this,"dementia")' >치매보험</div>`
            }

            mainCon.innerHTML = `<h2>자주하는 질문</h2>
                     <div class='fna_nav'>
                     ${NavFna}
                    </div>
                    <div class='fna_box' id='fna_box'></div>
                    <ul class='numbering' id='numbering'></ul>`

            this.FnaRender(this, "all", 0, 10)
            var NumberRender = document.getElementById('numbering');
            setTimeout(() => {
                NumberRender.innerHTML = `${NumberResultOk}`
                NumberClass = document.querySelectorAll('.NumberingFn');
                NumberClass[0].id = 'active'
                console.log(NumberClass)
            }, 300);
            setTimeout(() => {
                for (var i = 0; i < NumberClass.length; i++) {
                    NumberClass[i].id = ''
                    NumberRender.innerHTML = `${NumberResultOk}`
                }
            }, 600);

        }
    },
    mobileFnaNav:function(thisValue){
        if(thisValue == 'all'){
            subLayoutRender.FnaRender(this,"all",0,10)
            subLayoutRender.DataNumbering()
        }
        else{
            subLayoutRender.FnaRender(this,thisValue,0,10)
        }
    },  
    FnaRender: function (thistag, datakey, no, limit) {
        //page5 FnA Data Render
        var FnaRendeing = document.getElementById('fna_box');
        var NumberClass = document.querySelectorAll('.NumberingFn');
        var NumberRender = document.getElementById('numbering');
        returnQa = [];
        returnAn = [];
        var fnaNavs = document.querySelectorAll('.fna_navs');

        function NavBeActive(startNumber) {
            for (var i = startNumber; i < fnaNavs.length; i++) {
                fnaNavs[i].id = ''
            }
            thistag.id = 'active'
        }

        for (var i = 0; i < NumberClass.length; i++) {
            NumberClass[i].id = ''
        }

        thistag.id = 'active'

        function ListPush(no, limit) {
            for (var i = no; i < limit; i++) {
                returnQa.push(`<li id='list_an${i}' onclick='subLayoutRender.thisListViewFn(${i})'>
                <p>
                <span id='q_icon${i}' class='q_icon'>Q</span>
                <b>${fnareturnJson[i].cate}</b><b class='qa_b'>${fnareturnJson[i].qa}</b>
                </p>
                <img src='img/sub_page/page5-down-arrow.png' id='arrow${i}' class='arrows' alt='리스트 오픈 화살표 이미지'></li>
                    <div id='hide_an${i}' class='hide_an hide_an${i}'><p><span>A</span><b>${fnareturnJson[i].an}</b></p></div>
                    `)
                returnAn.push(fnareturnJson[i].an)
            }
        }
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                fnareturnJson = JSON.parse(this.responseText)
                if (datakey == "all") {
                    NavBeActive(1)
                    ListPush(no, limit, "all")
                    fnaNavs[0].id = 'active'
                    fnaNavs[0].id = 'active'
                    var listNumbering = [];
                    var MaxNumber = Math.round(fnareturnJson.length / 10);
                    for (var i = 0; i < MaxNumber - 1; i++) {
                        listNumbering.push(`<li class='NumberingFn' id onclick='subLayoutRender.FnaRender(this|"all"|${i*10}|${(i+1)*10}|${i})'>${i+1}</li>`)
                    }
                    listNumbering.push(`<li class='NumberingFn' id 
                    onclick='subLayoutRender.FnaRender(this|"all"|${(MaxNumber-1)*10}|${fnareturnJson.length}|${i})'>${MaxNumber}</li>`)
                    var NumberResult = listNumbering.toString();
                    var NumberResult1 = NumberResult.replaceAll(",", "");
                    NumberResultOk = NumberResult1.replaceAll("|", ",");
                } else {
                    NavBeActive(0)
                    var Fnaresult = [];
                    Fnaresult = fnareturnJson.filter((x) => {
                        return x.catekey == datakey;
                    })
                    for (var i = 0; i < Fnaresult.length; i++) {
                        returnQa.push(`
                        <li id='list_an${i}' onclick='subLayoutRender.thisListViewFn(${i})'>
                        <p>
                            <span class='q_span' id='q_icon${i}' class='q_icon'>Q</span>
                            <b>${Fnaresult[i].cate}</b><b class='qa_b'>${Fnaresult[i].qa}</b>
                        </p>
                        <img src='img/sub_page/page5-down-arrow.png' class='arrows' id='arrow${i}' alt='리스트 오픈 화살표 이미지'>
                        </li>
                            <div id='hide_an${i}' class='hide_an'>
                            <p><span>A</span><b>${Fnaresult[i].an}</b></p>
                            </div>
                            `)
                        returnAn.push(Fnaresult[i].an)
                    }
                    console.log(returnQa)

                    NumberRender.innerHTML = ``
                }
                resultQa = returnQa.toString();
                replaceQa = resultQa.replaceAll(",", "");;
                replaceQas = replaceQa.replaceAll("|", ",");;

                FnaRendeing.innerHTML = `<ul>${replaceQas}</ul>`
            }
        }
        xhttp.open('POST', 'data/fna_data.json', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=" + JSON.stringify(popupRender.applyUserinfo))
    },
    DataNumbering: function () {
        //page5 FnA Data Numbering
        var NumberRender = document.getElementById('numbering');
        NumberRender.innerHTML = `${NumberResultOk}`
        var NumberClass = document.querySelectorAll('.NumberingFn');
        NumberClass[0].id = 'active'
    },
    thisListViewFn: function (key) {
        //page5 FnA Data hide,show
        var OpenList = `hide_an${key}`
        var Qicon = `q_icon${key}`
        var Arrows = `arrow${key}`

        var OpenTag = document.getElementById(OpenList);
        var Qspan = document.getElementById(Qicon);
        var DownArrow = document.getElementById(Arrows);


        $(".arrows").attr('src', 'img/sub_page/page5-down-arrow.png')
        $(DownArrow).attr('src', 'img/sub_page/page5-up-arrow.png')
        $(".q_icon").css({
            "background": "#999"
        })

        Qspan.style.background = '#ec6647'
        $(".hide_an").slideUp(250)
        $(OpenTag).slideToggle(250)
        // OpenTag.style.display = "block"

    },
    page6Layout: function () {
        //page6Layout Render
        layoutRender.getQueryString()
        var pageNo = params.listNo;
        var Section1 = document.getElementById('section1');
        var Section2 = document.getElementById('section2');
        var Section3 = document.getElementById('section3');
        var Section4 = document.getElementById('section4');
        var topInput = document.getElementById('top_inputs')

        if (pageNo == "6") {
            Section1.style.height = '100%'
            Section2.style.display = 'none'
            Section3.style.display = 'none'
            Section4.style.display = 'none'
            topInput.style.display = 'none'
        }

        Section1.innerHTML = `<div class='input_area'>
            <div class='wrap'>
                <h2>보험금 청구가 어려우신가요?</h2>
                <h4>보험금 대리신청 서비스를 신청하시면 정성껏 도와드리겠습니다.</h4>
                <div class='forms'>
                    <div class='input_box input1'>
                        <input type='text' id='reqname_page6' placeholder='성함을 입력해주세요'> 
                    </div>
                    <div class='input_box input2'>
                        <select id='reqsexflag_page6'>
                            <option>성별</option>
                            <option value='남성'>남성</option>
                            <option value='여성'>여성</option>
                        </select>
                    </div>
                    <div class='input_box input3'>
                        <input type='text' placeholder='연락처를 입력해주세요' id='reqphone_page6'> 
                    </div>
                    <div class='input_box input4'>
                        <select id='reqarea'>
                        <option>지역</option>
                        <option value="서울">서울특별시</option>
                        <option value="인천">인천광역시</option>
                        <option value="경기">경기도</option>
                        <option value="대전">대전광역시</option>
                        <option value="세종">세종특별자치시</option>
                        <option value="부산">부산광역시</option>
                        <option value="울산">울산광역시</option>
                        <option value="대구">대구광역시</option>
                        <option value="광주">광주광역시</option>
                        <option value="제주">제주특별자치도</option>
                        <option value="강원">강원도</option>
                        <option value="충남">충청남도</option>
                        <option value="충북">충청북도</option>
                        <option value="경북">경상북도</option>
                        <option value="경남">충상남도</option>
                        <option value="전남">전라남도</option>
                        <option value="전북">전라북도</option>
                        </select>
                    </div>
                </div>
                <label class="container" id='check_label_page6' onclick="checkBoxEvent6()">개인정보 수집 및 이용 동의 합니다.
                            <input type="checkbox" id='agree_check_page6'>
                            <span class="checkmark" id='check_box_page6'></span>
                        </label>
                        <div class='insert_btn' onclick='dataInsertFn("page6_consult")'>보험금 청구 대리 신청</div>

            </div>
        </div>
        <div class='page6-section1'>
            <h2>보험금 청구 진행과정</h2>
            <div class='icon_area'></div>
        </div>
        <div class='page6-section2'>
            <h2>보험 청구시 필요 서류</h2>
            <div class='page6-table page6-table1'>
                <div class='tb_head'>
                    <div class='colum1 colum'>구분</div>
                    <div class='colum2 colum'>입원시</div>
                    <div class='colum3 colum'>통원시</div>
                </div>
                <div class='tb_body'>
                <div class='colum1 colum'>
                    <p>의료 실비 청구</p>
                </div>
                    <div class='colum2 colum'>
                        <b>1.보험금청구서</b>
                        <b>2.진단서(50만원 이상/진단코드,입원기간)</b>
                        <b>3.입 퇴원 확인서(진단서內 입원기간 포함 시 생략)</b>
                        <b>4.진료비 영수증</b>
                        <b>5.진료비 세부내역서</b>
                        <b>6.신분증사본,통장사본</b>
                    </div>
                    <div class='colum3 colum'>
                        <span>공통서류</span>
                        <b>1. 보험금청구서 + 병원영수증(진료비영수증)</b>
                        <b>2. 진료비세부내역서(비급여 내역이 없는 경우 생략가능)</b>
                        <b>3. 신분증사본 + 통장사본 + 양제비영수증(처방조제 있을경우)</b>
                        <b class='margin_point'>4. [계약자,피보험자가 동일이고 자동이체 계좌가 본인일 경우에는</br>  &nbsp; &nbsp;신분증+통장사본 미첨부]</b>
                        <span>금액별 추가 첨부서류</span>
                        <b>1. 3만원초과:처방전[진단코드/통원인원 포함 필수]</b>
                        <b>2. 10만원초과 청구건 : 통원 확인서[진단코드/통원일자 포함필수]</b>
                    </div>
                </div>

            </div>
            <div class='page6-table page6-table2'>
            <div class='tb_head'>
                    <div class='colum1 colum'>구분</div>
                    <div class='colum2 colum'>사망보험금</div>
                    <div class='colum3 colum'>장해보험금</div>
                </div>
            <div class='tb_body'>
            <div class='colum1 colum'><p>사망금장해보험금 청구서류</p></div>
            <div class='colum2 colum'>
                <b>1.사망 진단서</b>
                <b>2.피보험자의 기본증명서, 등본, 가족관계증명서, 혼인관계증명서</b>
                <b>3.위임장 및 인감증명서(법적 상속인이 다수인 경우)</b>
            </div>
            <div class='colum3 colum'>
                <b>1.후유 장애 진단서(발급 시 보상담당자에게 문의</b>
                <b>2.정밀검사결과지(MRI,CT,X-RAY, 근전도검사 등)</b>
            </div>
            </div>
            </div>
            <div class='page6-table page6-table3'>
            <div class='tb_head'>
                    <div class='colum1 colum'>구분</div>
                    <div class='colum2 colum'>암진단/암수술시</div>
                    <div class='colum3 colum'>뇌질환/심장질환시</div>
                </div>
                <div class='tb_body'>
                <div class='colum1 colum'><p>암/뇌질환/심장질환 청구서류</p></div>
                <div class='colum2 colum'>
                <span class='tb3'>암진단보험금 청구시</span>
                <b class='margin_point'>암(상피내암)확정 진단서 / 조직검사 결과지</b>
                <span class='tb3'>암수술보험금 청구시</span>
                <b>암수술 기록지</b>
            </div>
            <div class='colum3 colum'>
            <span class='tb3'>뇌질환보험금 청구시</span>
                <b class='margin_point'>진단서 / 뇌 CT 또는 MRI 검사지</b>
                <span class='tb3'>심장질환보험금 청구시</span>
                <b>진단서 / 심장초음파 또는 심전도 검사 결과지</b>
            </div>
            </div>
            </div>
            <div class='page6-table page6-table4'>
            <div class='tb_head'>
                    <div class='colum1 colum'>구분</div>
                    <div class='colum2 colum'>수술/입원/통원시</div>
                </div>
                <div class='tb_body'>
                <div class='colum1 colum'><p>암/뇌질환/심장질환 청구서류</p></div>
                <div class='colum2 colum'>
                <b>1. 진단서 또는 진단명이 기재된 의료기관 발급서류(화상 진단의 경우 심재성 여부 필수기재)</b>
                <b>2. 수술확인서</b>
            </div>
         
            </div>
            </div>
            <div class='page6-table page6-table5'>
            <div class='tb_head'>
                    <div class='colum1 colum'>구분</div>
                    <div class='colum2 colum'>형사합의지원금/벌금/방어비용</div>
                    <div class='colum3 colum'>면허취소/면허정지</div>
                </div>
                <div class='tb_body'>
                <div class='colum1 colum'>
                    <p>운전자보험보상 청구서류</p>
                </div>
                    <div class='colum2 colum'>
                    <span class='tb3'>형사합의지원금 청구시</span>
                    <b>1.교통사고사실 확인원</b>
                    <b class='margin_point'>2.피해자 진단서 또는 사망진단서(사망시)</b>
                    <span class='tb3'>벌금청구시</span>
                    <b class='margin_point'>1.교통사고사실 확인원, 벌금납부영수증, 판결문(약식명령서)</b>
                    <span class='tb3'>방어비용 청구시</span>
                    <b>1.교통사고사실확인원</b>
                    <b>2.약식 증명서</b>
                    </div>
                    <div class='colum3 colum'>
                    <span class='tb3'>면허정지지원금 청구시</span>
                    <b>1.교통사고사실 확인원</b>
                    <b>2.면허정지 행정처분 확인원(교육수료 후)</b>
                    <b class='margin_point'>3.운전경력 증명서</b>
                    <span class='tb3'>면허취소지원금 청구시</span>
                    <b>1.교통사고사실 확인원</b>
                    <b>2.면허취소 행정처분 확인원</b>
                    <b class='margin_point'>3.운전경력 증명서</b>
                    </div>
                </div>
                </div>
        </div>
        <div class='page6-section3'>
            <h2>보험 청구 문서 다운로드</h2>
            <div class='link-acrobat'>
                <a href='https://get.adobe.com/kr/reader/' target="_blank">
                <div class='acrobat_btn'>
                <img src='img/sub_page/acrobet_icon.png'>
                    Acrobat Reader 설치하기
                </div>
                </a>
                PDF 파일을 보시려면 Adobe사의 Acrobat Reader가 필요합니다
                </div>
                <div class='bottom_tables'>
                    <div class='bottom_tb left_table'  id='bottom_left_tb'></div>
                    <div class='bottom_tb right_table' id='bottom_right_tb'></div>
        </div>
        `
        this.page6DataRending();
    },
    page6DataRending:function(){
        //page6 Insu Data Render
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                billreturnJson = JSON.parse(this.responseText)
                billreturnJsonArrayLeft = []
                billreturnJsonArrayRight = []
                    billreturnJsonArrayLeft.push(`<div class='tb_head'>
                                                        <div class='colum colum1'>생명보험사</div>
                                                        <div class='colum colum2'>대표번호</div>
                                                        <div class='colum colum3'>청구서</div>
                                                        <div class='colum colum4'>홈페이지</div>
                                                    </div>`)
                    billreturnJsonArrayRight.push(`<div class='tb_head'>
                        <div class='colum colum1'>손해험사</div>
                        <div class='colum colum2'>대표번호</div>
                        <div class='colum colum3'>청구서</div>
                        <div class='colum colum4'>홈페이지</div>
                    </div>`)
                    Cate1result = billreturnJson.filter((x) => {
                        return x.catekey == "cate1";
                    })
                    Cate2result = billreturnJson.filter((x) => {
                        return x.catekey == "cate2";
                    })
                    for(var i = 0; i<Cate1result.length; i++){
                        billreturnJsonArrayLeft.push(
                            `<div class='tb_body'>
                            <div class='colum colum1'>${Cate1result[i].insname}</div>
                                <div class='colum colum2'>${Cate1result[i].number}</div>
                                <div class='colum colum3'><a href='http://bmcompany.kr/${Cate1result[i].billfile}' target='__blank'><img src='img/sub_page/pdf.png'></a></div>
                                <div class='colum colum4'><a href='http://${Cate1result[i].hompage}'>${Cate1result[i].hompage}</a></div>
                            </div>`
                        )
                    }
                    for(var i = 0; i<Cate2result.length; i++){
                        billreturnJsonArrayRight.push(
                            `<div class='tb_body'>
                            <div class='colum colum1'>${Cate2result[i].insname}</div>
                                <div class='colum colum2'>${Cate2result[i].number}</div>
                                <div class='colum colum3'><a href='http://bmcompany.kr/${Cate2result[i].billfile}' target='__blank'><img src='img/sub_page/pdf.png'></a></div>
                                <div class='colum colum4'><a href='http://${Cate2result[i].hompage}'>${Cate2result[i].hompage}</a></div>
                            </div>`
                        )
                    }
                    var LeftHtml = document.getElementById('bottom_left_tb')
                    var RightHtml = document.getElementById('bottom_right_tb')

                    var resultLeft = billreturnJsonArrayLeft.toString();
                    var resultLeftArray =  resultLeft.replaceAll(',',"")
                    LeftHtml.innerHTML = `${resultLeftArray}`

                    var resultRight = billreturnJsonArrayRight.toString();
                    var resultRightArray =  resultRight.replaceAll(',',"")
                    RightHtml.innerHTML = `${resultRightArray}`
                
            }
        }
        xhttp.open('POST', 'data/bill_data.json', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=" + JSON.stringify(popupRender.applyUserinfo))

    }
}

var result1, result2;
var popupRender = {
    moreData: function (datakey) {
        event.stopPropagation();//event bubbling
        location.href=`main.html?id=${params.id}&listNo=${params.listNo}&mode=ins_zoom&datakey=${datakey}`
    },

    // moreData: function (datakey) {
    //     //subPage moreData popup
    //     var popup = document.getElementById('popup_box');
    //     popup.style.display = 'block';
    //     popup.style.backgroundColor = 'rgba(0,0,0,0.6)';
    //     result1 = returnJson.filter((x) => {
    //         return x.no == Number(datakey);
    //     })
    //     this.arrayDish.push(result1[0])


    //     function objectValues2(obj, ArrayName) {
    //         var vals;
    //         for (var key in obj) {
    //             if (obj.hasOwnProperty(key) && obj.propertyIsEnumerable(key)) {
    //                 vals = obj[key];
    //             }
    //         }
    //         ArrayName.push(vals)
    //         return vals;
    //     };
    //     priceHtml1 = []
    //     if (result1[0].ageprice.length == 1) {

    //         var objectKeyArrays = []
    //         setTimeout(() => {
    //             var infoBox = document.getElementById('info_ul')
    //             infoBox.style.height = '320px'
    //         }, 700);
    //         objectValues2(result1[0].ageprice[0], objectKeyArrays);
    //         priceHtml1.push(`<div class='null_data'>
    //             <span>출생 전 </span>${objectKeyArrays[0]}원 
    //             </div>`)
    //     } else if (result1[0].ageprice == 'mnf') {
    //         setTimeout(() => {
    //             var priceRow = document.getElementById('price_row')
    //             var infoBox = document.getElementById('info_ul')
    //             priceRow.style.height = '120px'
    //             infoBox.style.height = '400px'

    //         }, 700);
    //         var objectKeyArrayMan = [];
    //         var objectKeyArrayWoMan = [];

    //         for (var i = 0; i < result1[0].agepricem.length; i++) {
    //             objectValues2(result1[0].agepricem[i], objectKeyArrayMan);
    //         }
    //         for (var i = 0; i < result1[0].agepricef.length; i++) {
    //             objectValues2(result1[0].agepricef[i], objectKeyArrayWoMan);
    //         }
    //         priceHtml1.push(
    //             `<div class='price_bord'>
    //             <div class='tb_head row'>
    //                     <div class='colum colum-4  colum_head'>-</div>
    //                     <div class='colum colum-4 colum_body'>${Object.keys(result1[0].agepricem[0])}세</div>
    //                     <div class='colum colum-4 colum_body'>${Object.keys(result1[0].agepricem[1])}세</div>
    //                     <div class='colum colum-4 colum_body'>${Object.keys(result1[0].agepricem[2])}세</div>

    //                 </div>
    //                 <div class='tb_body1 row'>
    //                     <div class='colum colum-4 colum_body'><span class='gender_mark man_mark'>남</span></div>
    //                     <div class='colum colum-4 colum_body'>${objectKeyArrayMan[0]}원</div>
    //                     <div class='colum colum-4 colum_body'>${objectKeyArrayMan[1]}원</div>
    //                     <div class='colum colum-4 colum_body'>${objectKeyArrayMan[2]}원</div>
    //                 </div>
    //                 <div class='tb_body2 row'>
    //                 <div class='colum colum-4 colum_body'><span class='gender_mark woman_mark'>여</span></div>
    //                 <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[0]}원</div>
    //                 <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[1]}원</div>
    //                 <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[2]}원</div>
    //             </div>
    //             </div>`
    //         )

    //     } else if (result1[0].ageprice != 0) {
    //         var objectKeyArray = [];
    //         setTimeout(() => {
    //             var priceRow = document.getElementById('price_row')
    //             var infoBox = document.getElementById('info_ul')
    //             priceRow.style.height = '120px'
    //             infoBox.style.height = '400px'

    //         }, 700);

    //         for (var i = 0; i < result1[0].ageprice.length; i++) {
    //             objectValues2(result1[0].ageprice[i], objectKeyArray);
    //         }
    //         priceHtml1.push(`          <div class='price_bord'>
    //                                         <div class='tb_head row'>
    //                                                 <div class='colum colum-4  colum_head'>-</div>
    //                                                 <div class='colum colum-4 colum_body'>${Object.keys(result1[0].ageprice[0])}세</div>
    //                                                 <div class='colum colum-4 colum_body'>${Object.keys(result1[0].ageprice[1])}세</div>
    //                                                 <div class='colum colum-4 colum_body'>${Object.keys(result1[0].ageprice[2])}세</div>

    //                                             </div>
    //                                             <div class='tb_body1 row'>
    //                                                 <div class='colum colum-4 colum_body'><span class='gender_mark man_mark'>남</span></div>
    //                                                 <div class='colum colum-4 colum_body'>${objectKeyArray[0]}원</div>
    //                                                 <div class='colum colum-4 colum_body'>${objectKeyArray[1]}원</div>
    //                                                 <div class='colum colum-4 colum_body'>${objectKeyArray[2]}원</div>
    //                                             </div>
    //                                             <div class='tb_body2 row'>
    //                                             <div class='colum colum-4 colum_body'><span class='gender_mark woman_mark'>여</span></div>
    //                                             <div class='colum colum-4 colum_body'>${objectKeyArray[0]}원</div>
    //                                             <div class='colum colum-4 colum_body'>${objectKeyArray[1]}원</div>
    //                                             <div class='colum colum-4 colum_body'>${objectKeyArray[2]}원</div>
    //                                         </div>
    //                                         </div>`)
    //     }
    //     setTimeout(() => {
    //         popup.innerHTML = `<div class='speed_compare_popup'>
    //         <span class='xbox' onclick='popupRender.closepopup("popup")'></span>
    //         <div class='ins_tabs more_ins' id='ins_tab'>
    //             <div class='cal_top_tab'>
    //                 <div class='user_info'>
    //                     <img class='more_logo' src='${result1[0].logo}' alt='선택보험사 로고'>
    //                     <span class='more_cate'>${result1[0].cate}</span>
    //                 </div>
    //                 <div class='place_info place_more'>
    //                             <p>${result1[0].product}</p>
    //                     <p><span>※ 상품 개정으로 인하여 보장내용 및 보험료가 달라질 수 있습니다.</span></p>

    //                 </div>
    //             </div>
    //             <div class='cal_bottom_tab'>
        
    //                 <div class='bottom_right section_rigth'>
    //                     <div class='ins_info_tab'>
    //                         <h3>상품 특징 및 가입조건</h3>
    //                         <ul class='ins_info_tb' id='info_ul'>
    //                             <li>
    //                                 <div class='list_head'>상품종류</div>
    //                                 <div class='list_desc'>${result1[0].cate} / ${result1[0].productcate} </div>
    //                             </li>
    //                             <li>
    //                                 <div class='list_head'>상품명</div>
    //                                 <div class='list_desc'>${result1[0].product}</div>
    //                             </li>
    //                             <li>
    //                                 <div class='list_head'>특징</div>
    //                                 <div class='list_desc'>${result1[0].Characteristic1}</div>
    //                             </li>
    //                             <li>
    //                                 <div class='list_head'>갱신/비갱신</div>
    //                                 <div class='list_desc'>${result1[0].extension}</div>
    //                             </li>
    //                             <li>
    //                                 <div class='list_head'>보험기간</div>
    //                                 <div class='list_desc'>${result1[0].term}</div>
    //                             </li>
    //                             <li class='price_row' id='price_row'>
    //                                 <div class='list_head'>월 보험료</div>
    //                                 <div class='list_desc'>${priceHtml1}</div>
    //                             </li>
    //                             <li>
    //                                 <div class='list_head'>납입기간</div>
    //                                 <div class='list_desc'>${result1[0].payterm}년</div>
    //                             </li>
    //                             <li>
    //                                 <div class='list_head'>가입유형</div>
    //                                 <div class='list_desc'>${result1[0].type} </div>
    //                             </li>        
    //                         </ul>
                            
    //                     </div>
    //                     <p class='cal_mention'>선택하신 보험상품에 대한 자세한 설명이 필요하거나 다른 상품 비교견적을 받고 싶으신 분들은[상담신청]을 남겨 주시면</p>
    //                     <p class='cal_mention'>최대한 빠른 시간 내에 전문상담사가 연락드리도록 하겠습니다.</p>
    //                 </div>
    //                 <div class='input_tab'>
    //                     <h3>간편 상담 신청하기</h3>
    //                     <ul>
    //                         <li>
    //                             <p>이름</p>
    //                             <input type='text' id='apply_reqname'>
    //                         </li>
    //                         <li>
    //                             <p>성별</p>
    //                             <select id='apply_sexflag'>
    //                                 <option>성별을선택해주세요</option>
    //                                 <option value='남성'>남성</option>
    //                                 <option value='여성'>여성</option>
    //                             </select>
    //                         </li>
    //                         <li>
    //                             <p>생년월일</p>
    //                             <input type='text' id='apply_reqbirth'>
    //                         </li>
    //                         <li class='phones'>
    //                             <p>연락처</p>
    //                             <select id='reqphone-front'>
    //                                 <option value='010'>010</option>
    //                                 <option value='011'>011</option>
    //                                 <option value='012'>012</option>
    //                                 <option value='013'>013</option>
    //                                 <option value='014'>014</option>
    //                                 <option value='015'>015</option>
    //                                 <option value='016'>016</option>
    //                                 <option value='017'>017</option>
    //                                 <option value='018'>018</option>
    //                                 <option value='019'>019</option>
    //                         </select>
    //                             <input type='text' id='reqphone-end'>
    //                         </li>
    //                     </ul>
    //                     <p>
    //                     <label class="container" id='check_label' onclick="checkBoxEvent()">개인정보 수집 및 이용 동의 합니다.
    //                         <input type="checkbox" id='agree_check'>
    //                         <span class="checkmark" id='check_box'></span>
    //                     </label>
    //                 </p>
    //                 <div class='more_submit_btn' onclick='popupRender.applyFn("more_data")'>
    //                     간편 상담 신청
    //                 </div>

    //                 </div>
        
    //             </div>
    //         </div>
    //         <div class='submit_btns' id='submit_btns' onclick="popupRender.insertTapRender('more_btn','more_data')">무료 상담 신청</div>
    //     </div>
    //     `
    //         var fnsubBox = document.querySelectorAll('.fn_box');
    //         for (var i = 0; i < fnsubBox.length; i++) {
    //             fnsubBox[i].id = '';
    //         }
    //     }, 500);



    // },
    arrayDish: [],
    applyUserinfo: [],
    closepopup: function (target) {
        if (target == 'popup') {
            var popup = document.getElementById('popup_box')
            popup.innerHTML = `<div class='loader'></div>`
            $('html, body').css({
                'overflow-y': 'auto'
            });
            popup.style.display = 'none'
            this.arrayDish = [];
            this.applyUserinfo = [];
            result = [];
            result1 = [];
            result2 = [];
        } else if (target == 'insert') {
            var insertpopup = document.getElementById('insert_box')
            insertpopup.style.display = 'none'
            this.arrayDish = [];
            this.applyUserinfo = [];
            result = [];
            result1 = [];
            result2 = [];
        } else if (target == 'noDel') {
            var insertpopup = document.getElementById('insert_box')
            insertpopup.style.display = 'none'
        }

        //all popup inset data Null 
        //팝업이 닫힐 때 모든 입력된 데이터를 Null 시킨다.

    },
    returnFn: function (mode) {
        this.arrayDish = [];
        var popup = document.getElementById('popup_box');
        popup.innerHTML = `<div class='loader'></div>`
        setTimeout(() => {
            if (mode == 'speed') {
                this.speedpopup();
            } else if (mode == 'cals') {
                this.calculateFn();
            }
        }, 500);

    },
    subPage: function (Nodes) {
        var popup = document.getElementById('popup_box');

        var fnsubBox = document.querySelectorAll('.fn_box');
        if (this.arrayDish.length == 2) {
            this.popupHead('cal')
            popup.style.display = 'block'
            popup.style.backgroundColor = 'rgba(0,0,0,0.6)'
            setTimeout(() => {
                popup.innerHTML = `<div class='speed_compare_popup'>
                    <span class='xbox' onclick='popupRender.closepopup("popup")'></span>
                    ${_popuphead}
                    <div class='ins_tabs' id='ins_tab'></div></div>`
                this.compareTabRnder("sub", Nodes)
            }, 500);
            $('html, body').css({
                'overflow-y': 'hidden'
            });
            // fnsubBox.id = '';

            for (var i = 0; i < fnsubBox.length; i++) {
                fnsubBox[i].id = '';
            }
        } else {
            alert('목록을 두개 선택해주세요');
        }

    },
    popupHead: function (b) {
        const popuptit = b == 'cal' ? '스피드보험비교' : '보험 셀프 계산기';
        // const fnKey = b == 'speed' ? 'cal' : 'speed';
        _popuphead = `<h2>${popuptit}</h2>
        <div class='popup_nav'>
            <div class='popup_list popup_list1 active' onclick='popupRender.tabData(0,"${b}"), popupRender.tabListActive(0,this,"nav")'><img src='img/common/header-nav-icon1.png'>어린이보험</div>
            <div class='popup_list popup_list2' onclick='popupRender.tabData(1,"${b}"), popupRender.tabListActive(1,this,"nav")'><img src='img/common/header-nav-icon2.png'>암보험</div>
            <div class='popup_list popup_list3' onclick='popupRender.tabData(2,"${b}"), popupRender.tabListActive(2,this,"nav")'><img src='img/common/header-nav-icon3.png'>2대중대질병</div>
            <div class='popup_list popup_list4' onclick='popupRender.tabData(3,"${b}"), popupRender.tabListActive(3,this,"nav")'><img src='img/common/header-nav-icon4.png'>치매보험</div>
        </div>`
    },
    speedpopup: function (a) {
        var popup = document.getElementById('popup_box');
        this.popupHead('cal')
        popup.style.display = 'block'
        popup.style.backgroundColor = 'rgba(0,0,0,0.6)'
        setTimeout(() => {
            popup.innerHTML = `<div class='speed_compare_popup'>
                <span class='xbox' onclick='popupRender.closepopup("popup")'></span>
                ${_popuphead}
                <div class='ins_tabs' id='ins_tab'></div></div>`
        }, 500);
        setTimeout(() => {
            this.tabData(0, 'cal')
        }, 700);
        $('html, body').css({
            // 'overflow-y': 'hidden'
        });
    },
    calculateFn: function (a) {
        var popup = document.getElementById('popup_box');
        this.popupHead('speed');
        popup.style.display = 'block'
        popup.style.backgroundColor = 'rgba(0,0,0,0.6)'
        setTimeout(() => {
            popup.innerHTML = `<div class='speed_compare_popup'>
                                    <span class='xbox' onclick='popupRender.closepopup("popup")'></span>
                                            ${_popuphead}
                                    <div class='ins_tabs' id='ins_tab'></div>
                                </div>`
        }, 500);
        setTimeout(() => {
            this.tabData(0, 'speed')

        }, 600)

        $('html, body').css({
            'overflow-y': 'hidden'
        });
    },
    tabListActive: function (index, thisdata, mode1, Dataindex, mode2) {
        this.applyUserinfo = [];
        if (mode2 == 'cal') {
            if (this.arrayDish.length < 1) {
                if (thisdata.id == '') {
                    thisdata.id = 'active'
                    this.arrayDish.push(Dataindex)
                } else {
                    thisdata.id = ''
                    this.arrayDish.splice(this.arrayDish.indexOf(Dataindex), 1)
                }
            } else {
                if (thisdata.id == 'active') {
                    thisdata.id = ''
                    this.arrayDish.splice(this.arrayDish.indexOf(Dataindex), 1)
                } else if (thisdata.id == '') {
                    alert("목록은 한개만 선택할 수 있습니다")
                }
            }

        } else {

            if (mode1 == 'nav') {
                var popupList = document.querySelectorAll('.popup_list');
                for (i = 0; i < popupList.length; i++) {
                    popupList[i].className = `popup_list popup_list${i+1}`
                }
                thisdata.className = `popup_list popup_list${index+1} active`
                this.arrayDish = [];
            } else if (mode1 == 'tab') {
                if (this.arrayDish.length < 2) {
                    if (thisdata.id == '') {
                        thisdata.id = 'active'
                        this.arrayDish.push(Dataindex)
                    } else {
                        thisdata.id = ''
                        this.arrayDish.splice(this.arrayDish.indexOf(Dataindex), 1)
                    }
                } else {
                    if (thisdata.id == 'active') {
                        thisdata.id = ''
                        this.arrayDish.splice(this.arrayDish.indexOf(Dataindex), 1)
                    } else if (thisdata.id == '') {
                        alert("목록은 두개만 선택할 수 있습니다")
                    }
                }
            }
        }


    },
    tabData: function (a, b) {
        const popupCaption = b == 'speed' ? '' : '최대 2개까지 보험비교를 하실 수 있습니다';
        const mode2 = b == 'speed' ? 'cal' : 'speed'
        var pageIndex = a;
        var key = ["baby", "cancer", "disease", "dementia"];
        var insTab = document.getElementById('ins_tab')
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                returnJson = JSON.parse(this.responseText)
                resultArray = [];
                result = returnJson.filter((x) => {
                    return x.catekey == key[pageIndex];
                })
                for (var i = 0; i < result.length; i++) {
                    resultArray.push(
                        `<div class='ins_tab ins_tab${i+1}' onclick='popupRender.tabListActive(${i+1}|this|"tab"|${result[i].no}|"${mode2}")'>
                            <img src="img/sub_page/section4_bedge.png" class='bedge' alt="bedge">
                            <div class='icon_area' style="background-image:url(${result[i].logo})"></div>
                            <p>${result[i].product}</p>
                        </div>`
                    )
                }
                if (b == 'speed') {
                    resultArray.push(`<div class='forms'>
                    <div class='input_box name_box'>
                    <input type='text' id='apply_reqname' placeholder='이름' autocomplete="off">
                    </div>
                    <div class='input_box info_box'>
                    <select id='apply_sexflag'>
                    <option value=''>성별</option>
                    <option value='여성'>여자</option>
                    <option value='남성'>남자</option>
                    </select>
                    <input type='text' id='apply_reqbirth' placeholder='생년월일 ex)20190101' autocomplete="off"> 
                    </div>
                    <div class='input_box phone_box'>
                    <select id='reqphone-front'>
                    <option value='010'>010</option>
                    <option value='011'>011</option>
                    <option value='012'>012</option>
                    <option value='013'>013</option>
                    <option value='014'>014</option>
                    <option value='015'>015</option>
                    <option value='016'>016</option>
                    <option value='017'>017</option>
                    <option value='018'>018</option>
                    <option value='019'>019</option>    
                    </select>
                    <input type='text' id='reqphone-end' autocomplete="off"></div>

                    <label class="container" id='check_label' onclick="checkBoxEvent()">개인정보 수집 및 이용 동의 합니다.
                    <input type="checkbox" id='agree_check' autocomplete="off">
                    <span class="checkmark" id='check_box'></span>
                    </label>
                    </div>`)
                } else {

                }
                const btnData = b == 'speed' ? `<div class='cal_fn_btn' id='compare_fn_btn' onclick='popupRender.applyFn()'>보험료 계산하기</div>` : `<div class='compare_fn_btn' id='compare_fn_btn' onclick='popupRender.compareTabRnder("main"|"main_compare")'>보험 비교하기</div>`;

                resultArray.push(`${btnData}`)
                var resultArrayHtml = resultArray.toString();
                var replaceAll1 = resultArrayHtml.replaceAll(',', '');
                var replaceAll2 = replaceAll1.replaceAll('|', ',');
                var replaceAll3 = replaceAll2.replaceAll(null, ' ');
                insTab.innerHTML = `<h3>${popupCaption}</h3>${replaceAll3}`
            }
        }
        xhttp.open('POST', 'data/ins_data.json', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=0")
    },
    applyFn: function () {
        var reqName = document.getElementById('apply_reqname').value;
        var reqPhone = document.getElementById('reqphone-front').value + document.getElementById('reqphone-end').value;
        var reqSexflag = document.getElementById('apply_sexflag').value;
        var reqBirth = document.getElementById('apply_reqbirth').value;
        var Checked = document.getElementById('agree_check').checked;
        // var Btns = document.getElementById('submit_btns')
        if (reqName == '') {
            alert('성함을 입력해주세요')
        } else if (reqPhone.length <= 10) {
            alert('전화 번호를 확인해 주세요')
        } else if (reqSexflag == '') {
            alert('성별을 선택해주세요')
        } else if (reqBirth.length < 8) {
            alert('생년월일을 확인해주세요 예)20190101')
        } else if (Checked == false) {
            alert('개인정보 수집 및 이용을 체크해주세요')
        } else {
            if (this.arrayDish.length > 0) {
                this.applyUserinfo.push({
                    "reqName": reqName,
                    "reqPhone": reqPhone,
                    "reqSexflag": reqSexflag,
                    "reqBirth": reqBirth,
                    "Nodes": "front cals"
                })
                dataInsertFn("dir", "calBegin")

                setTimeout(() => {
                    if (DBreturnJson.phpresult == 'ok') {
                        alert('입력하신 상담 신청합니다!')
                        this.calResultRender('refresh')
                    }
                }, 500);
            } else if (this.arrayDish.length == 0) {
                alert('목록을 선택해주세요')
            } else {
                this.applyUserinfo.push({
                    "reqName": reqName,
                    "reqPhone": reqPhone,
                    "reqSexflag": reqSexflag,
                    "reqBirth": reqBirth,
                    "Nodes": "sectiontab"
                })
                dataInsertFn("dir", "calBegin")
                setTimeout(() => {
                    if (DBreturnJson.phpresult == 'ok') {
                        alert('입력하신 자료로 계산합니다!')
                        this.calResultRender('none')
                    }
                }, 500);

            }
            // Btns.style.display = 'none'  
        }

    },
    calResultRender: function (mode) {
        var insTab = document.getElementById('ins_tab');
        var date = new Date();
        var year = date.getFullYear()

        function objectValues2(obj, ArrayName) {
            var vals;
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && obj.propertyIsEnumerable(key)) {
                    vals = obj[key];
                }
            }
            ArrayName.push(vals)
            return vals;
        };
        if (mode == 'refresh') {
            result1 = [];
            result1 = returnJson.filter((x) => {
                return x.no == this.arrayDish[0];
            })
        } else {

        }
        var ageYear = this.applyUserinfo[0].reqBirth.substr(0, 4);
        var age = year - ageYear;
        var ObjKey = Number(result1[0].no);
        var priceResultArray = [];
        var priceKeyArray = [];

        Productprice;
        if (ObjKey <= 5) {
            objectValues2(result1[0].ageprice[0], priceResultArray)
            Productprice = `<span>출생전:</span> ${priceResultArray[0]}`
        } else if (ObjKey > 5 && ObjKey < 18) {
            objectValues2(result1[0].ageprice[0], priceResultArray)
            objectValues2(result1[0].ageprice[1], priceResultArray)
            objectValues2(result1[0].ageprice[2], priceResultArray)
            setTimeout(() => {
                MinKey = Object.keys(result1[0].ageprice[0]);
                MidKey = Object.keys(result1[0].ageprice[1]);
                MaxKey = Object.keys(result1[0].ageprice[2]);
                if (Number(MinKey) > age) {
                    Productprice = `${priceResultArray[0]}`
                } else if (Number(MinKey) <= age && Number(MidKey) > age) {
                    Productprice = `${priceResultArray[0]}`
                } else if (Number(MidKey) <= age && Number(MaxKey) > age) {
                    Productprice = `${priceResultArray[1]}`
                } else if (Number(MaxKey) < age) {
                    Productprice = `${priceResultArray[2]}`
                }
            }, 300)
        } else {
            var Productprice;
            var reqSexflag = this.applyUserinfo[0].reqSexflag
            if (reqSexflag == "남성") {
                objectValues2(result1[0].agepricem[0], priceResultArray)
                objectValues2(result1[0].agepricem[1], priceResultArray)
                objectValues2(result1[0].agepricem[2], priceResultArray)
                setTimeout(() => {
                    MinKey = Object.keys(result1[0].agepricem[0]);
                    MidKey = Object.keys(result1[0].agepricem[1]);
                    MaxKey = Object.keys(result1[0].agepricem[2]);
                    if (Number(MinKey) > age) {
                        Productprice = `${priceResultArray[0]}`
                    } else if (Number(MinKey) <= age && Number(MidKey) > age) {
                        Productprice = `${priceResultArray[0]}`
                    } else if (Number(MidKey) <= age && Number(MaxKey) > age) {
                        Productprice = `${priceResultArray[1]}`
                    } else if (Number(MaxKey) < age) {
                        Productprice = `${priceResultArray[2]}`
                    }
                }, 300)
            } else {
                objectValues2(result1[0].agepricef[0], priceResultArray)
                objectValues2(result1[0].agepricef[1], priceResultArray)
                objectValues2(result1[0].agepricef[2], priceResultArray)
                setTimeout(() => {
                    MinKey = Object.keys(result1[0].agepricef[0]);
                    MidKey = Object.keys(result1[0].agepricef[1]);
                    MaxKey = Object.keys(result1[0].agepricef[2]);
                    if (Number(MinKey) > age) {
                        Productprice = `${priceResultArray[0]}`
                    } else if (Number(MinKey) <= age && Number(MidKey) > age) {
                        Productprice = `${priceResultArray[0]}`
                    } else if (Number(MidKey) <= age && Number(MaxKey) > age) {
                        Productprice = `${priceResultArray[1]}`
                    } else if (Number(MaxKey) < age) {
                        Productprice = `${priceResultArray[2]}`
                    }
                }, 300)
            }

           


        }
        var PcMedia = window.matchMedia('( max-width: 1200px )');
        var TabletMedia = window.matchMedia('( max-width: 1024px ) and (min-width: 768px)');
        var MobileMedia = window.matchMedia('(max-width:767px)');

        if(TabletMedia.matches == true){
            setTimeout(() => {
                insTab.innerHTML = `<div class='cal_top_tab'>
                                    <div class='user_info'>
                                        <h3>고객님 정보</h3>
                                        <h4>${this.applyUserinfo[0].reqName}/ 만 ${age}세</h4>
                                        <h4>${result1[0].cate}</h4>
                                    </div>
                                    <div class='service_center_phone'>
                                        <p>고객센터</p>
                                        <h3>02-1670-5208</h3>
                                    </div>
                                    <div class='btn_area'>
                                <div class='insert_consult' onclick='popupRender.insertTapRender("calsEnd","cals")'>무료상담 신청하기<img src="img/popup/insert_icon.png" alt="상담신청버튼아이콘"></div>
                                <div class='return_cal' onclick='popupRender.returnFn("cals")'>보험료 다시 계산하기<img src="img/popup/return_cal_icon.png" alt="다시 계산하기 아이콘"></div>
                              </div>
                            </div>
                            <div class='cal_row2_tab'>

                              <div class='place_info'>
                                    <h3>월 납입보험료<h3>
                                    <h2 class='price'>${Productprice}<span>원</span></h2>
                                    <p class='price_tag'>선택하신 <span>${result1[0].product}</span></p>
                                    <p>월 예상 납입 보험료</p>
                              </div>
                        </div>
                        <div class='cal_row3_tab'>
                              <div class='ins_info_tab'>
                                        <h3>상품 특징 및 가입조건</h3>
                                        <ul class='ins_info_tb'>
                                            <li>
                                                <div class='list_head'>상품종류</div>
                                                <div class='list_desc'>${result1[0].cate} / ${result1[0].productcate} </div>
                                            </li>
                                            <li>
                                                <div class='list_head'>상품명</div>
                                                <div class='list_desc'>${result1[0].product}</div>
                                            </li>   
                                            <li>
                                                <div class='list_head'>특징</div>
                                                <div class='list_desc'>${result1[0].Characteristic1}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>갱신/비갱신</div>
                                                <div class='list_desc'>${result1[0].extension}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>보험기간</div>
                                                <div class='list_desc'>${result1[0].term}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>납입기간</div>
                                                <div class='list_desc'>${result1[0].payterm}년</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>가입유형</div>
                                                <div class='list_desc'>${result1[0].type} </div>
                                            </li>
    
                                        </ul>
                                    </div>
            </div>
            <p class='cal_mention'>선택하신 보험상품에 대한 자세한 설명이 필요하거나 다른 상품 비교견적을 받고 싶으신 분들은[상담신청]을 남겨 주시면 최대한</p>
            <p class='cal_mention'>빠른 시간 내에 전문상담사가 연락드리도록 하겠습니다.</p>

            <div class='cal-banner'>
                                        <h3>오래된 보험을 꺼내라!</h3>
                                        <p>전국 32개 보험사의 모든 보험상품을 전격 비교하여 당신에게 딱 맞는 보험상품을 찾아드립니다.</p>
                                        <p>보장내역은 든든하게,보험절감의 효과를 누려보세요</p>
                                
                                        <img src="img/popup/cal-banner.png" alt="계산기 배너이미지">
                                    </div>

                </div>`
            },500)

        }
        else if(MobileMedia.matches == true){

            setTimeout(() => {
                insTab.className = 'ins_tabs mo_tab'
                insTab.innerHTML = `<div class='cal_top_tab'>
                    <div class='top_tab'>
                    <div class='btn_area'>
                                        <div class='insert_consult btns' onclick='popupRender.insertTapRender("calsEnd","cals")'>무료상담 신청하기<img src="img/popup/insert_icon.png" alt="상담신청버튼아이콘"></div>
                                        <div class='return_cal btns' onclick='popupRender.returnFn("cals")'>보험료 다시 계산하기<img src="img/popup/return_cal_icon.png" alt="다시 계산하기 아이콘"></div>
                                    </div>
                    </div>
                               
                    <div class='row2'>
                                <div class='user_info'>
                                <h3>고객님 정보</h3>
                                <h4>${this.applyUserinfo[0].reqName}/ 만 ${age}세</h4>
                                <h4>${result1[0].cate}</h4>
                              </div>
                              <div class='service_center_phone'>
                                        <p>고객센터</p>
                                        <h3>02-1670-5208</h3>
                            </div>
                            </div>
                            <div class='price_info'>
                                <h3>월 납입보험료<h3>
                                <p class='price_tag'>선택하신 <span>${result1[0].product}</span></p>
                                <p>월 예상 납입 보험료</p>
                                <h2 class='price'><span>${Productprice}</span>원</h2>
                            </div>
                            <div class='ins_info_tab'>
                                        <h3>상품 특징 및 가입조건</h3>
                                        <ul class='ins_info_tb'>
                                            <li>
                                                <div class='list_head'>상품종류</div>
                                                <div class='list_desc'>${result1[0].cate} / ${result1[0].productcate} </div>
                                            </li>
                                            <li>
                                                <div class='list_head'>상품명</div>
                                                <div class='list_desc'>${result1[0].product}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>특징</div>
                                                <div class='list_desc'>${result1[0].Characteristic1}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>갱신/비갱신</div>
                                                <div class='list_desc'>${result1[0].extension}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>보험기간</div>
                                                <div class='list_desc'>${result1[0].term}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>납입기간</div>
                                                <div class='list_desc'>${result1[0].payterm}년</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>가입유형</div>
                                                <div class='list_desc'>${result1[0].type} </div>
                                            </li>
    
                                        </ul>
                                    </div>
                                    <p class='coment_p'>선택하신 보험상품에 대한 자세한 설명이 필요하시거나</p>
                                    <p class='coment_p'>다른 상품 비교견적을 받고 싶으신 분들은 [상담신청]을</p>
                                    <p class='coment_p'>남겨 주시면 최대한 빠른 시간 내에 전문상담사가 연락</p>
                                    <p class='coment_p'>드리도록 하겠습니다.</p>
                                    <div class='cal-banner'>
                                    <h3>오래된 보험을 꺼내라!</h3>
                                        <p>전국 32개 보험사의 모든 보험상품을 전격 비교하여</p>
                                        <p>당신에게 딱 맞는 보험상품을 찾아드립니다.</p>
                                        <p>보장내역은 든든하게, 보험절감의</p>
                                        <p>효과를 누려보세요.</p>
                                        <img src="img/popup/cal-banner.png" alt="계산기 배너이미지">
                                    </div>
                                    
                                           
                        </div>`

            
            },500)
        }
        else{
            setTimeout(() => {
                insTab.innerHTML = `<div class='cal_top_tab'>
                              <div class='user_info'>
                                <h3>고객님 정보</h3>
    
                                <h4>${this.applyUserinfo[0].reqName}/ 만 ${age}세</h4>
                                <h4>${result1[0].cate}</h4>
                              </div>
                              <div class='place_info'>
                                    <h3>월 납입보험료<h3>
                                    <h2 class='price'>${Productprice}<span>원</span></h2>
                                    <p class='price_tag'>선택하신 <span>${result1[0].product}</span></p>
                                    <p>월 예상 납입 보험료</p>
                              </div>
    
                                <div class='btn_area'>
                                <div class='insert_consult' onclick='popupRender.insertTapRender("calsEnd","cals")'>무료상담 신청하기<img src="img/popup/insert_icon.png" alt="상담신청버튼아이콘"></div>
                                <div class='return_cal' onclick='popupRender.returnFn("cals")'>보험료 다시 계산하기<img src="img/popup/return_cal_icon.png" alt="다시 계산하기 아이콘"></div>
                              </div>
                                </div>
                                <div class='cal_bottom_tab'>
                                    <div class='bottom_left'>
                                    <div class='service_center_phone'>
                                        <p>고객센터</p>
                                        <h3>02-1670-5208</h3>
                                    </div>
                                    <div class='cal-banner'>
                                        <h3>오래된 보험을 꺼내라!</h3>
                                        <h4>보장분석전문기업 보험친구들</h4>
                                        <p>전국 32개 보험사의 모든</p>
                                        <p>보험상품을 전격 비교하여</p>
                                        <p>당신에게 딱 맞는 보험상품을</p>
                                        <p>찾아드립니다. 보장내역은</p>
                                        <p>든든하게, 보험절감의 효과를</p>
                                        <p>누려보세요.</p>
                                        <img src="img/popup/cal-banner.png" alt="계산기 배너이미지">
                                    </div>
                                </div>
                                <div class='bottom_right'>
                                    <div class='ins_info_tab'>
                                        <h3>상품 특징 및 가입조건</h3>
                                        <ul class='ins_info_tb'>
                                            <li>
                                                <div class='list_head'>상품종류</div>
                                                <div class='list_desc'>${result1[0].cate} / ${result1[0].productcate} </div>
                                            </li>
                                            <li>
                                                <div class='list_head'>상품명</div>
                                                <div class='list_desc'>${result1[0].product}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>특징</div>
                                                <div class='list_desc'>${result1[0].Characteristic1}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>갱신/비갱신</div>
                                                <div class='list_desc'>${result1[0].extension}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>보험기간</div>
                                                <div class='list_desc'>${result1[0].term}</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>납입기간</div>
                                                <div class='list_desc'>${result1[0].payterm}년</div>
                                            </li>
                                            <li>
                                                <div class='list_head'>가입유형</div>
                                                <div class='list_desc'>${result1[0].type} </div>
                                            </li>
    
                                        </ul>
                                    </div>
                                    <p class='cal_mention'>선택하신 보험상품에 대한 자세한 설명이 필요하거나 다른 상품 비교견적을 받고 싶으신 분들은[상담신청]을 남겨 주시면 최대한</p>
                                    <p class='cal_mention'>빠른 시간 내에 전문상담사가 연락드리도록 하겠습니다.</p>
                                </div>
                                </div>
                                `
            }, 500);
    
        }
        


    },
    compareTabRnder: function (accessnode, subNode) {
        var insTab = document.getElementById('ins_tab');
        if (accessnode == "sub") {
            result2 = [];

        } else {
            result1 = [];
            result2 = [];
        }

        function objectValues2(obj, ArrayName) {
            var vals;
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && obj.propertyIsEnumerable(key)) {
                    vals = obj[key];
                }
            }
            ArrayName.push(vals)
            return vals;
        };
        if (this.arrayDish.length == 2) {
            result1 = returnJson.filter((x) => {
                return x.no == this.arrayDish[0];
            })
            priceHtml1 = []
            if (result1[0].ageprice.length == 1) {
                priceHtml1.push(`<div class='null_data'><span>-</span></div>`)
            } else if (result1[0].ageprice == 'mnf') {
                var objectKeyArrayMan = [];
                var objectKeyArrayWoMan = [];

                for (var i = 0; i < result1[0].agepricem.length; i++) {
                    objectValues2(result1[0].agepricem[i], objectKeyArrayMan);
                }
                for (var i = 0; i < result1[0].agepricef.length; i++) {
                    objectValues2(result1[0].agepricef[i], objectKeyArrayWoMan);
                }

         
                priceHtml1.push(
                    `<div class='price_bord'>
                <div class='tb_head row'>
                        <div class='colum colum-4  colum_head'>-</div>
                        <div class='colum colum-4 colum_body'>${Object.keys(result1[0].agepricem[0])}세</div>
                        <div class='colum colum-4 colum_body'>${Object.keys(result1[0].agepricem[1])}세</div>
                        <div class='colum colum-4 colum_body'>${Object.keys(result1[0].agepricem[2])}세</div>

                    </div>
                    <div class='tb_body1 row'>
                        <div class='colum colum-4 colum_body'><span class='gender_mark man_mark'>남</span></div>
                        <div class='colum colum-4 colum_body'>${objectKeyArrayMan[0]}원</div>
                        <div class='colum colum-4 colum_body'>${objectKeyArrayMan[1]}원</div>
                        <div class='colum colum-4 colum_body'>${objectKeyArrayMan[2]}원</div>
                    </div>
                    <div class='tb_body2 row'>
                    <div class='colum colum-4 colum_body'><span class='gender_mark woman_mark'>여</span></div>
                    <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[0]}원</div>
                    <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[1]}원</div>
                    <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[2]}원</div>
                </div>
                </div>`
                )
            } else if (result1[0].ageprice != 0) {
                var objectKeyArray = [];

                for (var i = 0; i < result1[0].ageprice.length; i++) {
                    objectValues2(result1[0].ageprice[i], objectKeyArray);
                }
                priceHtml1.push(`          <div class='price_bord'>
                                            <div class='tb_head row'>
                                                    <div class='colum colum-4  colum_head'>-</div>
                                                    <div class='colum colum-4 colum_body'>${Object.keys(result1[0].ageprice[0])}세</div>
                                                    <div class='colum colum-4 colum_body'>${Object.keys(result1[0].ageprice[1])}세</div>
                                                    <div class='colum colum-4 colum_body'>${Object.keys(result1[0].ageprice[2])}세</div>

                                                </div>
                                                <div class='tb_body1 row'>
                                                    <div class='colum colum-4 colum_body'><span class='gender_mark man_mark'>남</span></div>
                                                    <div class='colum colum-4 colum_body'>${objectKeyArray[0]}원</div>
                                                    <div class='colum colum-4 colum_body'>${objectKeyArray[1]}원</div>
                                                    <div class='colum colum-4 colum_body'>${objectKeyArray[2]}원</div>
                                                </div>
                                                <div class='tb_body2 row'>
                                                <div class='colum colum-4 colum_body'><span class='gender_mark woman_mark'>여</span></div>
                                                <div class='colum colum-4 colum_body'>${objectKeyArray[0]}원</div>
                                                <div class='colum colum-4 colum_body'>${objectKeyArray[1]}원</div>
                                                <div class='colum colum-4 colum_body'>${objectKeyArray[2]}원</div>
                                            </div>
                                            </div>`)
            }
            result2 = returnJson.filter((x) => {
                return x.no == this.arrayDish[1];
            })
            priceHtml2 = []
            if (result2[0].ageprice.length == 1) {
                priceHtml2.push(`<div class='null_data'><span>-</span></div>`)
            } else if (result2[0].ageprice == 'mnf') {
                var objectKeyArrayMan = [];
                var objectKeyArrayWoMan = [];

                for (var i = 0; i < result2[0].agepricem.length; i++) {
                    objectValues2(result2[0].agepricem[i], objectKeyArrayMan);
                }
                for (var i = 0; i < result2[0].agepricef.length; i++) {
                    objectValues2(result2[0].agepricef[i], objectKeyArrayWoMan);
                }


                priceHtml2.push(
                    `<div class='price_bord'>
                <div class='tb_head row'>
                        <div class='colum colum-4  colum_head'>-</div>
                        <div class='colum colum-4 colum_body'>${Object.keys(result2[0].agepricem[0])}세</div>
                        <div class='colum colum-4 colum_body'>${Object.keys(result2[0].agepricem[1])}세</div>
                        <div class='colum colum-4 colum_body'>${Object.keys(result2[0].agepricem[2])}세</div>

                    </div>
                    <div class='tb_body1 row'>
                        <div class='colum colum-4 colum_body'><span class='gender_mark man_mark'>남</span></div>
                        <div class='colum colum-4 colum_body'>${objectKeyArrayMan[0]}원</div>
                        <div class='colum colum-4 colum_body'>${objectKeyArrayMan[1]}원</div>
                        <div class='colum colum-4 colum_body'>${objectKeyArrayMan[2]}원</div>
                    </div>
                    <div class='tb_body2 row'>
                    <div class='colum colum-4 colum_body'><span class='gender_mark woman_mark'>여</span></div>
                    <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[0]}원</div>
                    <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[1]}원</div>
                    <div class='colum colum-4 colum_body'>${objectKeyArrayWoMan[2]}원</div>
                </div>
                </div>`
                )

            } else if (result2[0].ageprice != 0) {
                var objectKeyArray = [];

                for (var i = 0; i < result2[0].ageprice.length; i++) {
                    objectValues2(result2[0].ageprice[i], objectKeyArray);
                }
                priceHtml2.push(`          <div class='price_bord'>
                                            <div class='tb_head row'>
                                                    <div class='colum colum-4  colum_head'>-</div>
                                                    <div class='colum colum-4 colum_body'>${Object.keys(result2[0].ageprice[0])}세</div>
                                                    <div class='colum colum-4 colum_body'>${Object.keys(result2[0].ageprice[1])}세</div>
                                                    <div class='colum colum-4 colum_body'>${Object.keys(result2[0].ageprice[2])}세</div>

                                                </div>
                                                <div class='tb_body1 row'>
                                                    <div class='colum colum-4 colum_body'><span class='gender_mark man_mark'>남</span></div>
                                                    <div class='colum colum-4 colum_body'>${objectKeyArray[0]}원</div>
                                                    <div class='colum colum-4 colum_body'>${objectKeyArray[1]}원</div>
                                                    <div class='colum colum-4 colum_body'>${objectKeyArray[2]}원</div>
                                                </div>
                                                <div class='tb_body2 row'>
                                                <div class='colum colum-4 colum_body'><span class='gender_mark woman_mark'>여</span></div>
                                                <div class='colum colum-4 colum_body'>${objectKeyArray[0]}원</div>
                                                <div class='colum colum-4 colum_body'>${objectKeyArray[1]}원</div>
                                                <div class='colum colum-4 colum_body'>${objectKeyArray[2]}원</div>
                                            </div>
                                            </div>`)
            }

            var PcMedia = window.matchMedia('( max-width: 1200px )');
            var TabletMedia = window.matchMedia('( max-width: 1024px ) and (min-width: 768px)');
            var MobileMedia = window.matchMedia('(max-width:767px)');

            if(MobileMedia.matches == true){
           

                $(function() {			
					$("#table").swipe( {
						swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
					
                            
							if(direction =="left"){
                                $('.mo_table > .left_tab').animate({
                                    "left":"-75%"
                                },100)
                                $('.mo_table > .right_tab').animate({
                                    "left":"0%"
                                },100)

							}
							else if(direction =="right"){
                                $('.mo_table > .left_tab').animate({
                                    "left":"0%"
                                },100)
                                $('.mo_table > .right_tab').animate({
                                    "left":"75%"
                                },100)
							}
						},
					   threshold:0
					});
                });

                     
               

                insTab.innerHTML = `<div class='mo_compare_bord'>
                    <div class='bord_wrap'>
                    <div class='caption'>
                        <h3 class='result_compare'>스피드 보험비교</h3>
                        <h4>고객님이 선택하신 보험상품의 특징을 꼼꼼하게 비교해보세요</h4>
                        <div class='back_btn' onclick='popupRender.returnFn("speed")'>보험료 다시 비교하기</div>
                        <div class='insert_btn' onclick='popupRender.insertTapRender("compare","${subNode}")'>무료 상담 신청하기</div>
                    </div>
                    <div class='mo_table' id='table'>
                        <div class='left_tab mo_tab'>
                            <div class='top_data'>
                            <div class='logo_section' id='result_logosection' style="background-image:url(${result1[0].logo})"></div>
                                <div class='text_area'>
                                    <h3 id='result_product'>${result1[0].product}</h3>
                                    <p id='result_type'>${result1[0].type}</p>
                                </div>
                            </div>
                            <div class='price_table' id="price_table">
                                ${priceHtml1}
                            </div>

                            <div class='characteristic_tab tabs'>
                                <div class='text_area'>
                                <p>${result1[0].Characteristic1}</p>
                                <p>${result1[0].Characteristic2}</p>
                                </div>
                                
                            </div>
                            <div class='term_tab tabs'>
                                    <p>${result1[0].term}</p>
                                </div>
                                <div class='payterm_tab tabs'>
                                    <p>${result1[0].payterm}</p>
                                </div>
                                <div class='extension_tab tabs'>
                                    <p>${result1[0].extension}</p>
                                </div>
                        </div>

                        <div class='right_tab mo_tab'>
                            <div class='top_data'>
                            <div class='logo_section' id='result_logosection' style="background-image:url(${result2[0].logo})"></div>
                                <div class='text_area'>
                                    <h3 id='result_product'>${result2[0].product}</h3>
                                    <p id='result_type'>${result2[0].type}</p>
                                </div>
                            </div>
                            <div class='price_table' id="price_table">
                                ${priceHtml2}
                            </div>
                            <div class='characteristic_tab tabs'>
                            <div class='text_area'>
                                <p>${result2[0].Characteristic1}</p>
                                <p>${result2[0].Characteristic2}</p>
                                </div>
                            </div>
                            <div class='term_tab tabs'>
                                    <p>${result2[0].term}</p>
                                </div>
                                <div class='payterm_tab tabs'>
                                    <p>${result2[0].payterm}</p>
                                </div>
                                <div class='extension_tab tabs'>
                                    <p>${result2[0].extension}</p>
                                </div>
                        </div>


                        <div class='center_tab'>
                            <div class='top_tab'>
                                <div class='swipe_img'>
                                    <img id='swipe1' src='img/popup/swipe_img1.png'/ alt='스와이프이미지1'>
                                    <img id='swipe2' src='img/popup/swipe_img2.png'/ alt='스와이프이미지2'>
                                    <img id='swipe3' src='img/popup/swipe_img3.png'/ alt='스와이프이미지3'>
                                </div>
                            </div>
                            <div class='row2_tab'>
                                <span>연령별</br> 월 보험료</span>
                            </div>
                            <div class='row3_tab'>
                                <span>특징</span>
                            </div>
                            <div class='row4_tab'>
                                <span>보험기간</span>
                            </div>
                            <div class='row5_tab'>
                                <span>납입기간</span>
                            </div>
                            <div class='row6_tab'>
                                <span>갱신/비갱신</span>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>`
            
            $('.speed_compare_popup').animate({
                scrollTop: 200
            }, 0);

            }
            else{
                insTab.innerHTML = `<div class='compare_bord'>
                <div class='bord_wrap'>
                <div class='caption'>
                <h3 class='result_compare'>스피드 보험비교</h3>
                <h4>고객님이 선택하신 보험상품의 특징을 꼼꼼하게 비교해보세요</h4>
                <div class='back_btn' onclick='popupRender.returnFn("speed")'>보험료 다시 비교하기</div>
                </div>
                    <div class='tables'>
                        <div class='head_data data_tabs'>
                            <div class='left_tab tabs'>
                                <div class='logo_section' style="background-image:url(${result1[0].logo})"></div>
                                <div class='text_area'>
                                    <h3>${result1[0].product}</h3>
                                    <p>${result1[0].type}</p>
                                </div>
                            </div>

                            <div class='center_tab'></div>
                            <div class='right_tab tabs'>
                                <div class='logo_section' style="background-image:url(${result2[0].logo})"></div>
                                    <div class='text_area'>
                                        <h3>${result2[0].product}</h3>
                                        <p>${result2[0].type}</p>
                                    </div>
                            </div>
                            </div>
                            <div class='price_tab data_tabs'>
                            <div class='left_tab tabs'>
                                <div class='price_bord'>
                                    ${priceHtml1}
                                </div>
                            </div>

                            <div class='center_tab'>
                                <span>연령별</br> 월 보험료</span>
                            </div>
                            <div class='right_tab tabs'>
                                <div class='price_bord'>
                                ${priceHtml2}
                                </div>
                            </div>
                            </div>
                            <div class='illust_tab'>
                                <div class='illu_tab'></div>
                                <div class='text_tab'>
                                    <p>어떤 보험을 선택해야 할지 막막 하시다고요?</p>
                                    <p>혼자서 이것 저것 비교 어렵다면 전문상담사와 함께 하세요</p>
                                    <p>한 눈으로 확인하는 보험상품 보장분석 서비스, 1:1 맞춤 무료 진행합니다.</p>
                                    <div class='consult_btn' onclick='popupRender.insertTapRender("compare","${subNode}")'>무료 상담 신청</div>
                                </div>                         
                            </div>
                            <div class='character_data data_tabs bottom_data'>
                            <div class='left_tab tabs'>
                                <p>${result1[0].Characteristic1}</p>
                                
                            </div>
                            <div class='center_tab'>
                                <span>특징</span>
                            </div>
                            <div class='right_tab tabs'>
                            <p>${result2[0].Characteristic1}</p>
                            </div>
                            </div>

                            <div class='term_data data_tabs bottom_data'>
                                <div class='left_tab tabs'>
                                    <p>${result1[0].term}</p>
                                </div>
                                <div class='center_tab'>
                                    <span>보험기간</span>
                                </div>
                                <div class='right_tab tabs'>
                                <p>${result2[0].term}</p>
                                </div>
                            </div>

                            
                            <div class='term_data data_tabs bottom_data'>
                                <div class='left_tab tabs'>
                                    <p>${result1[0].payterm}년</p>
                                </div>
                                <div class='center_tab'>
                                    <span>납입</span>
                                </div>
                                <div class='right_tab tabs'>
                                <p>${result2[0].payterm}년</p>
                                </div>
                            </div>

                            <div class='term_data data_tabs bottom_data last-row'>
                                <div class='left_tab tabs'>
                                    <p>${result1[0].extension}</p>
                                </div>
                                <div class='center_tab'>
                                    <span>갱신/비갱신</span>
                                </div>
                                <div class='right_tab tabs'>
                                <p>${result2[0].extension}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            }

           
        } else {
            alert('목록을 두개 선택해주세요')
        }
       

    },
    insertTapRender: function (accessnode, subNode) {
        var insertTab = document.getElementById('insert_box')
        var insertpopup = document.getElementById('innser_insert')
        insertTab.style.display = 'block'
        var result = []

        if (returnJson != '') {
            result = returnJson.filter((x) => {
                return x.no == this.arrayDish[0];
            })
        } else {
            result = returnJson.filter((x) => {
                return x.no == this.arrayDish[0];
            })
        }
        if (accessnode == "widget") {
            var Nodes = "widget";
            var Memo = "";
            var name = "";
        } else if (accessnode == "mainsection") {
            var Nodes = "mainsection";
            var Memo = "";
            var name = "";
        } else if (accessnode == 'more_btn') {
            var name = "";
            var Memo = `${result1[0].cate}\n${result1[0].product}`;
            var Nodes = "cals";
        } else {
            if (result2 == undefined) {
                var name = accessnode == "calsEnd" ? `${this.applyUserinfo[0].reqName}` : ``;
                var Memo = accessnode == "calsEnd" ? `${result1[0].cate}\n${result1[0].product}(${result1[0].productcate})` : ``;
                var Nodes = subNode != "" ? `${subNode}` : `${accessnode}`;
            } else {
                var name = accessnode == "calsEnd" ? `${this.applyUserinfo[0].reqName}` : ``;
                var Memo = accessnode == "calsEnd" ? `${result[0].cate}\n${result[0].product}(${result[0].productcate})` : `${result1[0].cate} 상품비교\n${result1[0].product}`;
                var Nodes = subNode != "" ? `${subNode}` : `${accessnode}`;
            }

        }


        function datePicker() {
            $("#date").datepicker();
        }
        // insertTab.innerHTML = `<div class='loader'></div>`
        // setTimeout(() => {

        insertpopup.innerHTML = `<span class='xbox' onclick='popupRender.closepopup("noDel")'></span>
            <h2>전화 상담 예약</h2>
            <div class='insert_form' id='insert_form'>
                <div class='row top_tab'>
                    <div class='colums colum-1'>
                        <p>이름</p>
                        <input type='text' placeholder='이름' id='reqname' value='${name}'>
                    </div>
                    <div class='colums colum-2'>
                    <p>연락처</p>
                    <select id='reqphone-front'>
                        <option value='010'>010</option>
                        <option value='011'>011</option>
                        <option value='012'>012</option>
                        <option value='013'>013</option>
                        <option value='014'>014</option>
                        <option value='015'>015</option>
                        <option value='016'>016</option>
                        <option value='017'>017</option>
                        <option value='018'>018</option>
                        <option value='019'>019</option>    
                    </select>
                    <input class='number' type='text' id='reqphone-end' placeholder='휴대폰 번호'>
                    </div>
                </div>
                <div class='row middle_tab'>
                <div class='colums colum-1'>
                        <p>상담유형</p>
                        <select id='memo1'>
                            <option value='어린이 보험'>어린이 보험</option>
                            <option value='암보험'>암보험</option>
                            <option value='2대중대질병'>2대중대질병</option>
                            <option value='치매보험'>치매보험</option>
                        </select>
                    </div>
                    <div class='colums colum-2'>
                    <p>예약시간</p>
                    <input type='text' class='date' id="date"></input>
                    <span class='date_btn'><img src='img/popup/calender.png'></img></span>
                    <select id="time">
                        <option value=''>시간선택</option>
                        <option value='9'>9시</option>
                        <option value='10'>10시</option>
                        <option value='11'>11시</option>
                        <option value='12'>12시</option>
                        <option value='13'>13시</option>
                        <option value='14'>14시</option>
                        <option value='15'>15시</option>
                        <option value='16'>16시</option>
                        <option value='17'>17시</option>
                        <option value='18'>18시</option>
                        <option value='19이후'>19시 이후</option>
                    </select>
                    </div>
                </div>
                <div class='row bottom_tab'>
                    <p>문의내용</p>
                    <textarea id='long_memo'>${Memo}</textarea>
                </div>
            </div>
            <label class="container checked" id='check_labels' onclick="checkBoxEvents()">개인정보 수집 및 이용 동의 합니다.
                    <input type="checkbox" id='agree_checks'>
                    <span class="checkmark" id='check_boxs'></span>
                    </label>
                    <div class='sub_btn' onclick='dataInsertFn("refresh","${Nodes}")'>상담 예약하기</div>`
        datePicker();
        this.applyUserinfo = [];
        // },500)
    }
}

function dataInsertFn(fnNode, Nodes) {
    if (fnNode == 'refresh') {
        var reqName = document.getElementById('reqname').value;
        var reqPhone = document.getElementById('reqphone-front').value + document.getElementById('reqphone-end').value;
        var reqMemo = document.getElementById('long_memo').value + "\n" + document.getElementById('memo1').value;
        var reqWantDay = document.getElementById('date').value;
        var reqWantTime = document.getElementById('time').value;
        var Checked = document.getElementById('agree_checks').checked;

        if (Nodes == 'widget') {
            if (reqName == '') {
                alert('성함을 입력해주세요')
            } else if (reqPhone.length <= 10) {
                alert('전화 번호를 확인해 주세요')
            } else if (reqWantDay == '') {
                alert('상담 일자를 선택해주세요')
            } else if (Checked == false) {
                alert('개인정보 수집 및 이용을 체크해주세요')
            } else {
                popupRender.applyUserinfo.push({
                    "reqName": reqName,
                    "reqPhone": reqPhone,
                    "reqMemo": reqMemo,
                    "reqWantDay": reqWantDay,
                    "reqWantTime": reqWantTime,
                    "Nodes": Nodes,
                })
                InsertDates()
            }
        } else if (Nodes == 'mainsection') {
            if (reqName == '') {
                alert('성함을 입력해주세요')
            } else if (reqPhone.length <= 10) {
                alert('전화 번호를 확인해 주세요')
            } else if (reqWantDay == '') {
                alert('상담 일자를 선택해주세요')
            } else if (Checked == false) {
                alert('개인정보 수집 및 이용을 체크해주세요')
            } else {
                popupRender.applyUserinfo.push({
                    "reqName": reqName,
                    "reqPhone": reqPhone,
                    // "reqSexflag":popupRender.applyUserinfo[0]
                    "reqMemo": reqMemo,
                    "reqWantDay": reqWantDay,
                    "reqWantTime": reqWantTime,
                    "Nodes": Nodes,
                })
                InsertDates()

            }

        } else if (Nodes == 'cals') {
            if (reqName == '') {
                alert('성함을 입력해주세요')
            } else if (reqPhone.length <= 10) {
                alert('전화 번호를 확인해 주세요')
            } else if (reqWantDay == '') {
                alert('상담 일자를 선택해주세요')
            } else if (Checked == false) {
                alert('개인정보 수집 및 이용을 체크해주세요')
            } else {
                popupRender.applyUserinfo.push({
                    "reqName": reqName,
                    "reqPhone": reqPhone,
                    "reqMemo": reqMemo,
                    "reqWantDay": reqWantDay,
                    "reqWantTime": reqWantTime,
                    "Nodes": Nodes,
                    "consultType": result1[0].product + "(" + result1[0].ins + ")",
                })
                InsertDates()
            }
        } else {
            if (reqName == '') {
                alert('성함을 입력해주세요')
            } else if (reqPhone.length <= 10) {
                alert('전화 번호를 확인해 주세요')
            } else if (reqWantDay == '') {
                alert('상담 일자를 선택해주세요')
            } else if (Checked == false) {
                alert('개인정보 수집 및 이용을 체크해주세요')
            } else {
                popupRender.applyUserinfo.push({
                    "reqName": reqName,
                    "reqPhone": reqPhone,
                    "reqMemo": reqMemo,
                    "reqWantDay": reqWantDay,
                    "reqWantTime": reqWantTime,
                    "Nodes": Nodes,
                    "consultType1": result1[0].product + "(" + result1[0].ins + ")",
                    "consultType2": result2[0].product + "(" + result2[0].ins + ")",
                })
                InsertDates()
            }
        }
    } else if (fnNode == 'mainInput') {
        var reqName = document.getElementById('main_reqname').value;
        var reqBirth = document.getElementById('main_reqbirth').value;
        var reqSexflag = document.getElementById('main_sexflag').value;
        var reqPhone = document.getElementById('main_reqphone').value;
        var Checked = document.getElementById('agree_check').checked;
        if (reqName == '') {
            alert('성함을 입력해주세요')
        } else if (reqSexflag == '') {
            alert('성별을 입력해주세요')
        } else if (reqBirth == '') {
            alert('생년월일을 확인해주세요')
        } else if (reqPhone == '') {
            alert('전화 번호를 확인해 주세요')
        } else if (Checked == false) {
            alert('개인정보 수집 및 이용을 체크해주세요')
        } else {
            popupRender.applyUserinfo.push({
                "reqName": reqName,
                "reqPhone": reqPhone,
                "reqSexflag": reqSexflag,
                "reqBirth": reqBirth,
                "Nodes": Nodes
            })
            InsertDates()
        }
    } else if (fnNode == 'fastInsert') {
        var fastName = document.getElementById('fast_reqname').value
        var fastNumber = document.getElementById('fast_reqphone').value
        if (fastName == "") {
            alert('빠른상담 이름을 입력해주세요');
        } else if (fastNumber == "") {
            alert('빠른상담 전화번호를 입력해주세요');
        } else {
            popupRender.applyUserinfo.push({
                "reqName": fastName,
                "reqPhone": fastNumber,
                "Nodes": "mainFast"
            })
            InsertDates()
        }
    } else if (fnNode == 'submain') {
        var reqName = document.getElementById('reqname').value;
        var reqBirth = document.getElementById('reqbirth').value;
        var reqSexflag = document.getElementById('sexflag').value;
        var reqPhone = document.getElementById('reqphone').value;
        var Checked = document.getElementById('agree_check').checked;
        if (reqName == '') {
            alert('성함을 입력해주세요')
        } else if (reqSexflag == '') {
            alert('성별을 입력해주세요')
        } else if (reqBirth == '') {
            alert('생년월일을 확인해주세요')
        } else if (reqPhone == '') {
            alert('전화 번호를 확인해 주세요')
        } else if (Checked == false) {
            alert('개인정보 수집 및 이용을 체크해주세요')
        } else {
            popupRender.applyUserinfo.push({
                "reqName": reqName,
                "reqPhone": reqPhone,
                "reqSexflag": reqSexflag,
                "reqBirth": reqBirth,
                "Nodes": fnNode + "-" + params.id
            })
            InsertDates()
        }
    } else if (fnNode == 'page5_consult') {
        var reqName = document.getElementById('reqname_page5').value;
        var reqBirth = document.getElementById('reqbirth_page5').value;
        var reqPhone = document.getElementById('reqphone-front').value + "-" + document.getElementById('reqphone-end').value;
        var reqMemo = document.getElementById('reqmemo').value;
        var Checked = document.getElementById('agree_check_page5').checked;
        if (reqName == '') {
            alert('성함을 입력해주세요')
        } else if (reqBirth == '') {
            alert('생년월일을 확인해주세요')
        } else if (reqPhone.length < '10') {
            alert('전화 번호를 확인해 주세요')
        } else if (Checked == false) {
            alert('개인정보 수집 및 이용을 체크해주세요')
        } else {
            popupRender.applyUserinfo.push({
                "reqName": reqName,
                "reqPhone": reqPhone,
                "reqMemo": reqMemo,
                "reqBirth": reqBirth,
                "Nodes": fnNode
            })
            InsertDates()
        }
    } else if (fnNode == 'page6_consult'){
        var reqName = document.getElementById('reqname_page6').value;
        var reqPhone = document.getElementById('reqphone_page6').value;
        var reqArea = document.getElementById('reqarea').value;
        var reqSexflag = document.getElementById('reqsexflag_page6').value;
        var Checked = document.getElementById('agree_check_page6').checked;
        if (reqName == '') {
            alert('성함을 입력해주세요')
        } else if (reqArea == '') {
            alert('지역을 선택해주세요')
        } else if (reqSexflag == '') {
            alert('성별을 선택해주세요')
        } else if (reqPhone.length < '10') {
            alert('전화 번호를 확인해 주세요')
        } else if (Checked == false) {
            alert('개인정보 수집 및 이용을 체크해주세요')
        } else {
            popupRender.applyUserinfo.push({
                "reqName": reqName,
                "reqPhone": reqPhone,
                "reqArea": reqArea,
                "reqSexflag": reqSexflag,
                "Nodes": 'page6_consult'
            })
            InsertDates()
        }
    }
    else {
        InsertDates()
    }
    function InsertDates() {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                DBreturnJson = JSON.parse(this.responseText)
                if (DBreturnJson.phpresult == 'ok') {
                    alert('상담신청이 완료되었습니다')
                    var inputs = document.querySelectorAll('input');
                    for (var i = 0; i <= inputs.length; i++) {
                        inputs[i].value = '';
                    }
                } else {
                    alert('오류가 발생하였습니다. 관리자에게 문의하세요')
                }
            }
        }
        xhttp.open('POST', 'php/insert.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=" + JSON.stringify(popupRender.applyUserinfo))
    }
}