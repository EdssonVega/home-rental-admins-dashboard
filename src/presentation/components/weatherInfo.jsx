import React from 'react'

export const WeatherInfo = ({weather}) => {
    if(!weather) return <div>No hay datos de clima disponibles</div>;

  return (
    <div>
        <h3>Clima:</h3>
        <p>Temperatura: {weather.main.temp} °C</p>
        <p>Descripción: {weather.weather[0].description}</p>
        <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        />
    </div>
  );
};

export default WeatherInfo;
