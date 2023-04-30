<?php
    require_once 'sqlConn.php';
    mysqli_query($cydia_connect,

    'CREATE TABLE IF NOT EXISTS Silicon
    (
        weburl varchar(255),
        webname varchar(255),
        developer varchar(255),
        version_num varchar(15),
        android_ver varchar(15),
        iconfile varchar(2048)
    )');

    $index_result = mysqli_query($cydia_connect,
    "SELECT * FROM Silicon");

    $emparray = array();
    while($row=mysqli_fetch_assoc($index_result))
    {
        $emparray[] = $row;
    }

    $mode = $_GET['mode'];

    if ($mode == 'app') {
        echo json_encode($emparray);
    } else {
        header("Location: server.html");
    }
    
?>