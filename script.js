const apiKey = 'PASTE_YOUR_KEY_HERE'; 

async function getWeather(lat, lon) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`);
    const data = await res.json();
    
    document.getElementById('temp').innerText = Math.round(data.main.temp) + "°";
    document.getElementById('desc').innerText = data.weather[0].description;
    document.getElementById('city').innerText = data.name;
    
    setTheme();
}

function setTheme() {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    let theme = "winter";
    
    if (month === 11 && day >= 10) theme = "christmas";
    if (month === 9 && day >= 20) theme = "halloween";
    
    document.getElementById('app').setAttribute('data-theme', theme);
    document.getElementById('season-title').innerText = theme.toUpperCase();
}

navigator.geolocation.getCurrentPosition(pos => {
    getWeather(pos.coords.latitude, pos.coords.longitude);
});
