//this is for detecting clicks; it registers clicks and then calls the function to trigger sounds  
for (i = 0; i < 7; i++) {
    document.querySelectorAll("div.set button")[i].addEventListener("click", function() {
        var drumButton = this.innerHTML;
        clickResponse(drumButton);
    }
    )
}

//this is for detecting keys; it registers them and then calls the function to trigger sounds
document.addEventListener("keydown", function() {
    //the "event.key" registers what key in the keyboard was pressed in the event that a key was pressed 
    //it is then passed as a specific variable
    var keyPressed = event.key;
    clickResponse(keyPressed);
}
)

function clickResponse(click) {
    audioResponse(click);
    visualResponse(click);
}

//this is for triggering a visual response (changing class to one of the buttons being pressed)
function visualResponse(click) {
    var drumButton = click;
    document.querySelector("." + drumButton).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + drumButton).classList.remove("pressed");
    }, 200);    
}

function audioResponse(click) {
    var drumButton = click;

        switch (drumButton) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();            
                break;

            case "a":
                var kickbass = new Audio("sounds/kick-bass.mp3");
                kickbass.play();            
                break;

            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();            
                break;

            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();            
                break;

            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();            
                break;

            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();            
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();            
                break;

            default:
                console.log(drumButton);
        }
}