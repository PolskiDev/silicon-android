<?php
    require_once '../sqlConn.php';
    $old = $_POST['old_password'];
    $new = $_POST['new_password'];
    $username = $_POST['userid'];

    $select = mysqli_query($cydia_connect, "SELECT username, passcode FROM Users WHERE username='$username' AND passcode='$old'");
    if (mysqli_num_rows($select) < 1) {
        header("location: error/index.html");
    } else {
        $_SESSION['silicon_session'] = true;
        mysqli_query($cydia_connect, "UPDATE Users
        SET passcode = '$new'
        WHERE username = '$username';");
        header("location: index.html");
    }
?>