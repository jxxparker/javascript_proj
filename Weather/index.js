// apikey = '956a00c685e5f514bb91f0238514c18e';

const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector(',weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = '956a00c685e5f514bb91f0238514c18e';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;
});