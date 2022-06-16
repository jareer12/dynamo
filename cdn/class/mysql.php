<?php

$conn = new mysqli("localhost", "root", "", "test");
if ($conn->connect_errno) {
    echo "Failed to connect to MySQL: " . $conn->connect_error;
    exit();
}
class MySQLPlayer
{
}

$MySQL = new MySQLPlayer();
