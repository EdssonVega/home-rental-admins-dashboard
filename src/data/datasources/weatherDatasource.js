import axios from "axios";

const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL =  'https://api.openweathermap.org/data/2.5/weather'

const api = axios.create({
    baseURL: BASE_URL,
    params:{
        appid:WEATHER_API_KEY,
        units: "metric",
    },
});


export const fetchWeather = async(address) => {
    try{
        const response = await api.get("",{
            params:{q:address},
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos del clima:",error);
        throw new Error("Error al obtener datos del clima");
    }
};