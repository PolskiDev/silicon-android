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
    const dev = urlParams.get('dev')
    const version = urlParams.get('version')
    const minandroid = urlParams.get('android')
    const install_url = urlParams.get('url')



    let a = window.document.getElementById('install')
    //for (let index = 0; index < data.length; index++) {
        a.innerHTML = `
    <center>
        <br><br><br><br><br><br><br><br><br>
        <img src="${icon}" width="80px"><br>
        <h2>${apk}</h2>
        <p>${dev}</p><br>
        <p>Version: ${version}</p><br>
        <a class="free-blue" href="${install_url}">INSTALL</a>
        <br><br><br><br>
        <p>Minimum Android Version: ${minandroid}</p>
        <br><br>
        <a href="../index.html#packages" class="mobilegap-gray">Back to Home</a><br><br><br>
            
    </center>
    `
    //}
}
showPage()