import React,{useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { houses } from '../../data/houses';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../../data/repositories/weatherRepository';
import WeatherInfo from '../components/weatherInfo';

export const HomeDetailPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const house = houses[id - 1];
    const dispatch = useDispatch();

    const {weather, loading, error} = useSelector((state)=> state.weather);
    
    useEffect(() => {
     if(house){
        dispatch(fetchWeatherData(house.address));
     }
    }, [dispatch,house]);
    

    if(!house){
        return <p>Propiedad no encontrada</p>
    }

  return (
    <div className='home-detail-page'>
        <button onClick={()=> navigate(-1)}>
            Volver
        </button>

        <div className='home-detail'>
            <div className='home-detail-content'>
                <h2>{house.name}</h2>
                <img src={house.image} alt={house.name} style={{ width: '50%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}/>
                {loading ? (
          <p>Cargando clima...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : (
          <WeatherInfo weather={weather} />
        )}
                <p><strong>Dirección:</strong> {house.address}</p>
                <p><strong>Descripción:</strong> {house.description}</p>
                <p><strong>Precio:</strong> {house.price} Sus</p>

            </div>
        </div>
    </div>
  )
}

export default HomeDetailPage;