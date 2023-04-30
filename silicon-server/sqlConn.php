<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);


    /* CONFIGURE HERE */
    $host = "yourdatabase";
    $mysql_username = "root";
    $mysql_password = "";
    $mysql_database = "Silicon";



    /* UPLOAD APK & ICON - DO NOT CHANGE*/
    $path_to_server = "http://yourhost.com/silicon-server";
    $repo_dir = "repo/apt";



    /* MYSQL-DB CONNECT */
    $cydia_connect = mysqli_connect($host, $mysql_username, $mysql_password, $mysql_database);
// http://localhost/cydia/reg.php?url=www.dev.com&apk=app.apk&dev=gabrielmargarido&version=1.0&sk=1308
?>