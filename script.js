// Landing Page Button
document.getElementById('exploreButton').addEventListener('click', function() {
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.main').style.display = 'block';
});

// Countdown Timer
const countdownElement = document.getElementById('countdown');
const birthday = new Date('2024-10-11').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        countdownElement.innerHTML = "Happy Birthday!";
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// Wishing Wall Interactivity
const wishButtons = document.querySelectorAll('.wish-btn');
const wishText = document.getElementById('wish-text');

wishButtons.forEach(button => {
    button.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        wishText.innerHTML = message;
    });
});
