const container = document.getElementById("container"),
    colorCode = document.getElementById("colorCode")
;
function changeColor() {
    const charecters = "0123456789abcdef";

    let hexCode = "#";

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * charecters.length);
        hexCode += charecters[randomIndex];
    }
    container.style.background = hexCode;
    colorCode.innerHTML = hexCode;
}