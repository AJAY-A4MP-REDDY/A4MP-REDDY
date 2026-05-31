document.addEventListener('DOMContentLoaded', () => {
    const orb = document.getElementById('voiceOrb');
    const statusText = document.getElementById('statusText');
    const chatBubble = document.getElementById('chatBubble');

    let isListening = false;

    // Orb click handler
    if (orb) {
        orb.addEventListener('click', () => {
            isListening = !isListening;

            if (isListening) {
                // Listening state on
                orb.classList.add('listening');
                statusText.innerText = 'LISTENING . . . . . . . . . . . . .';
                chatBubble.innerText = "I'm listening to you, tell me AJAY KUMAR...";
            } else {
                // Listening state off
                orb.classList.remove('listening');
                statusText.innerText = 'TAP THE ORB TO SPEAK';
                chatBubble.innerText = 'Hi, my name is A4MP REDDY. How can I help you?';
            }
        });
    }
});

