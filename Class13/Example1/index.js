console.log('Hi');

// 61d9dd57bacf4e5fbfa160846232812
const buttonref = document.querySelector('.button');


buttonref.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log('button pressed');
    fetchData();
})

function fetchData(){
    fetch("http://api.weatherapi.com/v1/current.json?key=61d9dd57bacf4e5fbfa160846232812&q=London&aqi=yes")
    .then((res) => res.json())
    .then((res) => updateWeatherDetails(data))
    .catch(e => console.log(e));
}

function updateWeatherDetails(data){
    
}