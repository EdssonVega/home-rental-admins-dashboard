import React from 'react'
import { houses } from '../../data/houses';
import { Link } from 'react-router-dom';

export const HomesListPage = () => {
  return (
    <div className='homes-list-pages'>
      <h2>Casas en alquiler</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house,index)=> (
            <Link to={`/homes/${index + 1}`}>
            <tr key={index}>
              <td>{house.name}</td>
              <td>{house.address}</td>
              <td>{house.description}</td>
              <td>{house.price} Sus</td>
              <td><img src={house.image} alt={house.name} width={100}/></td>
            </tr>
            </Link>
            
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomesListPage;