const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
});

const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
});

function updateClock() {
    const now = new Date();
    timeElement.textContent = timeFormatter.format(now);
    dateElement.textContent = dateFormatter.format(now);
}

updateClock();
setInterval(updateClock, 1000);
