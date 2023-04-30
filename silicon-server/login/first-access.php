<?php
    require_once '../sqlConn.php';
    // começar ou retomar uma sessão
    session_start();
    mysqli_query($cydia_connect, "CREATE TABLE IF NOT EXISTS Users (username varchar(512), passcode varchar(512))");
    

    $select = mysqli_query($cydia_connect, "SELECT username FROM Users WHERE username='root'");
    if (mysqli_num_rows($select) < 1) {
        mysqli_query($cydia_connect, "INSERT INTO Users (username, passcode) VALUES ('root','alpine')");
    } else {
        $_SESSION['silicon_session'] = true;
        header("Location: ../repo/upload.php");
    }

?>