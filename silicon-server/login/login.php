<?php
    require_once '../sqlConn.php';
    // começar ou retomar uma sessão
    session_start();

    $username = $_POST['userid'];
    $passcode = $_POST['password'];

    $select = mysqli_query($cydia_connect, "SELECT username, passcode FROM Users WHERE username='$username' AND passcode='$passcode'");
    if (mysqli_num_rows($select) < 1) {
        header("Location: error/index.html");
    } else {
        $_SESSION['silicon_session'] = true;
        header("Location: ../repo/upload.php");
    }

?>