<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

$reqName = $data[0]->reqName;
$reqPhone = $data[0]->reqPhone;
$Nodes = $data[0]->Nodes;

$reqBirth = (isset($data[0]->reqBirth)?$reqBirth=$data[0]->reqBirth:"");
$reqSexflag = (isset($data[0]->reqSexflag)?$reqSexflag=$data[0]->reqSexflag:"");
$reqMemo = (isset($data[0]->reqMemo)?$reqMemo=$data[0]->reqMemo:"");
$reqWantDay = (isset($data[0]->reqWantDay)?$reqWantDay=$data[0]->reqWantDay:"");
$reqWantTime = (isset($data[0]->reqWantTime)?$reqWantTime=$data[0]->reqWantTime:"");
$consultType = (isset($data[0]->consultType)?$consultType=$data[0]->consultType:"");
$consultType1 = (isset($data[0]->consultType1)?$consultType1=$data[0]->consultType1:"");
$consultType2 = (isset($data[0]->consultType2)?$consultType2=$data[0]->consultType2:"");
$time = date('Y-m-d H:i:s');
$reqMemos = "원하는 상담시간 $reqWantDay $reqWantTime 시 \n사이트 선택 내용 $consultType\n$consultType1\n$consultType2\n 원하는 상담내용: $reqMemo";
$sql ="INSERT INTO `tb_consult` (site_code,reqName,reqBirth,reqPhone,reqSexflag,reqMemo,Insertdate) 
VALUES('$Nodes','$reqName','$reqBirth','$reqPhone','$reqSexflag','$reqMemos','$time')";


$conn = mysqli_query($conn,$sql);
if(isset($conn)){$phpresult = 'ok';}
else{$phpresult = 'no';}

$json = json_encode(
    array("datas" => $data,"reqbirth" => $sql, "phpresult"=>$phpresult)
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>  