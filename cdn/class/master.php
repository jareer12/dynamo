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
    function randstr($length)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $randstring = '';
        for ($i = 0; $i < $length; $i++) {
            $randstring = $characters[rand(0, strlen($characters))];
        }
        return strtolower($randstring);
    }
};

$Web = new WebPlayer();
