<?php
error_reporting(E_ALL);
error_reporting(-1);
ini_set('error_reporting', E_ALL);
    require_once 'sqlConn.php';
    
    $name = $_POST['publicName'];
    $developer = $_POST['publicDev'];
    $version = $_POST['publicVer'];
    $android_ver = $_POST['publicAndroid'];

    // Get reference to uploaded image
    $image_file = $_FILES['icns'];
    $apk_file = $_FILES['apk'];
    
    /*  
    *$dir é o caminho da pasta onde você deseja que os arquivos sejam salvos. 
    *Neste exemplo, supondo que esta pagina esteja em public_html/upload/ 
    *os arquivos serão salvos em public_html/upload/imagens/ 
    *Obs.: Esta pasta de destino dos arquivos deve estar com as permissões de escrita habilitadas. 
    */
    //$path = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]";
    $dir = $repo_dir; 
    // recebendo o arquivo multipart 
    $apk = $_FILES["apk"]["name"]; 
    $apk_tmp = $_FILES["apk"]["tmp_name"];
    $apk_cpath = $dir.'/'.$_FILES["apk"]["name"];
    $apk_uri = $path_to_server.'/'.$dir.'/'.$_FILES["apk"]["name"];


    // Move o arquivo da pasta temporaria de upload para a pasta de destino 
    if (copy($apk_tmp, $apk_cpath)) { 
        echo "Arquivo enviado com sucesso!"; 
    } 
    else { 
        echo "Erro, o arquivo I n&atilde;o pode ser enviado.";
        header("location: login/error/index.html"); 
    }

    $icns = $_FILES["icns"]["name"];
    $icns_tmp = $_FILES["icns"]["tmp_name"]; 
    $icns_cpath = $dir.'/'.$_FILES["icns"]["name"];
    $icns_uri = $path_to_server.'/'.$dir.'/'.$_FILES["icns"]["name"];
    // Move o arquivo da pasta temporaria de upload para a pasta de destino 
    if (copy($icns_tmp, $icns_cpath)) { 
        echo "Arquivo enviado com sucesso!"; 
        
        $result = mysqli_query($cydia_connect, "SELECT webname FROM Silicon WHERE webname='$name';");
        if(mysqli_num_rows($result) == 0) {
            // row not found, do stuff...
            mysqli_query($cydia_connect,
            "INSERT INTO Silicon (
                weburl,
                webname,
                developer,
                version_num,
                android_ver,
                iconfile
            )
            VALUES (
                '$apk_uri',
                '$name',
                '$developer',
                '$version',
                '$android_ver',
                '$icns_uri'
            )");
    
            header("Location: server.html");
        } else {
            // do other stuff...
            echo "Error: `$name` already exists, please choose other name!";
            header("location: login/error/index.html");
        }
    } 
    else { 
        echo "Erro, o arquivo II n&atilde;o pode ser enviado."; 
        header("location: login/error/index.html");
    }

    
    // http://localhost/cydia/reg.php?url=www.dev.com&apk=abc.apk&dev=gabrielmargarido&version=1.0&android=4.4.4&icon=img.png&sk=1308
?>