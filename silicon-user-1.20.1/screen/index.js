function display(data) {
    //http://localhost/cydia/client-js/uix/install.html?apk=Cydia1&icon=https://www.mobipicker.com/wp-content/uploads/2016/07/Cydia.png&version=9.0&android=4.4.4&url=www.abc.ge
    let a = window.document.getElementById('this')
    for (let index = 0; index < data.length; index++) {
        let b = `screen/install.html?apk=${data[index].webname}&icon=${data[index].iconfile}&version=${data[index].version_num}&android=${data[index].android_ver}&dev=${data[index].developer}&url=${data[index].weburl}`
        a.innerHTML += `
        <center>
            <img src="${data[index].iconfile}" width="80px"><br>
            <h2>${data[index].webname}</h2>
            <p>${data[index].developer}</p><br>
            <a class="free-green" href="${b}">GET</a>
        </center>
        <br><br>`
    }
    
    console.log(data)
}

function packages_load() {
  for (let index = 0; index < JSON.parse(host).length; index++) {
    //const element = array[index];
    let uri = JSON.parse(host)[index]+'/index.php?mode=app'
    console.log(JSON.parse(host)[index])
    
    $.ajax({
        type: 'GET',
        url: uri,
        datatype: "json",
        contentType: "application/json",
        success: function(nodes){
          console.log("AJAX: "+nodes)
          
          //for (let x=0;x<JSON.parse(nodes).length;x++) {
              display(JSON.parse(nodes))
          //}
                     
        },
        error: function(){
          console.log("ajax call failed");
        }
    })
  }
}
packages_load();
// http://localhost/Silicon_AppStore/silicon-server/server
