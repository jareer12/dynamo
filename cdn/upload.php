<?php

header("Content-type: application/json");
include "./class/mysql.php";
include "./class/master.php";
include "./class/uploader.php";

if (isset($_FILES["file"])) {
    if (isset($_POST["name"])) {
        if (isset($_POST["location"])) {
            $name = $_POST["name"];
            $file = $_FILES["file"];
            $location = $_POST["location"];

            $Data = $Cloud->upload($name, $location, $file);
            $Web->success([
                "Message" => "Successfuly uploaded file",
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
