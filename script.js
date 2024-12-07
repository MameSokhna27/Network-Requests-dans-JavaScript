const apiKey = '95849cd7359464a1fc8d0e7bef0667ff';

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('city');
const cityNameElement = document.getElementById('cityName');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

//une fonction pour récupérer des données météorologiques à partir d'une API météorologique avec fetch.
const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`);
                if (!response.ok) {
            throw new Error('Ville non trouvée');
        }
//Étudier la réponse JSON et extraire les données pertinentes telles que la température, la description et l'emplacement.
        const data = await response.json();
        cityNameElement.textContent = data.name;
        temperatureElement.textContent = `${data.main.temp}°C`;
        descriptionElement.textContent = data.weather[0].description;
    } catch (error) {
        console.error('Erreur lors de la récupération des données météo:', error);
        alert(error.message);
    }
};
//un gestionnaire d'événements pour le bouton rechercher
searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim(); 
    if (city) {
        getWeather(city);
    } else {
        alert('Veuillez entrer une ville');
    }
});

