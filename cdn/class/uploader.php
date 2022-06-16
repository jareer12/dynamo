<?php

class Uploader
{
    function upload($name, $location, $file)
    {
        global $conn;
        global $Web;
        $protocol = isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] === 'on' || $_SERVER['HTTPS'] === 1) || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' ? 'https' : 'http';
        $extension = pathinfo($file["name"], PATHINFO_EXTENSION);
        $serverhost = $_SERVER['HTTP_HOST'];
        $path = "/cdn/clouds/$location";
        $destiny = "..$path";

        if (is_dir($destiny)) {
            $created = time();
            $id = $Web->randstr(24);
            $size = filesize($file["tmp_name"]);
            $mime = mime_content_type($file["tmp_name"]);
            move_uploaded_file($file["tmp_name"], "$destiny/$name.$extension");
            $add = $conn->query("INSERT INTO cdn_files(id, `name`, created, destiny, extension) VALUES('$id', '$name', '$created', '$location', '$extension')");
            return [
                "Success" => true,
                "Stored" => $add,
                "Id" => $id,
                "Name" => $name,
                "Size" => $size,
                "Mime" => $mime,
                "Destination" =>  "$protocol://$serverhost/clouds/$location/$name.$extension",
            ];
        } else {
            return [
                "Success" => false,
                "Name" => "Cloud does not exist on the server",
            ];
        }
    }
}

$Cloud = new Uploader();
