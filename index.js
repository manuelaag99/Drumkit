
for (i = 0; i < 7; i++) {
    document.querySelectorAll("div.set button")[i].addEventListener("click", handleClick);
}

var audio = new Audio("sounds/crash.mp3");
function handleClick() {
    audio.play()
}
