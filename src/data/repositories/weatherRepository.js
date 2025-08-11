import { getWeatherFailure, getWeatherRequest, getWeatherSuccess } from '../../state/weather/weatherSlice';
import { fetchWeather } from '../datasources/weatherDatasource';


export const fetchWeatherData = (address) => async (dispatch) => {
  dispatch(getWeatherRequest());
  try {
    const weatherData = await fetchWeather(address);
    dispatch(getWeatherSuccess(weatherData)); 
  } catch (error) {
    dispatch(getWeatherFailure("No se pudo obtener el clima"));
  }
};