/*function add_source_single() {
    let source = window.document.getElementById('source_url').value
    
    if (source != "") {
        //keys.push(source)
        //localStorage.setItem(silicon_repos,JSON.stringify(keys))
        localStorage.setItem('silicon_repo',source)
        window.document.getElementById('err').innerHTML = "Added source!"
    }

}*/
window.onload = function() {
    let j = JSON.parse(localStorage.getItem('silicon_repo'))
    let list = window.document.getElementById('list')

    if (!j) {
        list.innerHTML = "No sources to show..."
        list.style.color = 'grey'
        list.style.fontWeight = 'bold'
    } else {
        for (let index = 0; index < j.length; index++) {
        //const element = array[index];
        list.innerHTML += j[index]+"<br>"
    }
    }
    
    
}


/*function add_source() {
    let source = window.document.getElementById('source_url').value
    
    if (source != "") {
        if (localStorage.getItem('silicon_repo') != null) {
            let k = []
            let x = JSON.parse(localStorage.getItem('silicon_repo'))
            
            // ISSUE HERE
            k.push(x)
            k.push(source)
            
            // OK
            localStorage.setItem('silicon_repo', JSON.stringify(k))
            
            //localStorage.setItem('silicon_repo',JSON.stringify(x))
        } else {
            let k = []
            let x = source
            k.push(x)
            localStorage.setItem('silicon_repo',JSON.stringify(k))
        }
        window.document.getElementById('err').innerHTML = "Added source!"
    }

}*/

function add_source() {
    remove_source()
    let source = window.document.getElementById('source_url').value
    
    let repos = source.split(";")
    let k = []
    for (let i=0;i<repos.length;i++) {
        k.push(repos[i])
    }
    localStorage.setItem('silicon_repo',JSON.stringify(k))

    window.document.getElementById('err').innerHTML = "Added source!"
    
}

// http://localhost/Silicon_AppStore/silicon-server/server

function remove_source() {
    let source = window.document.getElementById('source_url').value
    //let k = []
    //let x = JSON.parse(localStorage.getItem('silicon_repo'))
    //k.push(x)
    //k.push(source)
    localStorage.removeItem('silicon_repo')

    window.document.getElementById('err').innerHTML = "All sources were removed"
}