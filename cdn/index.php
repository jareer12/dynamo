<?php

header("Content-type: application/json");
include "./class/mysql.php";
include "./class/master.php";
include "./class/uploader.php";

if (isset($_GET["i"])) {
    $id = $_GET["i"];
    $data = $conn->query("SELECT * FROM cdn_files WHERE id = '$id'")->fetch_assoc();

    $extension = $data["extension"];
    $cloud = $data["destiny"];
    $name = $data["name"];

    $path = "./clouds/$cloud/$name.$extension";
    echo $path;
    readfile($path);
}
