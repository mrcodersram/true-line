document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.getElementById('typing-text');
    const text = typingText.innerHTML;
    typingText.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Adding button sound effects
    const buttons = document.querySelectorAll('.btn');
    const audio = new Audio('chin dum.mp3');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            audio.currentTime = 0; // Reset audio to start
            audio.play();
        });
    });
});
