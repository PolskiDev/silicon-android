function empty() {
    let t = window.document.getElementById('err')
    t.innerHTML = "Please fill empty fields!"
    t.style.color = "red"
}
function upload() {
    let publicName = window.document.getElementById('publicName').value
    let publicURL = window.document.getElementById('publicURL').value
    let publicDev = window.document.getElementById('publicDev').value
    let publicVer = window.document.getElementById('publicVer').value
    let publicAndroid = window.document.getElementById('publicAndroid').value
    let publicIcon = window.document.getElementById('publicIcon').value
    
    if (publicName == '') {
        empty()
    } else if (publicURL == '') {
        empty()
    } else if (publicDev == '') {
        empty()
    } else if (publicVer == '') {
        empty()
    } else if (publicAndroid == '') {
        empty()
    } else if (publicIcon == '') {
        empty()
    } else {
        window.location.href = `../reg.php?url=${publicURL}&apk=${publicName}&dev=${publicDev}&version=${publicVer}&android=${publicAndroid}&icon=${publicIcon}`
    }
}