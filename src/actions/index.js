import axios from 'axios';

const API_KEY = '01dc2db78749e5d5a3ea2479ee8dfb5b';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const URL = `${ROOT_URL}q=${city},us`;
    const request = axios.get(URL);

return {
    type: FETCH_WEATHER,
    payload: request
};
}