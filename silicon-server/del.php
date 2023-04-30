<?php
    require_once 'sqlConn.php';
    $webname = $_POST['name'];
    //$icon = $_POST['icon'];
    $apk = $_POST['apk'];


    $sql1 = "SELECT weburl FROM Silicon WHERE webname='$webname'";
    $result = mysqli_query($cydia_connect, $sql1);

    if (mysqli_num_rows($result) > 0) {
        unlink($repo_dir.'/'.$apk);

        mysqli_query($cydia_connect,
        "DELETE FROM Silicon
        WHERE webname='$webname'");

        header("Location: server.html");


        //while($row = mysqli_fetch_assoc($result)) {
            /*$db_path = $path_to_server.'/'.$repo_dir.'/'.$apk;
            
            $len = strlen($path_to_server.'/'.$repo_dir.'/');
            $new_path = substr($db_path, $len, strlen($db_path)-$len);
            echo "  -> ".$new_path;  
            unlink($new_path);*/
        //}
    } else {
        echo "0 results";
    }
    // http://localhost/cydia/del.php?url=www.dev.com&sk=1308
?>