<?php

class WebPlayer
{
    function success($data)
    {
        $data["Success"] = true;
        echo json_encode($data);
    }
    function failure($data)
    {
        $data["Success"] = false;
        echo json_encode($data);
    }
    function randstr($length = 12)
    {
        return strtoupper(substr(str_shuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"), 10, $length));
    }
};

$Web = new WebPlayer();
