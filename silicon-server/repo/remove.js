function empty() {
    let t = window.document.getElementById('err')
    t.innerHTML = "Please fill empty fields!"
    t.style.color = "red"
}
function remove() {
    let publicURL = window.document.getElementById('publicURL').value

    if (publicURL == '') {
        empty()
    } else {
        window.location.href = `../del.php?url=${publicURL}`
    }
}