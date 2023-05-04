function SearchAPK() {
    var input = document.getElementById('apkInput').value;
    li = document.querySelectorAll("a.ttL");
    li_p = document.querySelectorAll("a.ttL p");


    const url = host+'/index.php?mode=app'
    fetch(url)
        .then( res => { return res.json(); } )
        .then( data => {
            for (let i=0; i<data.length; i++) {
                if (input != data[i].webname) {
                    li[i].style.display = 'none'
                    console.log(`Log: ${input}:${data[i].webname}`)
                } else {
                    li[i].style.display = ''
                    console.log(`Log: ${input}:${data[i].webname}`)
                }
            }
        } )
        .catch( err => { console.error(err) } )
}








/*function SearchAPK0() {
    // Declare variables
    var input, li, li_p;
    input = document.getElementById('apkInput').value;
    li = document.querySelectorAll("a.ttL");
    li_p = document.querySelectorAll("a.ttL p");

    if (input == '') {
        for (let i=0; i<li.length; i++) {
            if (input != li_p[i].innerHTML) {
                li[i].style.display = ''
            }
        }
    } else {
        for (let i=0; i<li.length; i++) {
            if (input != li_p[i].innerHTML) {
                li[i].style.display = 'none'
            }
        }
    }
}*/