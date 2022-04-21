const API_KEY = `f412023d6a5d5ac8e75e3f5c2ef0fffb`;
const searchTempareture = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayInfo = info => {
    setInnerText('city', info.name);
    setInnerText('tempareture', info.main.temp);
    setInnerText('feels-like', info.main.feels_like);
    setInnerText('cloud-state', info.weather[0].description);

    // set weather icon
    const url = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    const img = document.getElementById('weather-icon');
    img.setAttribute('src', url);

    console.log(info);
}