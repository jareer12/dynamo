<?php

class Uploader
{
    function upload($name, $location, $file)
    {
        $size = filesize($file);
        return [
            "Name" => $name,
            "Size" => $size,
            "Destination" => $location,
        ];
    }
}
