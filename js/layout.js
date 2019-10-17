String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}

var returnJson = [{
    no: "0",
}]
var layoutRender = {
    params: '',
    getQueryString: function () {
        params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
            params[key] = value;
        });
        return params;
    },
    HeaderRender: function () {
        this.getQueryString()
        var acitveList = ['disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li'];
        // console.listNo(acitveList)
        if (params.listNo != undefined) {
            acitveList.splice(Number(params.listNo - 1), 1, "active")
        } else {
            var acitveList = ['disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li'];
        }
        document.querySelector("header").innerHTML = `<div class='gnb gnb_line'>
        <div class='wrap'>
            <h1><a href='index.html'><img src="img/common/header-h1-BI.png" alt="BM_BI"></a></h1>
                <ul class='sns_bar'>
                    <li><a href='https://www.youtube.com/channel/UCsgs4ibSA_J4q5FC2IE5Gpw'><img src='img/common/header-sns-icon-youtube.png' alt="youtube_icon">유튜브</a></li>
                    <li><a href='https://www.facebook.com/bm9351'><img src='img/common/header-sns-icon-fb.png' alt="youtube_icon"alt="facebook_icon">페이스북</a></li>
                    <li><a href='https://www.instagram.com/bmconsulting9351'><img src='img/common/header-sns-icon-ins.png' alt="instar_icon">인스타그램</a></li>
                    <li><a href='https://blog.naver.com/bm9351'><img src='img/common/header-sns-icon-blog.png' alt="instar_blog">블로그</a></li>
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
                    <li class='${acitveList[0]}'><a href='main.html?id=page1&listNo=1' class='nav_li1'><img src='img/common/header-nav-icon1.png'>태아(어린이)보험</a><p class='liner1'></p></li>
                    <li class='${acitveList[1]}'><a href='main.html?id=page2&listNo=2' class='nav_li2'><img src='img/common/header-nav-icon2.png'>암보험</a><p class='liner2'></p></li>
                    <li class='${acitveList[2]}'><a href='main.html?id=page3&listNo=3' class='nav_li3'><img src='img/common/header-nav-icon3.png'>2대중대질병</a><p class='liner3'></p></li>
                    <li class='${acitveList[3]}'><a href='main.html?id=page4&listNo=4' class='nav_li4'><img src='img/common/header-nav-icon4.png'>치매보험</a><p class='liner4'></p></li>
                    <li class='${acitveList[4]}'><a href='javascript:fnDeleteUser()' onclick="alert('서비스 준비중입니다')" class='nav_li5'><img src='img/common/header-nav-icon5.png'>고객센터</a><p class='liner5'></p></li>
                    <li class='${acitveList[5]}'><a href='javascript:fnDeleteUser()' onclick="alert('서비스 준비중입니다')" class='nav_li6'><img src='img/common/header-nav-icon6.png'>보험금청구</a><p class='liner6'></p></li>

                    <!-- <li class='${acitveList[4]}'><a href='main.html?id=page5&listNo=5' class='nav_li5'><img src='img/common/header-nav-icon5.png'>고객센터</a><p class='liner5'></p></li> -->
                    <!-- <li class='${acitveList[5]}'><a href='main.html?id=page6&listNo=6  'class='nav_li6'><img src='img/common/header-nav-icon6.png'>보험금청구</a><p class='liner6'></p></li> -->
                </ul>
            </nav>
        </div>
    </div>`


    },
    footerRender: function () {
        this.getQueryString()
        var acitveList = ['disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li'];
        // console.listNo(acitveList)
        if (params.listNo != undefined) {
            acitveList.splice(Number(params.listNo), 1, "active")
        } else {
            var acitveList = ['disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li', 'disable_li'];
        }
        document.querySelector("footer").innerHTML = `<div class='company_list'>
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
                                src='img/common/header-nav-icon1.png'>태아(어린이)보험</a>
                        <p class='f_liner1'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page2&listNo=2' class='nav_li2'><img
                                src='img/common/header-nav-icon2.png'>암보험</a>
                        <p class='f_liner2'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page3&listNo=3' class='nav_li3'><img
                                src='img/common/header-nav-icon3.png'>2대중대질병</a>
                        <p class='f_liner3'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page4&listNo=4' class='nav_li4'><img
                                src='img/common/header-nav-icon4.png'>치매보험</a>
                        <p class='f_liner4'></p>
                    </li>
                    <li class='footer_li'><a href='javascript:fnDeleteUser()' onclick="alert('서비스 준비중입니다')" class='nav_li5'><img
                                src='img/common/header-nav-icon5.png'>고객센터</a>
                        <p class='f_liner5'></p>
                    </li>
                    <li class='footer_li'><a href='javascript:fnDeleteUser()' onclick="alert('서비스 준비중입니다')" class='nav_li6'><img
                                src='img/common/header-nav-icon6.png'>보험금청구</a>
                        <p class='f_liner6'></p>
                    </li>
                    <!-- <li class='footer_li'><a href='main.html?id=page5&listNo=5' class='nav_li5'><img
                                src='img/common/header-nav-icon5.png'>고객센터</a>
                        <p class='f_liner5'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page6&listNo=6' class='nav_li6'><img
                                src='img/common/header-nav-icon6.png'>보험금청구</a>
                        <p class='f_liner6'></p>
                    </li> -->
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
                    <li><a href=''>회사소개</a></li>
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
        <li onclick='popupRender.insertTapRender("widget")'>
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

    subSectionRender: function () {
        var mainPage = document.getElementById('sub_page_main');
        mainPage.className = 'main_page ' + params.id
    },
    subMainbannerRender: function () {
        var pageNo = params.listNo;

        var ThisBanner = document.getElementById('top_banner');
        ThisBanner.innerHTML = `<div class='wrap page${pageNo}'>
                                    <h2><img src="img/sub_page/page${pageNo}_banner_h1.png" alt=""></h2>
                                    <h3><img src="img/sub_page/page${pageNo}_banner_h2.png" alt=""></h3></div>`
    },
    section1Render: function () {
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
                                                <p>변형 및 염색체 이상 보장</p>
                                            </li>
                                            <li class='page1_circle2'>
                                            <div class='circle_box'></div>
                                            <p>희귀난치성 질환 보장</p>
                                            </li>
                                            <li class='page1_circle3'>
                                            <div class='circle_box'></div>
                                            <p>인큐베이터 사용비 및</p>
                                            <p>입원비 보장내역 확인!</p>
                                            </li>
                                            <li class='page1_circle4'>
                                            <div class='circle_box'></div>
                                            <p>커서 겪을 수 있는 아토피,</p>
                                            <p>성조숙증, ADHD 특약도</p>
                                            <p>꼼꼼하게 확인!</p>
                                            </li>
                                        </ul>
                                        <p class='ani_line'></p>
                                        </div>`
            },
            {
                h2: "당신의 암보험은 든든합니까?",
                p1: "여러 개의 암 보험을 가입했지만 보장내역&지급조건을",
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

                h2: "건강한 100세 시대를 위한 당신의 치매보험을 점검해드립니다.",
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
                                            <h3>치매환자 입원 외래별</br>요양급여비용총액 비율</h3>
                                            <p>요양급여비용이 외래비용보다</br>월등히 높게 나타나 이에 대한</br>단계별 대비가 필요합니다</p>
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
        var pageNo = params.listNo;
        var pageID = params.id;
        var Section = document.getElementById('section2');
        var Section2Data = [{
                h2: '어린이보험',
                p: '내 아이 성장 과정에 따라</br>보장내역과 만기를 다르게 설정해야합니다.',
                SectionAnimaitionHtml: `<div class='animation_tab_page1'>
                                           <p>큰 병 아니더라도 입원할 일이 많은 영유아기</p> 
                                           <p>입원일당 특약은 최대로! 어른이 되면 불필요한 내역은 30세 만기로!</p>
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
                h2: '더 저렴한 보험으로 미래를 대비하세요',
                p1: '변화된 생활패턴으로 꾸준하게 증가하고 있는 2대 질병에 대한 대비!',
                p2: '같은 보장, 더 저렴한 보험으로 미래를 대비하세요',
                SectionAnimaitionHtml: '123123'
            },
            {
                h2: '치매는 오랜 시간동안 소요되는 간병비와의 싸움!',
                h3: '고령자, 유병자라면</br><span>치매보험은 더욱 필수입니다.</span>',
                p: '기존에 가입한 보험을 꼼꼼하게 비교분석하고 부족한 보장을 채워줍니다.'
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
                                     <h3>${data[pageNo-1].h31}</span></h3>
                                     <h3>${data[pageNo-1].h32}</h3>
                                     <div class='text_box'>
                                         <h4>국내 32개 보험사의 모든 보험상품을 꼼꼼하게 분석해</h4>
                                         <h4>${data[pageNo-1].textbox}에게 딱 맞는 보험을 찾아주는 <span>1:1 맞춤 보장분석서비스!</span></h4>
                                     </div>
                                     `

    },
    arrayDish: [],
    tabListActive: function (thisdata, Dataindex) {
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
    section4Render: function (a) {
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
                                        <div class="more_btn">${result1[i].extension}</div>
                                    </div>`)

                }
                var resultArrayHtml = resultArray.toString();
                var replaceAll1 = resultArrayHtml.replaceAll(',', '');
                var replaceAll2 = replaceAll1.replaceAll('|', ',');
                var replaceAll3 = replaceAll2.replaceAll(null, ' ');

                Section.innerHTML = `
                            <div class="wrap">
                            <h2>스피드 보험비교</h2>
                            <p>보험친구들에서 추천하는 상품을 비교해보세요.(최대 2개의 상품을 비교해보실 수 있습니다.)</p>
                            <div class="fn_boxs">                                
                                ${replaceAll3}
                            </div>
                            <div class="fn_btn" onclick='popupRender.subPage()'>보험 비교하기</div>
                        </div>`
            }
        }
        xhttp.open('POST', 'data/ins_data.json', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=0")
    }
}


var popupRender = {
    closepopup: function (target) {
        if (target == 'popup') {
            this.arrayDish = [];
            this.applyUserinfo = [];
            this.applyUserinfo = []

            var popup = document.getElementById('popup_box')
            popup.innerHTML = `<div class='loader'></div>`

            $('html, body').css({
                'overflow-y': 'auto'
            });
            popup.style.display = 'none'
        } else if (target == 'insert') {
            var insertpopup = document.getElementById('insert_box')
            insertpopup.style.display = 'none'
        }

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
    subPage: function () {
        var popup = document.getElementById('popup_box');

        var fnsubBox = document.querySelectorAll('.fn_box');
        if (this.arrayDish.length == 2) {
            this.popupHead('speed')
            popup.style.display = 'block'
            popup.style.backgroundColor = 'rgba(0,0,0,0.6)'
            setTimeout(() => {
                popup.innerHTML = `<div class='speed_compare_popup'>
                    <span class='xbox' onclick='popupRender.closepopup("popup")'></span>
                    ${_popuphead}
                    <div class='ins_tabs' id='ins_tab'></div></div>`
                this.compareTabRnder("sub")
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
        const popuptit = b == 'speed' ? '스피드보험비교' : '보험 셀프 계산기';
        const fnKey = b == 'speed' ? 'cal' : 'speed';

        _popuphead = `<h2>${popuptit}</h2>
        <div class='popup_nav'>
            <div class='popup_list popup_list1 active' onclick='popupRender.tabData(0,"${fnKey}"), popupRender.tabListActive(0,this,"nav")'><img src='img/common/header-nav-icon1.png'>태아(어린이보험)</div>
            <div class='popup_list popup_list2' onclick='popupRender.tabData(1,"${fnKey}"), popupRender.tabListActive(1,this,"nav")'><img src='img/common/header-nav-icon2.png'>암보험</div>
            <div class='popup_list popup_list3' onclick='popupRender.tabData(2,"${fnKey}"), popupRender.tabListActive(2,this,"nav")'><img src='img/common/header-nav-icon3.png'>2대중대질병</div>
            <div class='popup_list popup_list4' onclick='popupRender.tabData(3,"${fnKey}"), popupRender.tabListActive(3,this,"nav")'><img src='img/common/header-nav-icon4.png'>치매보험</div>
        </div>`
    },
    speedpopup: function (a) {
        var popup = document.getElementById('popup_box');
        this.popupHead('no')
        popup.style.display = 'block'
        popup.style.backgroundColor = 'rgba(0,0,0,0.6)'
        setTimeout(() => {
            popup.innerHTML = `<div class='speed_compare_popup'>
                <span class='xbox' onclick='popupRender.closepopup("popup")'></span>
                ${_popuphead}
                <div class='ins_tabs' id='ins_tab'></div></div>`
            this.tabData(0, 'speed')
        }, 500);
        $('html, body').css({
            'overflow-y': 'hidden'
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
            this.tabData(0, 'cal')
        }, 500);
        $('html, body').css({
            'overflow-y': 'hidden'
        });
    },
    tabListActive: function (index, thisdata, mode1, Dataindex, mode2) {
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
    arrayDish: [],
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
                    <input type='text' id='reqname' placeholder='이름' autocomplete="off">
                    </div>
                    <div class='input_box info_box'>
                    <select id='sexflag'>
                    <option value=''>성별</option>
                    <option value='여성'>여자</option>
                    <option value='남성'>남자</option>
                    </select>
                    <input type='text' id='reqbirth' placeholder='생년월일 ex)20190101' autocomplete="off"> 
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
                }
                const btnData = b == 'speed' ? `<div class='cal_fn_btn' id='compare_fn_btn' onclick='popupRender.applyFn()'>보험료 계산하기</div>` : `<div class='compare_fn_btn' id='compare_fn_btn' onclick='popupRender.compareTabRnder()'>보험 비교하기</div>`;

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
    applyUserinfo: [],
    applyFn: function () {
        var reqName = document.getElementById('reqname').value;
        var reqPhone = document.getElementById('reqphone-front').value + document.getElementById('reqphone-end').value;
        var reqSexflag = document.getElementById('sexflag').value;
        var reqBirth = document.getElementById('reqbirth').value;
        var Checked = document.getElementById('agree_check').checked;



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
                    "Node": "메인 보험 셀프 계산기 계산전 유입"
                })
                dataInsertFn("dir", "calBegin")
                this.calResultRender()

            } else {
                alert('목록을 선택해주세요')
            }
        }

    },
    calResultRender: function () {
        var insTab = document.getElementById('ins_tab');
        var date = new Date();
        var year = date.getFullYear()
        result1 = [];
        result1 = returnJson.filter((x) => {
            return x.no == this.arrayDish[0];
        })

        var ageYear = this.applyUserinfo[0].reqBirth.substr(0, 4)
        var age = year - ageYear;



        insTab.innerHTML = `<div class='cal_top_tab'>
                          <div class='user_info'>
                          <h3>고객님 정보</h3>

                          <h4>${this.applyUserinfo[0].reqName}/ 만 ${age}세</h4>
                          <h4>${result1[0].cate}</h4>
                          </div>
                          <div class='place_info'>
                          <h3>월 납입보험료<h3>
                          <h2 class='price'>45,000<span>원</span></h2>
                          <p>선택하신 <span>${result1[0].product}</span>의</p>
                          <p>월 예상 납입 보험료</p>
                          </div>

                            <div class='btn_area'>
                            <div class='insert_consult' onclick='popupRender.insertTapRender("calsEnd")'>무료상담 신청하기<img src="img/popup/insert_icon.png" alt="상담신청버튼아이콘"></div>
                            <div class='return_cal' onclick='popupRender.returnFn("speed")'>보험료 다시 계산하기<img src="img/popup/return_cal_icon.png" alt="다시 계산하기 아이콘"></div>
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

        popupRender.applyUserinfo = [];


    },
    compareTabRnder: function (accessnode) {
        var insTab = document.getElementById('ins_tab');
        if(accessnode =="sub"){
            result2 = [];

        }
        else{
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
            if (result1[0].ageprice == 0) {
                priceHtml1.push(`<div class='null_data'>-</div>`)
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
            if (result2[0].ageprice == 0) {
                priceHtml2.push(`<div class='null_data'>-</div>`)
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

            insTab.innerHTML = `<div class='compare_bord'>
                                <div class='bord_wrap'>
                                <div class='caption'>
                                <h3 class='result_compare'>스피드 보험비교</h3>
                                <h4>고객님이 선택하신 보험상품의 특징을 꼼꼼하게 비교해보세요</h4>
                                <div class='back_btn' onclick='popupRender.returnFn("cals")'>보험료 다시 비교하기</div>
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
                                                    <div class='consult_btn' onclick='popupRender.insertTapRender("compare")'>무료 상담 신청</div>
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
        } else {
            alert('목록을 두개 선택해주세요')
        }
    },
    insertTapRender: function (accessnode) {
        var insertTab = document.getElementById('insert_box')
        var insertpopup = document.getElementById('innser_insert')
        insertTab.style.display = 'block'
        var result = []

        console.log(returnJson)

        if (returnJson != '') {
            result = returnJson.filter((x) => {
                return x.no == this.arrayDish[0];
            })
        } else {
            result = returnJson.filter((x) => {
                return x.no == this.arrayDish[0];
            })
        }

        const name = this.applyUserinfo.length > 0 ? `${this.applyUserinfo[0].reqName}` : ``;
        const Memo = this.applyUserinfo.length > 0 ? `${result[0].cate}\n${result[0].product}(${result[0].productcate})` : ``;

        function datePicker() {
            $("#date").datepicker();
        }
        // setTimeout(() => {
        insertpopup.innerHTML = `<span class='xbox' onclick='popupRender.closepopup("insert")'></span>
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
                            <option value='태아(어린이)보험'>태아(어린이)보험</option>
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
            <label class="container" id='check_label' onclick="checkBoxEvent()">개인정보 수집 및 이용 동의 합니다.
                    <input type="checkbox" id='agree_check'>
                    <span class="checkmark" id='check_box'></span>
                    </label>
                    <div class='sub_btn' onclick='dataInsertFn("refresh","${accessnode}")'>상담 예약하기</div>`
        datePicker();
        // }, 1000);
    }
}

function dataInsertFn(fnNode, Nodes) {

    if (fnNode == 'refresh') {
        var reqName = document.getElementById('reqname').value;
        var reqPhone = document.getElementById('reqphone-front').value + document.getElementById('reqphone-end').value;
        var reqMemo = document.getElementById('long_memo').value + "/n" + document.getElementById('memo1').value;
        var reqWantDay = document.getElementById('date').value;
        var reqWantTime = document.getElementById('time').value;
        var Checked = document.getElementById('agree_check').checked;



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
                "Nodes": Nodes
            })
            InsertDates()
            alert('상담신청이 완료되었습니다.')
            location.reload()
        }
    } else if (fnNode == 'mainInput') {
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
                "reqSexflag":reqSexflag,
                "reqBirth": reqBirth,
                "Nodes": Nodes
            })
            InsertDates()
            alert('상담신청이 완료되었습니다.')
            location.reload()
        }
    } else {
        InsertDates()
    }
    function InsertDates() {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var returnJson = JSON.parse(this.responseText)
                if (returnJson.phpresult == 'ok') {
                    console.log(returnJson)
              
                }
            }
        }
        xhttp.open('POST', 'php/insert.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=" + JSON.stringify(popupRender.applyUserinfo))
    }


}