const urlMeteo = 'https://api.open-meteo.com/v1/forecast?latitude=40.710335&longitude=-73.99307&current=temperature_2m,weather_code';
const labelTemperatura = document.querySelector('h1');
const inconaMeteo = document.querySelector('span');


callAPI(urlMeteo);




function callAPI(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        labelTemperatura.innerText = data.current.temperature_2m + ' °C';
        console.log(data.current.weather_code); //3
    
        if(data.current.weather_code == 3) {
            inconaMeteo.innerText = 'partly_cloudy_day';
        } else if(data.current.weather_code == 0) {            
            inconaMeteo.innerText = 'sunny';
        }
    });
}



// for(c of data) {
//     console.log(c);

//     main.innerHTML = `
//     <p>${c.name}</p>
//     <p>${c.email}</p>
//     `
// }