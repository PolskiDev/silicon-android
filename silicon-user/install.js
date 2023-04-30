/*const url = 'http://localhost/cydia/server/index.php'
fetch(url)
    .then( res => { return res.json(); } )
    .then( data => { showPage(data); } )
    .catch( err => { console.errror(error) } )
*/

function showPage() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const apk = urlParams.get('apk')
    const icon = urlParams.get('icon')
    const version = urlParams.get('version')
    const minandroid = urlParams.get('android')
    const install_url = urlParams.get('url')



    let a = window.document.getElementById('install')
    //for (let index = 0; index < data.length; index++) {
        a.innerHTML = `
    <div class="bg-body-tertiary p-5 rounded">
        <img src="${icon}" width="100px" style="border-radius: 20px;"><br><br>
        <h5>${apk}</h5>
        Version: ${version}<br>
        Minimum Android Version: ${minandroid}<br><br><br>  

        <center><a class="cydia-blue" role="button" href="${install_url}">Install</a></center>
    </div>
    `
    //}
}
showPage()