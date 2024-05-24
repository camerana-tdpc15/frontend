const selectCity = document.querySelector('select');
const labelTemperature = document.querySelector('h1');
const imgMeteo = document.querySelector('span');

selectCity.addEventListener('change', function(event) {
//   console.log('hai cambiato la selezione della citta...');
  console.log(event.target.value);

  // https://api.open-meteo.com/v1/forecast?latitude=45.0705&longitude=7.6868&current=temperature_2m,weather_code
    
  // 1. comporre la stringa con l'url dell'endpoint
    // const urlMeteo = 'https://api.open-meteo.com/v1/forecast?' 
    //     + event.target.value + 
    //     '&current=temperature_2m,weather_code';
    const urlMeteo = `https://api.open-meteo.com/v1/forecast?${event.target.value}&current=temperature_2m,weather_code`;
    // console.log(urlMeteo);
    
    // 2. fare la chiamata all'api
    fetch(urlMeteo).then(res=>res.json()).then(data=>{
        console.log(data.current.temperature_2m);
        console.log(data.current.weather_code);

        // 3. mostrare i dati a schermo
        labelTemperature.innerText = data.current.temperature_2m + '°C ';
    
        if(data.current.weather_code == 0) {
            imgMeteo.innerText = 'sunny';
        } 
        // else if () {

        // } 
        else {
            imgMeteo.innerText = 'question_mark'; // ?
        }

    });

    

});


const form = document.querySelector('form');
form.addEventListener('submit', event =>{
    event.preventDefault();
})