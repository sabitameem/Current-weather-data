const API_Key = `78d60c84f358d9f77b6a8c06259023d7`;
const loadTemperature = city =>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data=> displayTemperature(data))
};
const displayTemperature = data =>{
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
    console.log(data.weather[0].main);
}

const setInnerTextById = (id, text)=>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('input-field');
    const city = searchField.value;
    //set city 
    document.getElementById('city').innerHTML= city;
    loadTemperature(city)
})
loadTemperature('dhaka');