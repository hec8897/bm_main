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
                    <li><a href=''><img src='img/common/header-sns-icon-youtube.png' alt="youtube_icon">유튜브</a></li>
                    <li><a href=''><img src='img/common/header-sns-icon-fb.png' alt="youtube_icon"alt="facebook_icon">페이스북</a></li>
                    <li><a href=''><img src='img/common/header-sns-icon-ins.png' alt="instar_icon">인스타그램</a></li>
                    <li><a href=''><img src='img/common/header-sns-icon-blog.png' alt="instar_blog">블로그</a></li>
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
                    <li class='${acitveList[4]}'><a href='main.html?id=page5&listNo=5' class='nav_li5'><img src='img/common/header-nav-icon5.png'>고객센터</a><p class='liner5'></p></li>
                    <li class='${acitveList[5]}'><a href='main.html?id=page6&listNo=6   ' class='nav_li6'><img src='img/common/header-nav-icon6.png'>보험금청구</a><p class='liner6'></p></li>
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
        document.querySelector("footer").innerHTML = `           <div class='company_list'>
        <div class='wrap'>
            <ul>
                <li><img src="img/common/company_list_db.png" alt=""></li>
                <li><img src="img/common/company_list_mg.png" alt=""></li>
                <li><img src="img/common/company_list_hd.png" alt=""></li>
                <li><img src="img/common/company_list_hh.png" alt=""></li>
                <li><img src="img/common/company_list_hk.png" alt=""></li>
                <li><img src="img/common/company_list_rt.png" alt=""></li>
                <li><img src="img/common/company_list_mr.png" alt=""></li>
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
                    <li class='footer_li'><a href='main.html?id=page5&listNo=5' class='nav_li5'><img
                                src='img/common/header-nav-icon5.png'>고객센터</a>
                        <p class='f_liner5'></p>
                    </li>
                    <li class='footer_li'><a href='main.html?id=page6&listNo=6' class='nav_li6'><img
                                src='img/common/header-nav-icon6.png'>보험금청구</a>
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
        <img src="img/common/widget_img.png" alt="">
        <p>02</p>
        <p>1670</p>
        <p>5208</p>
    </div>
    <ul class='widget_menu'>
        <li>
            <img src="img/common/widget-call.png" alt="">
            <b>전화상담</b>
        </li>
        <li>
            <img src="img/common/widget-msg.png" alt="">
            <b>상담예약</b>
        </li>
        <li>
            <img src="img/common/widget-kakao.png" alt="">
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


        var LeftTabData = [{
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
                                                    <p class='count_people1'>905.936명</p>
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
                                            <div class='main_circle'>
                                            <div class='half_circle main_half_left'>1</div>
                                            <div class='half_circle main_half_right'>1</div>
                                            </div>
                                            <div class='hide_circle'>
                                            <div class='half_circle hide_half_left'>1</div>
                                            <div class='half_circle hide_half_right'>1</div>
                                            </div>
                                            </div>
                                            
                                            </div>
                                       </div>`
            },

        ]
        // console.log(pageNo)
        var Section = document.getElementById('section1');
        if (pageNo <= 2) {
            Section.className = `section1 ${pageID}`
            Section.innerHTML = `<div class='wrap tab2_mode ${pageID}'>
            <div class="left_tab tabs" id='section_left'><h2>${LeftTabData[pageNo-1].h2}</h2><p>${LeftTabData[pageNo-1].p1}</p><p>${LeftTabData[pageNo-1].p2}</p></div>
            <div class="right_tab tabs" id='section_right'>${LeftTabData[pageNo-1].SectionAnimaitionHtml}</div>
        </div>`
        } else if (pageNo <= 4) {
            Section.innerHTML = `<div class='wrap tab3_mode'>
                <h2>${LeftTabData[pageNo-1].h2}</h2>
                <p>${LeftTabData[pageNo-1].p}</p>
                ${LeftTabData[pageNo-1].SectionAnimaitionHtml}
            </div>`
        }




        // var Section1Left = document.getElementById('section_left');
        // var Section2Left = document.getElementById('section_right');

        // Section1Left.innerHTML = `${pageNo}`
        // Section2Left.innerHTML = `${pageNo}`


    }


}