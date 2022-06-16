<?php

header("Content-type: application/json");
include "./class/master.php";
include "./class/mysql.php";

$Web->success([
    "Message" => "Success"
]);
