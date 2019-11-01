<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$PhonePattern = '/^(010|011|016|017|018|019)-[^0][0-9]{3,4}-[0-9]{4}/';


$reqName = $data[0]->reqName;
$reqPhone = $data[0]->reqPhone;
$Nodes = $data[0]->Nodes;
$Node = '';
$Phone = '';
if(preg_match("/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/",$reqPhone)){
    $Phone = '정규표현';
}
else{
    $Phone = '틀린표현';    
}


switch($Nodes){
    case "mainFast" : 
                    $Node = '유입경로: 빠른상담신청';
                    break;
    case "front cals" :
                    $Node = '유입경로: 셀프 계산기 계산전';
                    break;
    case "cals" :
                    $Node = '유입경로: 셀프 계산기 계산 후';
                    break;
    case "main_compare" :
                    $Node = '유입경로: 메인 스피드 보험 비교';
                    break;
    case "mainsection"  :
                    $Node = '유입경로: 메인 빠른상담 신청';
                    break;
    case "widget" : 
                    $Node = '유입경로: 위젯';
                    break;
    case "submain-page1" :
                    $Node = '유입경로: 서브페이지1 상단';
                    break;
    case "submain-page2" :
                    $Node = '유입경로: 서브페이지2 상단';
                    break;
    case "submain-page3" :
                    $Node = '유입경로: 서브페이지3 상단';
                    break;
    case "submain-page4" :
                    $Node = '유입경로: 서브페이지4 상단';
                    break;
    case "sub-1" :
                    $Node = '유입경로: 서브페이지 보험비교';
                    break;
    case "sectiontab" :
                    $Node = '유입경로: 서브페이지 자세히보기 탭';
                    break;
    case "page5_consult" :
                    $Node = '유입경로: page5 상담신청';
                    break;
    case "page6_consult" :
                    $Node = '유입경로: page6 청구대리 신청';
                    break;
    default :
                    $Node = '유입경로 확인불가..';
                    break;
}
$reqBirth = (isset($data[0]->reqBirth)?$reqBirth=$data[0]->reqBirth:"");
$reqArea = (isset($data[0]->reqArea)?$reqArea=$data[0]->reqArea:"");

$reqSexflag = (isset($data[0]->reqSexflag)?$reqSexflag=$data[0]->reqSexflag:"");
$reqMemo = (isset($data[0]->reqMemo)?$reqMemo= '원하는 상담내용\n'.$data[0]->reqMemo:"");
$reqWantDay = (isset($data[0]->reqWantDay)?$reqWantDay='요청 상담 날짜: '.$data[0]->reqWantDay:"");
$reqWantTime = (isset($data[0]->reqWantTime)?$reqWantTime=$data[0]->reqWantTime.'시':"");
$consultType = (isset($data[0]->consultType)?$consultType='사이트 선택 내용'.$data[0]->consultType:"");
$consultType1 = (isset($data[0]->consultType1)?$consultType1='사이트 선택 내용1'.$data[0]->consultType1:"");
$consultType2 = (isset($data[0]->consultType2)?$consultType2='사이트 선택 내용2'.$data[0]->consultType2:"");
$site_code = '보험친구들';
$time = date('Y-m-d H:i:s');

$reqMemos = "$Node\n$reqWantDay     $reqWantTime\n$consultType\n$consultType1\n$consultType2\n$reqMemo";

$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqArea,reqBirth,reqPhone,reqSexflag,reqMemo,Insertdate) 
VALUES('$site_code','$reqName','$reqArea','$reqBirth','$reqPhone','$reqSexflag','$reqMemos','$time')";


$conn = mysqli_query($conn,$sql);
if(isset($conn)){$phpresult = 'ok';}
else{$phpresult = 'no';}

$json = json_encode(
    array("datas" => $data,"test"=>123,"Node1" => $Phone  ,"Node2" =>$matches, "phpresult"=>$phpresult, "test"=>$reqMemos)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>