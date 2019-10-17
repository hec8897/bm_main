<?php
include('../conn/conn.php');
mysqli_set_charset($conn,"utf8");

$data = json_decode($_POST['data']);

// $adGet = $data->url;
// $reqName = $data->insult[0];
// $reqPhone = $data->insult[1];
// $reqArea = $data->insult[2];
// $reqBirth = $data->answer[3];
// $reqSexflag = $data->answer[2];


// $reqMemo = "$result1\n$result2\n$result3\n$result4\n$result5\n$result6\n$result7\n$result8\n$result9\n$result10\n$result11\n$result12\n$result13";
// $site_code = "재테크성향";
// $time = date('Y-m-d H:i:s');

// $sql ="INSERT INTO `tb_consult` (site_code,reqName,reqSexflag,reqPhone,reqArea,reqMemo,Insertdate,reqAd) 
// VALUES('$site_code','$reqName','$reqSexflag','$reqPhone','$reqArea','$reqMemo','$time','$adGet')";

// mysqli_query($conn,$sql);


$json = json_encode(
    array("datas" => $data,"phpresult"=>'ok')
);
echo urldecode($json);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');

?>  