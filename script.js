const countdownElement = document.getElementById('countdown');
const happyNewYearElement = document.getElementById('happyNewYear');
const waitMessageElement = document.getElementById('waitMessage');

const newYearDate = new Date('2025-01-01T00:00:00').getTime();
const redirectTime = new Date('2025-01-01T12:05:00').getTime(); // Updated to 12:05:00

// Function to check if the current time is past the redirect time
function checkRedirect() {
  const now = new Date().getTime();
  if (now >= redirectTime) {
    window.location.href = 'https://knarlix.github.io/Dreamer/';
  }
}

// Check immediately on page load
checkRedirect();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = newYearDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is finished, show the Happy New Year message
  if (distance < 0) {
    clearInterval(countdownInterval);
    waitMessageElement.style.display = 'none';
    happyNewYearElement.classList.remove('hidden');
  }
}, 1000);
