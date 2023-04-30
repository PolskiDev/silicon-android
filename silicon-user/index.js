function display(data) {
    //http://localhost/cydia/client-js/uix/install.html?apk=Cydia1&icon=https://www.mobipicker.com/wp-content/uploads/2016/07/Cydia.png&version=9.0&android=4.4.4&url=www.abc.ge
    let a = window.document.getElementById('this')
    for (let index = 0; index < data.length; index++) {
        let b = `install.html?apk=${data[index].webname}&icon=${data[index].iconfile}&version=${data[index].version_num}&android=${data[index].android_ver}&url=${data[index].weburl}`
        a.innerHTML += `
    <a class="btn btn-md ttL"
        style="font-size: 20px;"
        href="${b}">
        <img src="${data[index].iconfile}" onError="" width="90px" style="border-radius: 20px;"><br>
        <p>${data[index].webname}</p>
    </a><br><br>`
    }
    
    console.log(data)
}

// http://localhost/Silicon_AppStore/silicon-server/server
for (let index = 0; index < JSON.parse(host).length; index++) {
    //const element = array[index];
    const url = JSON.parse(host)[index]+'/index.php?mode=app'
    console.log(JSON.parse(host)[index])
    fetch(url)
        .then( res => { return res.json(); } )
        .then( data => { display(data); } )
}