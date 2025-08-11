import { fetchWeather } from "../datasources/weatherDatasource"

export const getWeatherByAddress = async(address) => {
    try {
        const weatherData = await fetchWeather(address);
        return weatherData;
    } catch (error) {
        throw new Error("No se pudo obtener los datos del clima")
    }
};