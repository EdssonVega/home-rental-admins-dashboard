import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { houses } from '../../data/houses';

export const HomeDetailPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const house = houses[id - 1];

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
                <img src={house.image} alt={house.name} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}/>
                <p><strong>Dirección:</strong> {house.address}</p>
                <p><strong>Descripción:</strong> {house.description}</p>
                <p><strong>Precio:</strong> {house.price} Sus</p>

            </div>
        </div>
    </div>
  )
}

export default HomeDetailPage;