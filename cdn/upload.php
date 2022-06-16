<?php

header("Content-type: application/json");
include "./class/uploader.php";
include "./class/master.php";
include "./class/mysql.php";

if ($_POST["file"]) {
    if ($_POST["name"]) {
        if ($_POST["location"]) {
            $name = $_POST["name"];
            $location = $_POST["location"];

            $Data = $Uploader->upload($name, $location, $_POST["file"]);
            $Web->success([
                "Message" => "Success",
                "Data" => $Data
            ]);
        } else {
            $Web->failure([
                "Message" => "No destination cloud provided"
            ]);
        }
    } else {
        $Web->failure([
            "Message" => "No valid file name given"
        ]);
    }
} else {
    $Web->failure([
        "Message" => "No file uploaded"
    ]);
}
