document.addEventListener("keydown", playSound);

function playSound(e) {
    const code = e.keyCode;
    const elements = document.querySelectorAll(`[data-key="${code}"]`);

    if (elements.length > 0) {
        //visuallly represent key pressing
        const [keyPressed, sound] = elements;
        keyPressed.classList.add("playing");
        setTimeout(() => {
            keyPressed.classList.remove("playing");
        }, 200);
    
        //play the respective sound
        sound.currentTime = 0;
        sound.play();
    }

}
