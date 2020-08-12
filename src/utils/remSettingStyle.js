function fontSize() {
    let clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 750) {
        clientWidth = 750;
    }
    var fs = clientWidth / 7.5;
    document.documentElement.style.fontSize = fs + "px";
}

window.onresize = function () {
    fontSize();
}