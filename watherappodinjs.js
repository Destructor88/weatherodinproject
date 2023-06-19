async function weatherInfo(location){
    let response = await fetch("https://api.weatherapi.com/v1/current.json?key=74b04918d8c44e70985132239231506&q=" + location);
    let data = await response.json();
    console.log(data)
    let weatherCF = {weatherCelsius:data.current.temp_c,weatherFahrenhait:data.current.temp_f};
    return weatherCF;
}
function weatherDisplay(data){
    document.querySelector(".weatherForm").style.background = "white"
    document.querySelector(".weatherDisplayer").textContent = data.weatherCelsius + " " + data.weatherFahrenhait;
}

document.querySelector("#weatherInputSubmit").addEventListener("submit",e => {
    e.preventDefault();
    document.querySelector(".weatherForm").style.background = "black"

    async function infoDisplayer(){
        let location = document.querySelector("#weatherInput").value;
        let weatherData = await weatherInfo(location);

        weatherDisplay(weatherData);
    }

    infoDisplayer();
})