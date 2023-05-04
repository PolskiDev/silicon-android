function SearchAPK() {
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
            
            let a = window.document.getElementById('apkInput')
            let c = window.document.getElementById('found')

            //for (let index = 0; index < nodes.length; index++) {
              if (
                JSON.parse(nodes)[index].webname == a.value
                || JSON.parse(nodes)[index].webname.toLowerCase() == a.value.toLowerCase()
                || JSON.parse(nodes)[index].webname.toUpperCase() == a.value.toUpperCase()
              ) {
                let b = `screen/install.html?apk=${JSON.parse(nodes)[index].webname}&icon=${JSON.parse(nodes)[index].iconfile}&version=${JSON.parse(nodes)[index].version_num}&android=${JSON.parse(nodes)[index].android_ver}&dev=${JSON.parse(nodes)[index].developer}&url=${JSON.parse(nodes)[index].weburl}`
                c.innerHTML = `
                <center>
                <br><br><br><br><br>
                    <img src="${JSON.parse(nodes)[index].iconfile}" width="80px"><br>
                    <h2>${JSON.parse(nodes)[index].webname}</h2>
                    <p>${JSON.parse(nodes)[index].developer}</p><br>
                    <a class="free-green" href="${b}">GET</a>
                </center>
                <br><br>`
              } else {
                for (let i=0;i<8;i++) {
                  c.innerHTML += "<br>"
                }
                c.innerHTML += "<b>No package has been found...</b>"
                c.style.color = "gray"
              }
            //}
            
            console.log("Label: "+JSON.parse(nodes)[index].webname)
                       
          },
          error: function(){
            console.log("ajax call failed");
          }
      })
    }
  }