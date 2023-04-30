function onErrorDisplay() {
    window.addEventListener("load", event => {
        var image = document.querySelector('img');
        var isLoaded = image.complete && image.naturalHeight !== 0;
        if (!isLoaded) {
            image.src = "android.png";
        }
    });
    console.warn("Loading...")
}