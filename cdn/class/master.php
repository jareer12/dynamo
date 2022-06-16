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
};

$Web = new WebPlayer();
