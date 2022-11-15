import { listOfCountries } from "./data.js";


const countryList = document.getElementById('countryList')

listOfCountries.forEach(country => {        
    countryList.innerHTML += 
    `<div class="country rounded">
        <h3>${country.name}</h3>
        <img src = "${country.image}" width="150px" height="150px">
        <p class="justify">
            ${country.desc}
        </p>
     <div>`
});


