let buttons = document.querySelectorAll(".title button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {

            case "W":
                var tom1 = new Audio('sounds/crash.mp3');
                tom1.play();
                break;

            case "A":
                var tom2 = new Audio('sounds/kick-bass.mp3');
                tom2.play();
                break;

            case "S":
                var tom3 = new Audio('sounds/snare.mp3');
                tom3.play();
                break;

            case "D":
                var tom4 = new Audio('sounds/tom-1.mp3');
                tom4.play();
                break;

            case "K":
                var tom5 = new Audio('sounds/tom-2.mp3');
                tom5.play();
                break;

            case "L":
                var tom6 = new Audio('sounds/tom-3.mp3');
                tom6.play();
                break;

            case "M":
                var tom7 = new Audio('sounds/tom-4.mp3');
                tom7.play();
                break;
        }
    });
}