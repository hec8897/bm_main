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
        // console.log(pageNo)
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

    }


}


var popupRender = {
    closepopup: function () {
        var popup = document.getElementById('popup_box')
        $('html, body').css({
            'overflow-y': 'auto'
        });

        popup.style.display = 'none'

    },
    speedpopup: function (a) {
        var popup = document.getElementById('popup_box')
        popup.style.display = 'block'
        popup.style.backgroundColor = 'rgba(0,0,0,0.6)'
        setTimeout(() => {
            popup.innerHTML = `<div class='speed_compare_popup'>
                <span class='xbox' onclick='popupRender.closepopup()'></span>
                <h2>스피드 보험비교</h2>
                <div class='popup_nav'>
                    <div class='popup_list popup_list1 active'><img src='img/common/header-nav-icon1.png'>태아(어린이보험)</div>
                    <div class='popup_list popup_list2'>암보험</div>
                    <div class='popup_list popup_list3'>2대중대질병</div>
                    <div class='popup_list popup_list4'>치매보험</div>
                </div>
                <h3>최대 2개까지 보험비교를 하실 수 있습니다.</h3>
                <div class='ins_tabs' id='ins_tab'>
                    123
                </div>
            </div>`

            tabData(a)
        }, 1000);

        function tabData(a) {
            var insTab = document.getElementById('ins_tab')
            insTab.innerHTML = `<div class='ins_tab ins_tab1'>
                                    <img src="img/sub_page/company_mz.png" alt="">
                                    <p>내맘같은 어린이보험</p>

                                </div>
                                <div class='ins_tab ins_tab2'>
                                <img src="img/sub_page/company_hk.png" alt="">

                                </div>
                                <div class='ins_tab ins_tab3'>
                                <img src="img/sub_page/company_hh.png" alt="">

                                </div>
                                <div class='ins_tab ins_tab4'>
                                <img src="img/sub_page/company_db.png" alt="">

                                </div>
                                <div class='ins_tab ins_tab5'>
                                <img src="img/sub_page/company_mh.png" alt="">

                                </div>
                                <div class='ins_tab ins_tab6'>
                                <img src="img/sub_page/company_rt.png" alt="">

                                </div>`
                            }

        $('html, body').css({
            'overflow-y': 'hidden'
        });

    }
}